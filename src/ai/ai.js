const tf = require('@tensorflow/tfjs')

const LABEL_LOOKUP = {
    0: "Cracked",
    1: "Ridiculous",
    2: "Weak",
    3: "Moderate",
    4: "Strong",
    5: "Very strong"
}

const model = await tf.loadGraphModel('/model/v1_1/model.json')

function prepareData(passswords, maxLength = 15, numClasses = 6) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    function oneHotEncode(text, maxLength) {
        const encoding = new Array(maxLength).fill(0).map(() => new Array(chars.length).fill(0));
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const index = chars.indexOf(char);
            if (index !== -1) {
                encoding[i][index] = 1;
            }
        }
        return encoding;
    }

    const trainPasswordsEncoded = [];
    for (let i = 0; i < passswords.length; i++) {
        const password = String(passswords[i]);
        trainPasswordsEncoded.push(oneHotEncode(password, maxLength));
    }

    return tf.tensor(trainPasswordsEncoded)
}

const predict = async (password) => {
    const prediction = await model.predictAsync(prepareData([password]))
    return prediction
}

export { model, LABEL_LOOKUP, predict, prepareData }
import * as React from "react"
import Layout from "../components/layout"
import SearchEngineOptimization from "components/seo"
import { Android, ChevronRight, Cpu, Github, InfoCircleFill, Windows } from "react-bootstrap-icons"
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap"
import KeyGo from 'images/logos/keygo.png'
import * as styles from "./index.module.css"
import { SectionTitle } from "components/pageTitles"
import { useInView } from "react-intersection-observer"
import useGitHubRepoData from "hooks/useGitHubRepoData"
import { FeatureSmall } from "components/features"
import { StaticImage } from "gatsby-plugin-image"

const aboutMe = [
  { title: 'Name', content: 'Davis Alessandro Wolfermann' },
  { title: 'E-Mail', content: 'offrange.developer@gmail.com' },
  { title: 'Birthday', content: `23 July 2005 (${new Date(Date.now() - new Date("07/23/2005")).getUTCFullYear() - 1970})` },
  { title: 'GitHub', content: <a href="https://github.com/OffRange" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">@OffRange</a> },
  { title: 'Degree', content: 'Abitur' },
  { title: 'Country', content: 'Germany' },
]

const skills = [
  { name: "HTML", value: 75 },
  { name: "CSS", value: 60 },
  { name: "JavaScript", value: 80 },
  { name: "Java", value: 100 },
  { name: "Kotlin", value: 100 },
  { name: "C#", value: 90 },
  { name: "Python", value: 85 },
]

const education = [
  {
    name: "Julius-Ambrosius-Hülsse Gymnasium",
    duration: "2016 - 2024",
    type: "Secondary School",
    location: "Julius-Ambrosius-Hülsse Gymnasium, Dresden, Germany",
    listItems: ["Attended advanced courses in Mathematics and Chemistry"]
  },
  {
    name: "33. Grundschule",
    duration: "2012 - 2016",
    type: "Primary School",
    location: "33. Grundschule, Dresden, Germany"
  },
]

const PersonalInformationSection = ({ information }) => {
  return (
    <Col lg="6">
      <ul>
        {
          information.map((info, i) => (
            <li key={i}>
              <ChevronRight className="me-2 text-primary" />
              <strong>{info.title}:</strong>
              <span>{info.content}</span>
            </li>
          ))
        }
      </ul>
    </Col>
  )
}

const Skill = ({ name, value }) => {
  const [ref, inView] = useInView({
    threshold: 1, triggerOnce: true,
    rootMargin: '-8% 0px'
  })
  return (
    <div className={styles.skill}>
      <span>
        {name}
        <i>{value}%</i>
      </span>
      <ProgressBar ref={ref} now={value} className={`${inView ? '' : 'zero'}`} />
    </div>
  )
}

const SkillSection = ({ skills }) => {
  return (
    <Col lg={6}>
      {
        skills.map((skill, i) => (
          <Skill key={i} {...skill} />
        ))
      }
    </Col>
  )
}

const School = ({ name, duration, type, location, listItems }) => {
  return (
    <div className={`${styles.resumeItem}`}>
      <h4 className={`${styles.centerTitle}`}>{name} <span className={`${styles.badge} badge rounded-pill bg-primary-subtle text-body-emphasis`}>{type}</span></h4>
      <h5 className="rounded">{duration}</h5>
      <p><em>{location}</em></p>
      {
        !listItems ? '' : (
          <ul>
            {
              listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))
            }
          </ul>
        )
      }

    </div>
  )
}

const IndexPage = () => {
  const projects = [
    {
      name: "KeyGo - Digital Vault",
      projectInfo: useGitHubRepoData("PasswordManager"),
      projectPageUrl: "/projects/keygo",
      projectGitHub: "https://github.com/OffRange/PasswordManager",
      logo: KeyGo,
      features: [
        {
          name: "Android",
          description: "Secure and effortless password management on Android. Fully compatible with Android 6+",
          icon: <Android />
        },
        {
          name: "Windows",
          description: "In Development",
          icon: <Windows />
        }
      ]
    },
    {
      name: "Password Strength AI",
      projectInfo: useGitHubRepoData("PassStrengthAI"),
      projectPageUrl: "/projects/password-strength-ai",
      projectGitHub: "https://github.com/OffRange/PassStrengthAI",
      logo: <Cpu width={150} height={150} className="rounded-5" />,
      beta: true,
      features: [
        {
          name: "Python",
          description: "Developed with Python and powered by TensorFlow.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff">{/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" /></svg>
        },
        {
          name: "Experimental",
          description: "This is an AI project of mine that I used for learning and experimentation.",
          icon: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff">{/*Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}<path d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z" /></svg>
        },
      ]
    },
  ]

  return (
    <Layout>
      <section className={`${styles.about}`}>
        <Container className="shadow p-5">
          <Row>
            <Col lg="4" data-aos="fade-right">
              <StaticImage alt="Logo" src="../images/logos/icon.jpg" className="d-block shadow mx-auto rounded-4 img-fluid" />
            </Col>
            <Col lg="8" className={`pt-4 pt-lg-0 ${styles.content}`}>
              <div className="section-title">
                <h2 className="text-start line">About Me</h2>
              </div>
              <Row className="mt-4" data-aos="fade-left">
                <PersonalInformationSection information={aboutMe.slice(0, Math.ceil(aboutMe.length / 2))} />
                <PersonalInformationSection information={aboutMe.slice(Math.ceil(aboutMe.length / 2))} />
              </Row>

              <div data-aos="fade-left" className="text-justify">
                <p>My programming journey began in 2016 when I ventured into developing a LAN chat program using Batch. Since then, my passion for programming has grown, leading me to implement my Chat-Program in Java.</p>
                <p>Additionally, I have gained experience in developing Minecraft plugins in Java. This allowed me to dive deeper into the world of Java programming and further enhance my skills.</p>
                <p>More recently, I have focused on Android software development, where I aspire to create a secure Password Manager with high-level encryption. I am fascinated by the potential of mobile applications and the importance of data security.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="skills">
        <Container className="shadow p-5">
          <SectionTitle title="Skills" description="Here, you can find a list of programming languages I am proficient in and feel comfortable working with" />
          <Row data-aos="fade-up">
            <SkillSection skills={skills.slice(0, Math.ceil(skills.length / 2))} />
            <SkillSection skills={skills.slice(Math.ceil(skills.length / 2))} />
          </Row>
        </Container>
      </section>

      <section className={`${styles.resume}`}>
        <Container className="shadow p-5">
          <SectionTitle title="Resume" description="Here, you can find my resume" />
          <Row data-aos="fade-up">
            <Col lg="6">
              <h3 className={`${styles.resumeTitle}`}>Sumary</h3>
              <div className={`${styles.resumeItem} pb-0`}>
                <h4 className="mb-2">Davis Wolfermann</h4>
                <ul>
                  <li>Dresden, Saxony, Germany</li>
                  <li>offrange.developer@gmail.com</li>
                </ul>
              </div>
              <h3 className={`${styles.resumeTitle}`}>Education</h3>
              {
                education.map((school, i) => (
                  <School key={i} className={i === education.length - 1 ? 'pb-0' : ''} {...school} />
                ))
              }
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-work" id="projects">
        <Container className="shadow p-5">
          <SectionTitle title="My Projects" description="Take a moment to explore my portfolio of recent projects." />

          {
            projects.map((project, i) => (
              <Row key={i} md="2" xs="1" className="align-items-md-center g-5 py-5">
                <Col className="d-flex flex-column align-items-start gap-2 work-box" data-aos="fade-up">
                  <div className="work-icon text-center mb-3">
                    {
                      typeof project.logo === 'string' ? (
                        <img alt={`${project.name} logo`} src={project.logo} fluid width="150" className="rounded-5" loading="lazy" />
                      ) : (
                        project.logo
                      )
                    }

                  </div>
                  <h3 className="fw-bold work-title">{project.name}</h3>
                  <p className="text-body-secondary text-justify">{project.projectInfo.projectData.description}{project.projectInfo.projectData.description && project.beta ? <sup>1</sup> : ''}</p>
                  <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Button href={project.projectPageUrl}><span><InfoCircleFill className="me-2" />View Project's Page</span></Button>
                    <Button href={project.projectGitHub}>
                      <span>
                        <Github className="me-2" />
                        View on GitHub
                      </span>
                    </Button>
                  </div>
                </Col>
                <Col data-aos="fade-left">
                  <Row sm="2" xs="1" className="g-2">
                    {
                      project.features.map((feature, i) => (
                        <FeatureSmall key={i} title={feature.name} {...feature} />
                      ))
                    }
                  </Row>
                </Col>
              </Row>
            ))
          }

          {
            projects.find(project => project.beta && !(project.projectInfo.error || project.projectInfo.loading)) && (
              <p className="text-secondary"><sup>1</sup> Please be aware that the project is currently in beta. While it endeavors to offer accurate results, there is a possibility of occasional inaccuracies.</p>
            )
          }
        </Container>
      </section>
    </Layout >
  )
}

export default IndexPage

export const Head = () => <SearchEngineOptimization title={"Davis Wolfermann - Home"}
  description={"I am Davis Wolfermann, a student with expertise in Android app development and software engineering.Welcome to my portfolio website, where you can explore my projects and skills in web and mobile development.Discover my passion for creating innovative solutions and browse through my portfolio to see my work in action."}
  keywords={"Davis Wolfermann, Davis, OffRange, developer, software developer, github, portfolio, android development, software engineering, projects, skills, password manager, aes encryption, open-source"} />

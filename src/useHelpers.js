// useDocumentTitle.js
import { useRef, useEffect } from 'react'
import $ from 'jquery';

function useDocumentTitle(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current
    }
  })
}

function useProject(project, prevailOnUnmount = false) {
  const defaultTitle = useRef($('#downloads').text())

  useEffect(() => {
    $('#project-info').removeClass('d-none')
    $.get(`https://api.github.com/repos/OffRange/${project}/releases`, function (data) {
      var count = 0
      for (var index in data) {
        count += data[index]["assets"][0]["download_count"]
      }
      $("#downloads").text(`${count} [${data[0]["assets"][0]["download_count"]}]`)
      $("#latest-version").children().text(`${data[0]["tag_name"]}`)
      $("#latest-version").attr('href', `https://github.com/OffRange/${project}/releases`)
    })

    $.get(`https://api.github.com/repos/OffRange/${project}`, function (data) {
      $("#license").text(data['license']['name'])
    })
  }, [project])

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      $('#downloads').text(defaultTitle.current)
    }
  })
}

export { useDocumentTitle, useProject }
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

function useDownloadCounter(project, prevailOnUnmount = false) {
  const defaultTitle = useRef($('#downloads').text())

  useEffect(() => {
    $.get(`https://api.github.com/repos/OffRange/${project}/releases`, function (data) {
      var count = 0
      for (var index in data) {
        count += data[index]["assets"][0]["download_count"]
      }
      $("#downloads").text("Downloads: " + count + " Latest version: " + data[0]["assets"][0]["download_count"])
    })
  }, [project])

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      $('#downloads').text(defaultTitle.current)
    }
  })
}

export { useDocumentTitle, useDownloadCounter }
import Header from './components/Header'
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Footer } from './components/Footer'
import './App.css'
import { PasswordManager } from './pages/projects/PasswordManager'
import { Support } from './pages/Support'
import { Error404 } from './pages/404'
import { Home } from './pages/Home'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Aos from 'aos'
import { LegalDisclosure } from './pages/LegalDisclosure'
import { PassStrengthAI } from './pages/projects/PassStrengthAI'

function App() {

  const [projectInfo, setProjectInfo] = useState()
  const [projectName, setProjectName] = useState()
  useEffect(() => {
    if (projectName === undefined) {
      setProjectInfo()
      return
    }
    var jsonData = {}
    fetch(`https://api.github.com/repos/OffRange/${projectName}/releases`).then(res => res.json()).then(data => {
      var count = 0
      for (var index in data) {
        count += data[index]["assets"][0]["download_count"]
      }
      jsonData = { downloads: { sum: count, latest: data[0]["assets"][0]["download_count"] }, versions: { latest: { tag: data[0]["tag_name"], url: data[0]["assets"][0]["browser_download_url"] }, releasesUrl: `https://github.com/OffRange/${projectName}/releases` } }

    }).then(data => {
      return fetch(`https://api.github.com/repos/OffRange/${projectName}`)
    }).then(res => res.json()).then(projectData => {
      jsonData = { ...jsonData, license: projectData['license']['name'] }
      return fetch(`https://api.github.com/repos/OffRange/${projectName}/releases/latest`)
    }).then(res => res.json()).then(latestVersion => {
      const asset = latestVersion['assets'][0]
      jsonData = { ...jsonData, versions: { ...jsonData.versions, stable: { tag: latestVersion['tag_name'], url: asset['browser_download_url'] } } }

      setProjectInfo(jsonData)
    })
  }, [projectName])


  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.startsWith('/projects/')) {
      setProjectName()
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    setTimeout(function () {
      Aos.init({ duration: 600, easing: "ease", once: true })
    }, 60)
  }, [pathname]);

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects'>
          <Route index path='*' element={<Navigate to="/projects/passwordmanager" replace />} />
          <Route path='passwordmanager' element={<PasswordManager setProjectName={setProjectName} projectInfo={projectInfo} />} />
          <Route path='pass-strength-ai' element={<PassStrengthAI setProjectName={setProjectName} projectInfo={projectInfo} />} />
        </Route>
        <Route path='/support-me' element={<Support />} />
        <Route path='/legal-disclosure' element={<LegalDisclosure />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <div className="b-divider"></div>

      <Footer projectInfo={projectInfo} />
    </>
  )
}

export default App

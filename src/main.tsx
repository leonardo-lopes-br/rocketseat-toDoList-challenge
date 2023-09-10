import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/index.tsx'
import { HashRouter, Routes, Route } from "react-router-dom";

import './styles/globals.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter basename="homepage">
      <Routes>
        <Route path="/" Component={App} element={<App />}/>
      </Routes>
    </HashRouter>
        <App/>
  </React.StrictMode>
)

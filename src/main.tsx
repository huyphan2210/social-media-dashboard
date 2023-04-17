import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('container') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
)

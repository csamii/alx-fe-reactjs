import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <Header />
      <MainContent />
      <Counter />
      <UserProfile
        name="Alice"
        age="johmk"
        bio="Loves hiking and photography"
      />
      <Footer />
    </>
  )
}

export default App

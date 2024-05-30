import { useState } from 'react'

import Header from './components/Header/Header'
import InputGroup from './components/UserInput'
import Results from './components/Results'

function App() {

  return (
    <>
      <Header />
      <InputGroup />
      <Results />
    </>
  )
}

export default App

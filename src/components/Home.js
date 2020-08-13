import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push('/todolist')
  }

  return (
    <div className="home-main">
      <h1>Todo Exam App</h1>
      <button onClick={handleOnClick}>Start Now!</button>
    </div>
  )
}

export default Home
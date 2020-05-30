import React from 'react'
import Start from '../components/Star'
import { IconContext } from 'react-icons'
import { FaGitlab, FaGithub } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'

const App = ({ message }) => {

  const NUMBER_OF_STARS = 150

  var stars = [];
  for (var i = 0; i < NUMBER_OF_STARS; i++) {
    stars.push(<Start key={i} />);
  }

  return (
    <section
      className="homescreen m-0 flex flex-col w-screen justify-center bg-gray-800 h-screen text-gray-100 "
    >
      {stars}
      <nav>
        <ul className="flex justify-between text-xl py-8 px-8 md:px-48 ">
          <li>
            NICOLÁS ROMÁN HERNÁNDEZ
          </li>
          <li className="text-right">
            <span className="mr-1">🚧</span> Under Construction
          </li>
        </ul>
      </nav>

      <div className="my-auto space-y-48 py-8 px-8 md:px-48">
        <h1 className="text-6xl mx-auto">
          {message.split(' ')[0]} <br />
          <span className="text-teal-400">{message.split(' ')[1]}</span>
        </h1>

        <IconContext.Provider value={{ color: "grey", size: '5em' }}>
          <div className="container mx-auto flex md:w-2/5">
            <div className="flex-1">
              <a href="https://gitlab.com/nicor72" target="_blank" rel="noopener noreferrer">
                <FaGitlab />
              </a>
            </div>
            <div className="flex-1">
              <a href="https://github.com/nicor72" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            <a href="https://www.linkedin.com/in/nicolasromanhernandez" target="_blank" rel="noopener noreferrer">
              <GrLinkedin />
            </a>
          </div>
        </IconContext.Provider>
      </div>


    </section >
  )
}

export default App

import React, { useState, useEffect } from 'react'
import Data from './Data'
import Article from './Article'

function App() {


  const [theme, setTheme] = useState('light-theme');
  const [titleBtn, setTitleBtn] = useState(false);


  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const toggleTheme = () => {
    if ( theme === 'light-theme' ) {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }

   // theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme');

  }


  return (
    <main>
      <nav>
        <div className="nav-center">
            <h1>Overreacted</h1>
            <button className="btn" onClick={toggleTheme}>Toggle </button>
        </div>
      </nav>

      <section className="articles">
        {Data.map((item, index) => {
          return <Article key={index} {...item} index={index}  />
        })}
      </section>
    </main>
  )
}

export default App
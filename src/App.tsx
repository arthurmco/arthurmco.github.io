import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  const author = "Arthur Mendes";
  const birthDate = new Date(1997, 5 - 1, 30);

  const getYearsFromToday = (d: Date) => {
    const today = new Date();

    const diffSecs = (today - d) / 1000;
    return diffSecs / 3600 / 24 / 365;
  }

  const Breaker = () => {
    return (
      <span style={{
        textWeight: 200,
        opacity: 0.5
      }}>&nbsp;|</span>
    )
  }

  const years = getYearsFromToday(birthDate);

  return (
    <header>
      <h1 className="author-name">{author}</h1>
      <div className="author-info">{Math.floor(years)} anos
        <Breaker /> desenvolvedor e escritor
      </div>
      <hr />
    </header>
  )

}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <article>
        <section>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </section>
      </article>
      <footer>
        <div>
          made with &hearts; with <strong>vite</strong> and <strong>react</strong>
        </div>
      </footer>
    </>
  )
}

export default App

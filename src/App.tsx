import { HomeLinksArea } from './components/HomeLinksArea';
import { MainLayout } from './layouts/MainLayout';
import './App.css'
import { Link } from 'react-router';

const PipeSeparatedLinks = () => {

  const links = [
    ["Sobre mim", "/about"],
    ["Perguntas frequentes", "/faq"],
    ["Meu setup", "/setup"],
  ]

  return (
              <section className='pipe-links'>
                {links.map(([text, linkTo]) => ((
                  <span><Link to={linkTo || "/"}>{text}</Link></span>
                )))}
              </section>
  )
}


function App() {
    return (
        <MainLayout language='pt-br'>
          <HomeLinksArea />
          <PipeSeparatedLinks />
        </MainLayout>
    )
}

export default App

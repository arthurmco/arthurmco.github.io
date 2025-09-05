import { HomeLinksArea } from './components/HomeLinksArea';
import { MainLayout } from './layouts/MainLayout';
import './App.css'

const PipeSeparatedLinks = () => {

  const links = [
    ["Sobre mim"],
    ["Perguntas frequentes"],
    ["Meu setup"],
  ]

  return (
              <section className='pipe-links'>
                {links.map(([text]) => ((
                  <span><a href="#">{text}</a></span>
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

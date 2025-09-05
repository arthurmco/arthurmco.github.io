import { Link } from 'react-router';
import { MainLayout } from './layouts/MainLayout';

function AboutPage() {
    return (
        <MainLayout hideHeader={true} language='pt-br'>
            <section>
                <Link to="/">Voltar</Link>
            </section>
            <main>
              <h2>Sobre mim</h2>
              <hr />
              TODO
              
            </main>
        </MainLayout>
    )
}

export default AboutPage

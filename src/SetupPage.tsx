import { Link } from 'react-router';
import { MainLayout } from './layouts/MainLayout';

function SetupPage() {
    return (
        <MainLayout hideHeader={true} language='pt-br'>
            <section>
                <Link to="/">Voltar</Link>
            </section>
            <main>
              <h2>Configuração</h2>
              <hr />
              TODO
              
            </main>
        </MainLayout>
    )
}

export default SetupPage

import { Link } from 'react-router';
import { MainLayout } from './layouts/MainLayout';

function MicrostoryListPage() {
    return (
        <MainLayout hideHeader={true} language='pt-br'>
            <section>
                <Link to="/">Voltar</Link>
            </section>
            <main>
              <h2>Microcontos</h2>
              <hr />
                      (a lista virá aqui)
              
            </main>
        </MainLayout>
    )
}

export default MicrostoryListPage

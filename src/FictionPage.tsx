import { Link } from 'react-router';
import { MainLayout } from './layouts/MainLayout';

function FictionPage() {
    return (
        <MainLayout hideHeader={true} language='pt-br'>
            <section>
                <Link to="/">Voltar</Link>
            </section>
            <section>
              <section>
                <h2>Meus livros</h2>
                    <ul>
                        <li>Crush Digital</li>
                        <li>Refúgio</li>
                    </ul>
                </section>
              <section>
                <h2>Meus contos</h2>
                    <ul>
                        <li>Combustível</li>
                        <li>Secretus</li>
                        <li>Atualização de Software</li>
                        <li>Energold</li>
                        <li>Vida Invisível</li>
                        <li>A Serviço da Empresa</li>
                    </ul>
                </section>
            </section>
        </MainLayout>
    )
}

export default FictionPage

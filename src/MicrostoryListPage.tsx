import { Link } from 'react-router';
import { MainLayout } from './layouts/MainLayout';

import storyList from './stories/stories.json'
import { MicroStoryList } from './components/MicroStory';


function MicrostoryListPage() {
    return (
        <MainLayout hideHeader={true} language='pt-br'>
            <section>
                <Link to="/">Voltar</Link>
            </section>
            <main>
                <h2>Microcontos</h2>
                <hr />
                <MicroStoryList stories={storyList} />
            </main>
        </MainLayout>
    )
}

export default MicrostoryListPage

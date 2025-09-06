import { Link, useParams } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import _storyFiles from './stories/files.json'

import { Base64 } from 'js-base64';
import Markdown from 'react-markdown'
import pako from 'pako'

import './MicrostoryPage.css'

const storyFiles: Record<string, string[]> = _storyFiles;
import storyList from './stories/stories.json'
import {
  parseStoryInfo,
  StorySummary,
  type RawStoryInfo} from './components/MicroStory';

import remarkFlexibleContainers from 'remark-flexible-containers'

const retrieveStory = (storyName: string): string => {
    const storyData = storyFiles[storyName];

    if (!storyData) {
        throw new Error("Short story not found")
    }

    const rawContent = Base64.toUint8Array(storyData.join(""))
    return new TextDecoder().decode(pako.ungzip(rawContent))
}


function MicrostoryPage() {

    const returnSection = (<section>
        <Link to="/microstories">Voltar</Link>
    </section>
    )

    const { storyName } = useParams();

    try {
        const data = retrieveStory(storyName || "")
        const story = (storyList as Record<string, RawStoryInfo>)[storyName || ""];

        return (
            <MainLayout hideHeader={true} language='pt-br'>
                {returnSection}
                <main className="story">
                    <h1>{story.name}</h1>
                    <StorySummary item={parseStoryInfo(story)} />
                    <Markdown remarkPlugins={[remarkFlexibleContainers]}>
                        {data}
                    </Markdown>
                </main>
            </MainLayout>
        )

    } catch (e) {
        return (
            <MainLayout hideHeader={true} language='pt-br'>
                {returnSection}
                <main>
                    ERRO: {(e as Error).message}
                </main>
            </MainLayout>
        )

    }

}

export default MicrostoryPage

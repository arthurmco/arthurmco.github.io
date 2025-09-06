import { Link } from 'react-router';

export interface RawStoryInfo {
    name: string;
    readSecs: number;
    created: string;
    lastModified: string;
}

export interface StoryInfo {
    name: string;
    readSecs: number;
    created: Date;
    lastModified: Date;
}

export const parseStoryInfo = (ins: RawStoryInfo): StoryInfo => {
    return {
        name: ins.name,
        readSecs: ins.readSecs,
        created: new Date(ins.created),
        lastModified: new Date(ins.lastModified)
    }
}

export const StoryItem = (props: { itemkey: string, item: StoryInfo }) => {
    const { itemkey, item } = props;

    const readMinutes = Math.ceil(item.readSecs / 60);
    const readTime = `${readMinutes} minuto${readMinutes > 1 ? "s" : ""}`;

    return (
        <li>
            <Link to={`/microstory/${itemkey}`}>
                {item.name}
            </Link><br />Cerca de {readTime} de leitura
            <br />Escrito em {item.created.toLocaleDateString()}

        </li>
    )
}

export const StorySummary = (props: { item: StoryInfo }) => {
    const { item } = props;

    const readMinutes = Math.floor(item.readSecs / 60);
    const readSecs = item.readSecs % 60;

    const showReadTime = () => {
        const strSecs = `${readSecs.toLocaleString().padStart(2, "0")}s`

        if (readMinutes < 1) {
            return strSecs;
        }

        const strMins = `${readMinutes.toLocaleString().padStart(2, "0")}m`
        return `${strMins}${strSecs}`

    }

    const strCreated = item.created.toLocaleDateString();
    const strModified = item.lastModified.toLocaleDateString();

    return (
        <>
            <section className='story-summary'>
                <p>escrito em {strCreated}</p>
                {(strCreated !== strModified) && <p>modificado em {strModified}</p>}
                <p>{showReadTime()} aproximados de leitura</p>
            </section>
          <p style={
            {textAlign: "right",
              color: "var(--fg3)",
              marginBottom: "2rem"
            }}>— por Arthur Mendes</p>
        </>
    )
}

export const MicroStoryList = (props: { stories: Record<string, RawStoryInfo> }) => {

    const storiesData = Object.entries(props.stories);

    return (<ul>
        {storiesData.map(([itemkey, item]) => (
            (<StoryItem {...{ key: itemkey, itemkey, item: parseStoryInfo(item) }} />)))}
    </ul>
    )
}

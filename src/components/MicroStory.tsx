import { Link } from 'react-router';

export interface StoryInfo {
    name: string;
    readSecs: number;
}

export const StoryItem = (props: { itemkey: string, item: StoryInfo }) => {
    const { itemkey, item } = props;

    const readMinutes = Math.ceil(item.readSecs / 60);
    const readTime = `${readMinutes} minuto${readMinutes > 1 ? "s" : ""}`;

    return (
        <li>
            <Link to={`/microstory/${itemkey}`}>
                {item.name}
            </Link><br/>Cerca de {readTime} de leitura
        </li>
    )
}

export const MicroStoryList = (props: { stories: Record<string, StoryInfo> }) => {

    const storiesData = Object.entries(props.stories);

    return (<ul>
        {storiesData.map(([itemkey, item]) => (
            (<StoryItem {...{ key: itemkey, itemkey, item }} />)))}
    </ul>
    )
}

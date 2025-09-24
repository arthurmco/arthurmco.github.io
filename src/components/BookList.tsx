
export interface ShortStory {
    name: string;
    source: string;
    url: string;
}

export interface BookRaw {
    name: string;
    date: string;
    url: string;
}

export type Book = {
    name: string;
    launchDate: Date;
    url: URL
}

export const parseBook = (br: BookRaw): Book => {
    return {
        name: br.name,
        launchDate: new Date(br.date),
        url: new URL(br.url)
    }
}

const transformSourceName = (s: string): string => {
    return s.replace("RLF", "Revista Literatura Fantástica")
        .replace("COF", "CyberOpera Fantástica");
}

export const ShortStoryDisplay = (props: { items: ShortStory[] }) => {
    return <ul className="story-display">
        {props.items.map(s => {
            const key = s.name.toLowerCase().replace(" ", "");
            const fullSource = transformSourceName(s.source)

            return <li key={key}>
                <a target="_blank" href={s.url}>{s.name}</a><br />
                     <small>Disponível na {fullSource}</small>
            </li>
        })}
    </ul>
}


export const BookDisplay = (props: { items: Book[] }) => {
    return <ul className="story-display">
        {props.items.map(s => {
            const key = s.name.toLowerCase().replace(" ", "");

            return <li key={key}>
                <a target="_blank" href={s.url.toString()}>{s.name}</a><br />
                     <small>Lançado em {s.launchDate.toLocaleDateString("pt-BR", {
                       year: "numeric",
                       month: "long",
                       day: "2-digit"
                     })}</small>
            </li>
        })}
    </ul>
}

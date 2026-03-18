import type { Story } from '../model/Story';

const transformSourceName = (s: string): string => {
    return s.replace("RLF", "Revista Literatura Fantástica")
        .replace("COF", "CyberOpera Fantástica")
        .replace("BF", "Barbárie Fantástica");
}


export const StoryDisplay = (props: { item: Story}) => {
  const story = props.item;
  
  const link = <><a target="_blank" href={story.url.toString()}>{story.name}</a><br /></>;  
  const linkClass = "story-tag-" + story.info.type;
  
  if (story.info.type === "shortstory") {
    const fullSource = transformSourceName(story.info.source);
    const comment = story.info.comment;
    
    return <li className={linkClass}>
             {link}
             <small>Disponível na {fullSource}</small>
             {comment && <><br />
                             <small className="story-comment">({comment})</small>
                           </>}
           </li>    
  } else {
    return <li className={linkClass}>
             {link}
             <small>Lançado em {story.launchDate.toLocaleDateString("pt-BR", {
               year: "numeric",
               month: "long",
               day: "2-digit"
             })}</small>
           </li>
  }
  
}

export const StoryListDisplay = (props: { items: Story[] }) => {
    return <ul className="story-display">
        {props.items.map(s => {
          const key = s.name.toLowerCase().replace(" ", "");
          return <StoryDisplay item={s} key={key} />
        })}
    </ul>
}

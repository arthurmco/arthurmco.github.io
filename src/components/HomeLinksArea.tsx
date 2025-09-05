import {
    faLaptop,
    faPenNib,
    faPlay
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HomeLinksArea.css';

export interface HomeLinkInfo {
    title: string;
    icon: any;
    description: string;
    url: string;
    iconMargin: number;
}

export const HomeLinksArea = () => {

    const links: HomeLinkInfo[] = [
        {
            title: "Blog",
            icon: faLaptop,
            description: "Minhas escritas técnicas e conteúdo informativo na área de tecnologia",
            iconMargin: 0.1,
            url: "https://arthurmco.github.io/blog/"
        },
        {
            title: "Livros de ficção",
            icon: faPenNib,
            description: "Minhas obras de ficção, em diferentes searas da literatura fantástica. " +
                "Todas disponíveis na Amazon",
            iconMargin: 0,
            url: ""
        },
        {
            title: "Aparições na mídia",
            icon: faPlay,
            description: "Minhas aparições em eventos e canais pequenos e grandes, " +
                "tudo em uma playlist no Youtube",
            iconMargin: 0,
            url: ""
        }

    ]

    return (
        <section className='home-links'>
            {links.map(l => ((
                <div key={l.title.toLowerCase()} className='home-link'>
                    <div className='link-icon' style={{
                        marginLeft: `${l.iconMargin}em`,
                        marginRight: `${l.iconMargin}em`
                    }}>
                        <FontAwesomeIcon icon={l.icon} />
                    </div>
                    <a className='link-title' href={l.url}>{l.title}</a>
                    <div className='link-description'>{l.description}</div>
                </div>
            )))}
        </section>
    )

}

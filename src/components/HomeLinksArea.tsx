import {
    faBook,
    faLaptop,
    faPenNib,
    faPlay
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HomeLinksArea.css';
import type { JSX, PropsWithChildren } from 'react';
import { Link } from 'react-router';

export interface HomeLinkInfo {
    title: string;
    icon: any;
    description: string;
    url: string | ((props: PropsWithChildren<{}>) => JSX.Element);
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
            icon: faBook,
            description: "Minhas obras de ficção, em diferentes searas da literatura fantástica. " +
                "Todas disponíveis na Amazon",
            iconMargin: 0,
            url: (props: PropsWithChildren<{}>) => {
              return <Link className="link-title"
                       to="/books">{props.children}</Link>
            }
        },
        {
            title: "Microcontos",
            icon: faPenNib,
            description: "Histórias curtas que eu resolvi deixar disponíveis gratuitamente",
            iconMargin: 0,
            url: (props: PropsWithChildren<{}>) => {
              return <Link className="link-title"
                       to="/microstories">{props.children}</Link>
            }
        },
        {
            title: "Aparições na mídia",
            icon: faPlay,
            description: "Minhas aparições em eventos e canais pequenos e grandes, " +
                "tudo em uma playlist no Youtube",
            iconMargin: 0,
            url: "https://www.youtube.com/playlist?list=PLDGccDa8qEwNqtGTLBGwgQByVtdfUb4TQ"
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
                    {
                        typeof l.url === "string" ? <a className='link-title' href={l.url}>{l.title}</a>
                            : l.url({
                                children: <>{l.title}</>
                            })
                    }
                    <div className='link-description'>{l.description}</div>
                </div>
            )))}
        </section>
    )

}

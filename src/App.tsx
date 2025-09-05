import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faLinkedin,
    faGithub,
    faTwitter,
    faDiscord,
    faSpotify
} from '@fortawesome/free-brands-svg-icons'

function Header() {
    const author = "Arthur Mendes";
    const birthDate = new Date(1997, 5 - 1, 30);

    const getYearsFromToday = (d: Date) => {
        const today = new Date();

        const diffSecs = (today - d) / 1000;
        return diffSecs / 3600 / 24 / 365;
    }

    const Breaker = () => {
        return (
            <span style={{
                fontWeight: 200,
                opacity: 0.75
            }}>&nbsp;|</span>
        )
    }

    const years = getYearsFromToday(birthDate);

    return (
        <header>
            <h1 className="author-name">{author}</h1>
            <div className="author-info">{Math.floor(years)} anos
                <Breaker /> desenvolvedor e escritor
            </div>
            <hr />
        </header>
    )

}

interface FollowLinkInfo {
    url: string;
    icon: any;
}

const FollowLinkArea = () => {

    const links: FollowLinkInfo[] = [
        { url: "https://www.facebook.com/arthur.mendes.coelho", icon: faFacebook },
        { url: "https://www.linkedin.com/in/arthur-mendes-6ab064134/", icon: faLinkedin },
        { url: "https://github.com/arthurmco", icon: faGithub },
        { url: "https://twitter.com/usrbinarthur", icon: faTwitter },
        //      {url: "https://telegram.me/arthurmco", icon:"fab fa-telegram-plane"}, 
        { url: "https://discordapp.com/users/296493154650161152", icon: faDiscord },
        { url: "https://open.spotify.com/user/arthurmco?si=FzHXT6fITzeF2AtnDbuW_Q", icon: faSpotify },
    ]

    return (
        <section className="follow-links">
            {links.map(l => ((<a href={l.url} target="_blank">
                <FontAwesomeIcon icon={l.icon} />
            </a>)))}
        </section>
    )


}

function App() {

  return (
        <>
            <Header />
            <article>
                <FollowLinkArea />
                <section>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </section>
            </article>
            <footer>
                <div>
                    made with &hearts; with <strong>vite</strong> and <strong>react</strong>
                </div>
            </footer>
        </>
    )
}

export default App

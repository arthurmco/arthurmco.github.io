import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faLinkedin,
    faGithub,
    faTwitter,
    faDiscord,
    faSpotify,
    type IconDefinition
} from '@fortawesome/free-brands-svg-icons'
import './FollowLinksArea.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export interface FollowLinkInfo {
    url: string;
    icon: IconDefinition;
}

export const FollowLinkArea = () => {

    const links: FollowLinkInfo[] = [
        { url: "https://www.facebook.com/arthur.mendes.coelho", icon: faFacebook },
        { url: "https://www.linkedin.com/in/arthur-mendes-6ab064134/", icon: faLinkedin },
        { url: "https://github.com/arthurmco", icon: faGithub },
        { url: "https://twitter.com/usrbinarthur", icon: faTwitter },
        { url: "mailto:arthurmco@gmail.com", icon: faEnvelope },
        //      {url: "https://telegram.me/arthurmco", icon:"fab fa-telegram-plane"}, 
        { url: "https://discordapp.com/users/296493154650161152", icon: faDiscord },
        { url: "https://open.spotify.com/user/arthurmco?si=FzHXT6fITzeF2AtnDbuW_Q", icon: faSpotify },
    ]

    return (
        <section className="follow-links">
            {links.map(l => ((<a key={l.url} href={l.url} target="_blank">
                <FontAwesomeIcon icon={l.icon} />
            </a>)))}
        </section>
    )


}

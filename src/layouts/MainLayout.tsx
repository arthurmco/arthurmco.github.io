import { useEffect, type PropsWithChildren } from 'react'
import { FollowLinkArea } from '../components/FollowLinksArea'
    ; import './MainLayout.css'
import { useLocation } from 'react-router';

function Header() {
    const author = "Arthur Mendes";
    const birthDate = new Date(1997, 5 - 1, 30);

    const getYearsFromToday = (d: Date) => {
        const today = new Date();

        const diffSecs = (today.getTime() - d.getTime()) / 1000;
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

export type MainLayoutProps = {
    language: string;
    hideHeader?: boolean;
}


export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export const MainLayout = (props: PropsWithChildren<MainLayoutProps>) => {
    return (
        <>
            {!props.hideHeader ? <Header /> : <div style={{ marginTop: "2rem" }}></div>}
            <ScrollToTop />
            <article>
                {props.children}
            </article>
            <footer>
                <FollowLinkArea />
                <div>
                    made with &hearts; with <strong>vite</strong> and <strong>react</strong>
                </div>
            </footer>
        </>
    )

}

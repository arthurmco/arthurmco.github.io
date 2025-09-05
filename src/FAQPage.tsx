import { Link } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import type { PropsWithChildren } from 'react';
import './FAQPage.css'

export interface QuestionBlockProps {
    title: string;
}

const QuestionBlock = (props: PropsWithChildren<QuestionBlockProps>) => {
    return (
        <div className="question" style={{ marginBottom: "1rem" }}>
            <div className="title" style={{ fontWeight: "500", color: "var(--fg2)" }}>{props.title}</div>
            <div className='answer' style={{ color: "var(--fg4)", textAlign: "justify" }}>
                {props.children}
            </div>
        </div>
    )
}


function FAQPage() {
    return (
        <MainLayout hideHeader={true} language='pt-br'>
            <section>
                <Link to="/">Voltar</Link>
            </section>
            <main>
                <h2>Perguntas frequentes</h2>
                <hr />
                <h3>Tecnologia</h3>
                <QuestionBlock title="Por que você mudou o site?">
                    <p>O antigo não estava muito profissional.</p>
                    <p>As cores não combinavam, e ele parecia mais um site feito por um adolescente no Dreamweaver do que um mais sério.</p>
                    <p>Esse site, além de seguir um dos <a href="https://github.com/morhetz/gruvbox/blob/master/README.md">meus esquemas de cor preferidos</a>, tem um layout mais organizado, e uma sensação maior de velocidade.</p>
                </QuestionBlock>

                <QuestionBlock title="O que você usou pra fazer esse site?">
                    <p>Usei <code>react</code> e <code>vite</code>, e <code>react-router</code> para as rotas. Eu queria ter usado o <code>create-react-app</code>, mas ele foi depreciado.</p><p> O site está hospedado no Github Pages.</p>
                </QuestionBlock>

                <QuestionBlock title="Parou com o blog?">
                    <p>Ele está em hiato.</p>
                    <p>Perdão pelo palavrão, mas é foda ter motivação pra escrever conteúdo técnico quando as pessoas preferem ficar brigando se faculdade ou não é necessário, se framework X é melhor que Y, ou qual é a treta inútil da semana na &ldquo;bolha dev&rdquo;</p>
                    <p>Pelo menos as minhas histórias de ficção são melhor apreciadas.</p>
                    <p>Dito isso, pretendo voltar algum dia. Tanto é que ele ainda está no ar.</p>
                </QuestionBlock>
                <hr />
                <h3>Literatura</h3>
                <QuestionBlock title="O que você escreve?">
                    <p>Majoritariamente ficção científica <i>hard</i>.
                        Isso significa que a maior parte das tecnologias apresentadas é, em teoria, possível de existir.</p>
                    <p>Também escrevi um conto de terror (<em>Secretus</em>), e logo lançarei obras de alta e baixa fantasia</p>
                </QuestionBlock>
                <QuestionBlock title="Qual é a ordem pra ler as suas histórias?">
                    <p>Por enquanto, não há muitas, eu publiquei menos de dez histórias. Leia na ordem que você preferir.</p>
                    <p>Lembrando que <em>Secretus</em> não faz parte do mesmo universo compartilhado que as outras obras.</p>
                </QuestionBlock>
                <QuestionBlock title="Universo literário? Então é tipo um <alguma coisa>CU?">
                    <p>Não. Provavelmente é melhor.</p>
                    <p>E não é por desumildade. Eu tive tempo de planejar, e não sofro pressão de nenhuma grande empresa pra publicar minhas obras. Por causa disso, elas saem mais bem-feitas, e com bem menos inconsistências.</p>
                </QuestionBlock>
              <hr />
              <h3>Outros</h3>
                <QuestionBlock title="As letras são muito grandes!">
                  <p>Eu tenho três graus de astigmatismo.</p>
                  <p>O site é feito pra ser acessível pra quem não enxerga direito igual eu.</p>
                  <p>Se você se sentir <em>realmente</em> incomodado/a/e, você pode diminuir o zoom.</p>
                </QuestionBlock>
            </main>
        </MainLayout>
    )
}

export default FAQPage

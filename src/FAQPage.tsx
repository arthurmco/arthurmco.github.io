import { Link } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import { useState, type PropsWithChildren } from 'react';
import './FAQPage.css'

export interface QuestionBlockProps {
    title: string;
}

const QuestionBlock = (props: PropsWithChildren<QuestionBlockProps>) => {
    const [isExpanded, setExpanded] = useState(false)

  const expandedIcon = isExpanded ? <code>&#x25BC;</code> : <code>&#x25BA;</code>
  const controlID = props.title.substring(0, 32).toLowerCase().replace(/\s+/g, "-")
  const answerElementID = `answer-${controlID}`
  
    return (
        <div className="question">
          <a className="title" aria-expanded={isExpanded} href="#"
            aria-controls={answerElementID}
            onClick={e => {
            e.preventDefault();
            setExpanded(!isExpanded);
          }} >{expandedIcon} {props.title}</a>
          {isExpanded && <div className='answer' id={answerElementID}>
                {props.children}
            </div>}
        </div>
    )
}


function FAQPage() {
    return (
        <MainLayout hideHeader={true} language='pt-br'>
            <section>
                <Link to="/">Voltar</Link>
            </section>
            <main lang="pt-BR">
                <h2>Perguntas frequentes</h2>
                <small>(não sou famoso, mas já me perguntaram algumas coisas)</small>
                <hr />
                <h3>Tecnologia</h3>
                <QuestionBlock title="Por que você mudou o site?">
                    <p>O antigo não estava muito profissional.</p>
                    <p>As cores não combinavam, e ele parecia mais um site feito por um adolescente no Dreamweaver do que um mais sério.</p>
                    <p>Esse site, além de seguir um dos <a href="https://github.com/morhetz/gruvbox/blob/master/README.md">meus esquemas de cor preferidos</a>, tem um layout mais organizado, e uma sensação maior de velocidade.</p>
                </QuestionBlock>

                <QuestionBlock title="Como você fez esse site?">
                  <p>Usei <code>react</code> e <code>vite</code>, e <code>react-router</code> para as rotas. Eu queria ter usado o <code>create-react-app</code>, mas ele foi depreciado.</p>
                  <p>A paleta de cores é a mesma paleta do <code>gruvbox</code>.</p>
                  <p> O site está hospedado no Github Pages. Você pode ver o código fonte
                       dele <a target="_blank"
                              href="https://github.com/arthurmco/arthurmco.github.io">aqui</a>.
                  </p>
                </QuestionBlock>

              <QuestionBlock title="Where's the English?">
                <p>Almost everyone who access this site are speakers of Portuguese or have enough knowledge of the language to be able to read it. Only a minority does not speak it.</p>
                <p>That being said, if there is enough demand, I will translate every word of this site (including the short stories) into English. Just let me know so I can be aware of the growing demand.</p>
                <p>Until then, you can use the automatic translation.</p>
              </QuestionBlock>

                <QuestionBlock title="Parou com o blog?">
                    <p>Ele está em hiato.</p>
                    <p>Perdão pelo palavrão, mas é foda ter motivação pra escrever conteúdo técnico quando as pessoas preferem ficar brigando se faculdade é ou não é necessário, se framework X é melhor que Y, ou qual é a treta inútil da semana na &ldquo;bolha dev&rdquo;</p>
                    <p>Pelo menos as minhas histórias de ficção são melhor apreciadas.</p>
                    <p>Dito isso, pretendo voltar algum dia. Tanto é que ele ainda está no ar.</p>
                </QuestionBlock>
                <hr />
                <h3>Literatura</h3>
                <QuestionBlock title="O que você escreve?">
                    <p>Majoritariamente ficção científica <i>hard</i>.
                        Isso significa que a maior parte das tecnologias apresentadas nas minhas obras é, em teoria, possível de existir.</p>
                    <p>Também escrevi um conto de terror (<em>Secretus</em>), e logo lançarei obras de alta e baixa fantasia</p>
                </QuestionBlock>
                <QuestionBlock title="Qual é a ordem pra ler as suas histórias?">
                    <p>Por enquanto não há muitas, eu publiquei menos de dez histórias. Leia na ordem que você preferir.</p>
                    <p>Lembrando que <em>Secretus</em> não faz parte do mesmo universo compartilhado que as outras obras.</p>
                </QuestionBlock>
                <QuestionBlock title="Universo literário? Então é tipo um <alguma coisa>CU?">
                    <p>Não. Provavelmente é melhor.</p>
                    <p>E não é por desumildade. Eu tive tempo de planejar, e não sofro pressão de nenhuma grande empresa pra publicar minhas obras. Por causa disso, elas saem mais bem-feitas, e com bem menos inconsistências.</p>
                </QuestionBlock>
                <QuestionBlock title="O que você acha de livros escritos com inteligência artificial?">
                    <p>Se você me conhece, certamente já sabe.</p>
                    <p>Se não, aqui vai uma versão educada e polida da resposta.</p>
                    <p>Acredito que escrita seja uma arte, e que a arte é uma expressão individual do artista. Por pior que possa ser, cada artista tem um estilo, uma voz, uma personalidade única (porque as pessoas possuem vivências únicas), e a arte produzida por esses artistas também se torna única.</p>
                    <p>A IA, mais especificamente os LLMs, como ChatGPT, Grok, MetaAI e afins, &ldquo;criam&rdquo; coisas diretamente baseadas em materiais pré-existentes, sem adicionar aquela personalidade do autor. Como resultado, sua obra se torna genérica, sem personalidade, e até uma parede mal rebocada tem mais personalidade que tal texto</p>
                    <p>Fora isso, o uso de IA pra esse fim demonstra uma falta de respeito com a arte, e até mesmo com os artistas reais. Muitos artistas (e eu nem estou falando só de escrita) dependem de seus trabalhos para viverem. Se todos começarem a usar IA, com o tempo, os artistas se sentirão desmotivados e pararão de produzir, ou passarão fome e não terão como sustentar suas famílias. Como consequência, o mundo ficará cada vez mais genérico, mais afundado no desemprego e na pobreza, e com a inteligência artificial se retroalimentando para produzir coisas que são cada vez mais do mesmo.</p>
                    <p>Se eu usaria IA pra escrever um livro? Prefiro cortar meus braços e nunca mais escrever nada na vida.</p>
                </QuestionBlock>
                <QuestionBlock title="Então você é contra inteligência artificial, né?">
                    <p>Não.</p>
                    <p>Eu inclusive uso como etapa inicial de pesquisa, e já até treinei alguns modelos usando GPT-2 no meu computador.</p>
                    <p>Eu só sou contra IA pra produzir <em>arte</em> (e código, mas só pra coisas que não sejam boilerplate).</p>
                </QuestionBlock>

                <hr />
                <h3>Outros</h3>
                <QuestionBlock title="Cadê as suas outras redes sociais?">
                  <p>As que eu deixei no site são as que eu mais uso e que são públicas</p>
                  <p>Eu tenho Instagram, eu tenho WhatsApp, mas eles são privados, até pra evitar o acesso de bots a essas redes. </p>
                  <p>Foi exatamente por causa desses bots, por exemplo, que eu tirei o Telegram do site.</p>
                </QuestionBlock>
            </main>
        </MainLayout>
    )
}

export default FAQPage

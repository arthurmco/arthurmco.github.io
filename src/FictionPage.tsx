import { Link } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import {
    BookDisplay,
    parseBook,
    ShortStoryDisplay,
  type BookRaw,
  type ShortStory
} from './components/BookList'

import rawBookData from './books.json'
import './FictionPage.css'

const bookData = rawBookData as {
  books: BookRaw[],
  stories: ShortStory[]
}

function FictionPage() {
    return (
        <MainLayout hideHeader={true} language='pt-br'>
            <section>
                <Link to="/">Voltar</Link>
            </section>
            <article>
              <section className='story-block' id="short-story-block">
                <h2>Meus contos</h2>
                <ShortStoryDisplay items={bookData.stories} />
              </section>
              <section className='story-block' id="book-block">
                <h2>Meus livros</h2>
                <BookDisplay items={bookData.books.map(parseBook)} />
                </section>
            </article>
        </MainLayout>
    )
}

export default FictionPage

import { Link } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import {
    StoryListDisplay,
} from './components/BookList'

import {
  type RawBook,
  type RawShortStory
} from './model/Book.ts'

import rawBookData from './books.json'
import './FictionPage.css'
import { StoryParser } from './model/Story.ts';

const bookData = rawBookData as {
  books: RawBook[],
  stories: RawShortStory[]
}

function FictionPage() {
  const bookList = bookData.books.map(StoryParser.fromBook);
  const shortStoryList = bookData.stories.map(StoryParser.fromShortStory);
  
  return (
    <MainLayout hideHeader={true} language='pt-br'>
            <section>
                <Link to="/">Voltar</Link>
            </section>
            <article>
              <section className='story-block' id="short-story-block">
                <h2>Meus contos</h2>
                <StoryListDisplay items={shortStoryList} />
              </section>
              <section className='story-block' id="book-block">
                <h2>Meus livros</h2>
                <StoryListDisplay items={bookList} />
                </section>
            </article>
        </MainLayout>
    )
}

export default FictionPage

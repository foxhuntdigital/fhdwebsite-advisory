import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Stats from './components/Stats.tsx'
import Program from './components/Program.tsx'
import PrBoard from './components/PrBoard.tsx'
import Coach from './components/Coach.tsx'
import Services from './components/Services.tsx'
import Book from './components/Book.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Program />
        <PrBoard />
        <Coach />
        <Services />
        <Book />
      </main>
      <Footer />
    </>
  )
}

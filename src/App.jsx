import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DestinationsSection from './components/DestinationsSection'
import QuizSection from './components/QuizSection'
import ChatWidget from './components/ChatWidget'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="noise gradient-mesh min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <DestinationsSection />
        <QuizSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}

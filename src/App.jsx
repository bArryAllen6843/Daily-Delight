import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MenuBanner from "./components/MenuBanner"
import AdvanceOrder from "./components/AdvanceOrder"
import Features from "./components/Features"
import MenuPreview from "./components/MenuPreview"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      <main>
        <Hero />
        <MenuBanner />
        <AdvanceOrder />
        <Features />
        <MenuPreview />
      </main>
      <Footer />
    </div>
  )
}

export default App

import './App.css'
import Bgvid from '../src/assets/Bgvid.mp4'
import Header from './components/Header'
import HomeHero from './components/HomeHero'
import Achievements from './components/Achievements'
import Activity from './components/Activity'
import Documents from './components/Documents'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <div className="total-wrapper">
      <video src={Bgvid} autoPlay loop playsInline muted className="h-screen w-full object-cover" />
      <div className=" top-0 bottom-0 left-0 right-0 bg-black/60 absolute z-0 h-screen"></div>
      <section className="h-full flex flex-col">
      <Header/>
      <HomeHero/>
      </section>
      <section>
      <Achievements/>
      </section>
      <section>
        <Activity/>
      </section>
      <section>
        <Documents/>
      </section>
      <section>
        <About/>
      </section>
      <section>
        <Contact/>
      </section>
    </div>
  )
}

export default App

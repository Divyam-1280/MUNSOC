import './App.css'
import Bgvid from '../src/assets/YouCut_20230707_154954011.mp4'
import Header from './components/Header'
import HomeHero from './components/HomeHero'
import Achievements from './components/Achievements'
import Activity from './components/Activity'
import Documents from './components/Documents'

function App() {

  return (
    <div>
      <video src={Bgvid} autoPlay loop playsInline muted className="h-screen w-full object-cover" />
      <div className=" top-0 bottom-0 left-0 right-0 bg-black/60 absolute z-0"></div>
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
    </div>
  )
}

export default App

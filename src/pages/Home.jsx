import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Blogs/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
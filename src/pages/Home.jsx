import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <Projects/>
      <Blogs/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home
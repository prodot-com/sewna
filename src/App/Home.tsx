import Navbar from '../components/ui/Navbar'
import HeroSection from '../components/ui/Hero'
import { WobbleCardDemo } from '@/components/ui/WobbleCardDemo'
import { TestimonialsSection } from '@/components/ui/Testimonial'
import ContactSection from '@/components/ui/Contact'
import Footer from '@/components/ui/Footer'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar/>
      <HeroSection/>
      <TestimonialsSection/>
      <WobbleCardDemo/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home

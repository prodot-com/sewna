import Navbar from '../components/ui/Navbar'
import HeroSection from '../components/ui/Hero'
import HowItWorks from '@/components/ui/HowItWorks'
import TopDesigners from '@/components/ui/TopDesigner'
import { TestimonialsSection } from '@/components/ui/Testimonial'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar/>
      <HeroSection/>
      <TestimonialsSection/>
      <HowItWorks/>
      <TopDesigners/>
      <div className='w-full min-h-[500px]'></div>
    </div>
  )
}

export default Home

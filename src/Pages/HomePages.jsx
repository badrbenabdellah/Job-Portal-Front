import Header from '../Header/Header'
import Companies from '../LandingPage/Companies'
import DreamJob from '../LandingPage/DreamJob'
import JobCategory from '../LandingPage/JobCategory'
import Testimonials from '../LandingPage/Testimonials'
import Working from '../LandingPage/Working'

const Home = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
        <Header />
        <DreamJob />
        <Companies />
        <JobCategory />
        <Working />
        <Testimonials />
    </div>
  )
}

export default Home
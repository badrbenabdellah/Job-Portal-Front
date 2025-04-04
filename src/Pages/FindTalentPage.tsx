import { Divider } from '@mantine/core'
//import SearchBar from '../Components/FindJobs/SearchBar'
import Talent from '../Components/FindTalent/Talent'
import SearchBar from '../Components/FindTalent/SearchBar'

const FindTalentPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <SearchBar />
      <Divider size="xs" mx="md" />
      <Talent />
    </div>
  )
}

export default FindTalentPage

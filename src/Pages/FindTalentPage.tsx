import { Divider } from '@mantine/core'
import React from 'react'
import SearchBar from '../FindTalent/SearchBar'
import Talent from '../FindTalent/Talent'

const FindTalentPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Divider size="xs" mx="md" />
      <SearchBar />
      <Divider size="xs" mx="md" />
      <Talent />
    </div>
  )
}

export default FindTalentPage

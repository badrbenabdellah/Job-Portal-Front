import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { profile } from '../Data/TalentData'
import Profile from '../Components/TalentProfile/Profile'
import RecommendTalent from '../Components/TalentProfile/RecommendTalent'
import { getAllProfiles } from '../Services/ProfileService'

const TalentProfilePage = () => {
  const navigate = useNavigate();
  const [talents, setTalents] = useState<any[]>([]);
  const { id } = useParams();
  useEffect(() => {
    getAllProfiles().then((res) => {
      setTalents(res);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Divider size="xs" mx="md" />
            <Button onClick={()=>navigate(-1)} color='brightSun.4' my="sm" variant='light' leftSection={<IconArrowLeft size={20} />}>Back</Button>
        <div className='flex gap-5'>
          <Profile {...profile} />
          <RecommendTalent talents={talents} />
        </div>
    </div>
  )
}

export default TalentProfilePage
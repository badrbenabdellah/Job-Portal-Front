import { Button, Divider } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import ExpCard from './ExpCard'
import CertifiCard from './CertifiCard'
import { useParams } from 'react-router-dom'
import { getProfile } from '../../Services/ProfileService'

const Profile = (props:any) => {
  const {id} = useParams();
  const [profile, setprofile] = useState<any>({});
  useEffect(()=>{
    window.scrollTo(0, 0);
    getProfile(id).then((res)=>{
      setprofile(res);
    }).catch((err)=>{
      console.log(err);
    })
  }, [id])
  return (
    <div className='w-4/5'>
      <div className=''>
      <div className='relative'>
            <img className='rounded-t-2xl w-full h-48 object-cover' src='/Profile/banner.jpeg' alt='' />
            <img className='w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8' 
            src={profile.picture?`data:image/jpeg;base64,${profile?.picture}`:'/Avatar.png'} alt='' />
        </div>
        <div className='px-3 mt-16'>
            <div className='text-3xl font-semibold flex justify-between'>{profile?.name} <Button color='brightSun.4' variant='light'>Message</Button> </div>
            <div className='text-xl flex gap-1 items-center'> <IconBriefcase className='h-5 w-5' stroke={1.5}/> {profile?.jobTitle} &bull; {profile?.company}</div>
            <div className='text-lg flex gap-1 text-mine-shaft-300 items-center'>
                <IconMapPin className='h-5 w-5' stroke={1.5}/> {profile?.location}
            </div>
            <div className='text-lg flex gap-1 text-mine-shaft-300 items-center'>
                <IconBriefcase className='h-5 w-5' stroke={1.5}/>Expereince: {profile?.totalExp} Years
            </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className='px-3'>
          <div className='text-2xl font-semibold mb-3'>About</div>
          <div className='text-sm text-mine-shaft-300 text-justify'>{profile?.about}</div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className='px-3'>
          <div className='text-2xl font-semibold mb-3'>Skills</div>
          <div className='flex flex-wrap gap-2'>
            {
              profile?.skills?.map((skill:any , index:any) =><div key={index} className='bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1'>{skill}</div>)
            }
          </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className='px-3'>
          <div className='text-2xl font-semibold mb-3'>Experiences</div>
          <div className='flex flex-col gap-8'>
            {
              profile?.experience?.map((exp:any, index:any ) => <ExpCard key={index } {...exp} />)
            }
          </div>
        </div>
        <Divider mx="xs" my="xl" />
        <div className='px-3'>
          <div className='text-2xl font-semibold mb-3'>Certifications</div>
          <div className='flex flex-col gap-8'>
            {
              profile?.certifications?.map((certi:any, index:any ) => <CertifiCard key={index } {...certi} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
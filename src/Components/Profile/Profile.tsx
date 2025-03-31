import { Avatar, Divider, FileInput, Overlay } from '@mantine/core'
import { IconEdit } from '@tabler/icons-react'
import { useDispatch, useSelector } from 'react-redux'
import Info from './Info'
import { setProfile } from '../../Slices/ProfileSlice'
import About from './About'
import Skills from './Skills'
import Experiences from './Experiences'
import Certificate from './Certification'
import { useHover } from '@mantine/hooks'
import { successNotification } from '../../Services/NotificationService'
import { getBase64 } from '../../Services/Utilities'

const Profile = (props:any) => {
  const dispatch = useDispatch();
  const profile = useSelector((state:any) => state.profile);
  const { hovered, ref } = useHover();
  const handleFileChange =async (image:any) => {
    let picture:any = await getBase64(image);
    let updatedProfile = {...profile, picture:picture.split(',')[1]};
    dispatch(setProfile(updatedProfile));
    successNotification("Success", "Profile Picture Updated Successfully");

  }
  
  return (
    <div className='w-4/5 mx-auto'>
      <div className='relative'>
        <img className='rounded-t-2xl w-full h-48 object-cover' src='/Profile/banner.jpeg' alt='Bannière' />
        <div ref={ref} className='absolute flex items-center justify-center -bottom-1/3 left-3'>
            <Avatar 
              className="!w-48 !h-48 border-mine-shaft-950 border-8 rounded-full" src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/Avatar.png"} alt="Photo de profil"  />
            {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75} />}
            {hovered && <IconEdit className="absolute z-[300] !w-16 !h-16" />}
            {hovered && <FileInput onChange={handleFileChange}
              className='absolute [&_*]:!rounded-full z-[301] [&_*]:!h-full !h-full w-full' variant="transparent" accept="image/png,image/jpeg"/>}
          
        </div>
      </div>
        <div className='px-3 mt-16'>
            <Info />  
        <Divider mx="xs" my="xl" />
          <About />
        <Divider mx="xs" my="xl" />
          <Skills />
        <Divider mx="xs" my="xl" />
          <Experiences />
        <Divider mx="xs" my="xl" />
        <Certificate />
      </div>
    </div>
    
  )
}

export default Profile;
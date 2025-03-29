import { ActionIcon, Avatar, Divider, FileInput, Indicator, TagsInput, Textarea } from '@mantine/core'
import { IconDeviceFloppy, IconPencil, IconPlus } from '@tabler/icons-react'
import ExpCard from './ExpCard'
import CertifiCard from './CertifiCard'
import { useEffect, useState } from 'react'
import ExpInput from './ExpInput'
import CertiInput from './CertiInput'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../Services/ProfileService'
import Info from './Info'
import { setProfile } from '../../Slices/ProfileSlice'
import About from './About'
import Skills from './Skills'
import Experiences from './Experiences'

const Profile = (props:any) => {
  const dispatch = useDispatch();
  const user = useSelector((state:any) => state.user);
  const profile = useSelector((state:any) => state.profile);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);
  const handleEdit = (index:any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  }
  useEffect(() => {
    getProfile(user.id).then((data:any) => {
      dispatch(setProfile(data));
    }).catch((error:any) => {
      console.log(error);});
  
  }, [])
  return (
    <div className='w-4/5 mx-auto'>
      <div className='relative'>
        <img className='rounded-t-2xl w-full h-48 object-cover' src='/Profile/banner.jpeg' alt='Bannière' />
        <div className='absolute -bottom-1/3 left-3'>
          <Indicator 
            className="[&_.mantine-Indicator-indicator]:!border-4 [&_img]:hover:opacity-80" inline offset={30} 
            label={<IconPencil className='w-4/5 h-4/5' />} size={45} position='bottom-end'  color='brightSun.4' withBorder autoContrast >
            <Avatar 
              className="!w-48 !h-48 border-mine-shaft-950 border-8 rounded-full" src="/Avatar.png" alt="Photo de profil"  />
            <FileInput 
              className='absolute bottom-1 right-1 z-[201] w-10 [&_div]:text-transparent' variant='unstyled' 
              size='md' radius="xl" accept="image/png,image/jpeg"/>
          </Indicator>
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
        <div className='px-3'>
          <div className='text-2xl font-semibold mb-3 flex justify-between'>Certifications
            <div className='flex gap-2'>
              <ActionIcon onClick={() => setAddCerti(true)} size="lg" color='brightSun.4' variant="subtle">
                <IconPlus className='h-4/5 w-4/5'/>
              </ActionIcon>
              <ActionIcon onClick={() => handleEdit(4)} size="lg" color='brightSun.4' variant="subtle">
                {edit[4]?<IconDeviceFloppy className='h-4/5 w-4/5' />:<IconPencil className='h-4/5 w-4/5'/>}
              </ActionIcon>
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            {
              profile?.certifications?.map((certi:any, index:number ) => <CertifiCard key={index } edit={edit[4]} {...certi} />)
            }
            {
              addCerti&& <CertiInput setEdit={setAddCerti} />
            }
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Profile;
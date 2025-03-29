import { ActionIcon } from '@mantine/core'
import { IconCheck, IconDeviceFloppy, IconPencil, IconPlus, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../../Slices/ProfileSlice';
import { successNotification } from '../../Services/NotificationService';
import ExpCard from './ExpCard';
import ExpInput from './ExpInput';

const Experiences = () => {
    const [edit, setEdit] = useState(false);
    const profile = useSelector((state:any)=> state.profile);
    const [addExp, setAddExp] = useState(false)
    const dispatch = useDispatch();
    const handleClick = () => {
        if(!edit){
            setEdit(true);
            setAddExp(profile?.experiences);
        }
        else setEdit(false);
    }
    const handleSave = () => {
        setEdit(false);
        let updatedProfile = {...profile, addExp:addExp};
        dispatch(changeProfile(updatedProfile));
        successNotification("Success", "About Updated Successfully");
    }
  return (
    <div className='px-3'>
          <div className='text-2xl font-semibold mb-3 flex justify-between'>Experiences
            <div className='flex gap-2'>
              <ActionIcon onClick={() => setAddExp(true)} size="lg" color='brightSun.4' variant="subtle">
                <IconPlus className='h-4/5 w-4/5' stroke={1.5}/>
              </ActionIcon>
              <ActionIcon onClick={handleClick} size="lg" color={edit?"red.8":"brightSun.4"} variant="subtle">
                {edit?<IconX className='h-4/5 w-4/5' stroke={1.5} />:<IconPencil className='h-4/5 w-4/5' stroke={1.5}/>}
              </ActionIcon>
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            {
              profile?.experiences?.map((exp:any, index:number ) => <ExpCard key={index} index={index} {...exp} edit={edit} />)
            }
            {addExp &&<ExpInput add setEdit={setAddExp}/>}
          </div>
        </div>
  )
}

export default Experiences
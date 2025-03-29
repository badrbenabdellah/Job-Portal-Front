import { ActionIcon } from '@mantine/core'
import { IconDeviceFloppy, IconPencil, IconPlus, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import CertiInput from './CertiInput';
import CertifiCard from './CertifiCard';

const Certificate = () => {
    const [edit, setEdit] = useState(false);
    const [addCerti, setAddCerti] = useState(false);
    const profile = useSelector((state:any) => state.profile);
    const handleClick = () => {
        setEdit(!edit);
        
    }
  return (
    <div className='px-3'>
        <div className='text-2xl font-semibold mb-3 flex justify-between'>Certifications
            <div className='flex gap-2'>
                <ActionIcon onClick={() => setAddCerti(true)} size="lg" color='brightSun.4' variant="subtle">
                    <IconPlus className='h-4/5 w-4/5' stroke={1.5}/>
                </ActionIcon>
                <ActionIcon onClick={handleClick} size="lg" color={edit?"red.8":"brightSun.4"} variant="subtle">
                    {edit?<IconX className='h-4/5 w-4/5' stroke={1.5} />:<IconPencil className='h-4/5 w-4/5' stroke={1.5}/>}
                </ActionIcon>
            </div>
        </div>
        <div className='flex flex-col gap-8'>
            {
                profile?.certifications?.map((certi:any, index:number ) => <CertifiCard edit={edit} key={index } index={index} {...certi}/>)
            }
            {
                addCerti&& <CertiInput setEdit={setAddCerti} />
            }
        </div>
    </div>
  )
}

export default Certificate
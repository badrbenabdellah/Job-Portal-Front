import React, { useEffect, useState } from 'react'
import Sort from '../FindJobs/Sort'
import TalentCard from './TalentCard'
import { talents } from '../../Data/TalentData'
import { getAllProfiles } from '../../Services/ProfileService'


const Talent = () => {
  const [talents, setTalents] = useState<any>([]);
  useEffect(()=>{
    getAllProfiles().then((res)=>{
      setTalents(res);
    }).catch((err)=>{
      console.log(err);

    })
  }, [])
  return (
    <div className='p-5'>
        <div className='flex justify-between'>
            <div className='text-2xl font-semibold'>Talents</div>
            <Sort />
        </div>
        <div className='mt-10 flex flex-wrap gap-5 justify-between'>
          {talents.map((talent:any, index:any) => (
            <TalentCard key={index} {...talent} />
          ))}
        </div>        
    </div>
  )
}

export default Talent

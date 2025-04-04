import { useState } from 'react'
import { Divider, Input, RangeSlider } from '@mantine/core';
import MultiInput from '../FindJobs/MultiInput';
import { searchFields } from '../../Data/TalentData';
import { IconUserCircle } from '@tabler/icons-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../Slices/FilterSlice';


const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<[number, number]>([0, 50]);
  const [name, setName] = useState('');
  const handleChange=(name:any, event:any)=>{
    if(name=="exp")dispatch(updateFilter({exp:event}));
    else{
      dispatch(updateFilter({name:event.target.value}));
      setName(event.target.value);
    }
  }
  return (
    <div className="px-5 py-8 items-center !text-mine-shaft-100 flex">
      <div className='w-1/5 flex items-center'>
        <div className='text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2'><IconUserCircle size={20} /></div>
        <Input 
          defaultValue={name} 
          onChange={(e)=>handleChange("name", e)} 
          className='[&_input]:!placeholder-mine-shaft-300' 
          variant='unstyled' 
          placeholder="Talent name" 
        />
      </div>
      <Divider mr="xs" size="xs" orientation="vertical" />
        {
          searchFields.map((item, index) => {
            return <React.Fragment key={index}>
              <div className='w-1/5'>
                <MultiInput 
                  title={item.title} 
                  icon={item.icon} 
                  options={item.options} 
                />
              </div>
              <Divider mr="xs" size="xs" orientation="vertical" />
            </React.Fragment>
          })
        }
        <div className='w-1/5 text-sm text-mine-shaft-300 [&_.mantine-Slider-label]:!translate-y-10'>
          <div className='flex mb-1 justify-between'>
            <div>Experience (Year)</div>
            <div>{value[0]} - {value[1]} </div>
          </div>
          <RangeSlider 
            onChangeEnd={(e)=>handleChange("exp", e)}
            color='brightSun.4' 
            min={1} 
            max={50} 
            minRange={1}
            size="xs" 
            value={value} 
            onChange={setValue} 
          />
        </div> 
    </div>
  )
}

export default SearchBar

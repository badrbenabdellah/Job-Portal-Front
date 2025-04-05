import React, { useState } from 'react'
import MultiInput from './MultiInput'
import { dropdownData } from '../../Data/JobsData'
import { Divider, RangeSlider } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../Slices/FilterSlice';


const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<[number, number]>([0, 300]);
  const handleChange=(event:any)=>{
    dispatch(updateFilter({salary:event}));
    
  }
  return (
    <div className="flex px-5 py-8">
        {
          dropdownData.map((item, index) => <>
          <div key={index} className='w-1/5'>
            <MultiInput {...item} />
          </div>
          <Divider mr="xs" size="xs" orientation="vertical" />
          </>)
        }
        <div className='w-1/5 [&_.mantine-Slider-label]:!translate-y-10'>
          <div className='flex text-sm justify-between'>
            <div>Salary</div>
            <div>{value[0]}&#8364; LPA - {value[1]}&#8364; LPA</div>
          </div>
          <RangeSlider 
            color='brightSun.4' 
            size="xs" 
            value={value} 
            onChange={setValue}
            onChangeEnd={handleChange}  
          />
        </div>
        
    </div>
  )
}

export default SearchBar

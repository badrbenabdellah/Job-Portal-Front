import React, { useState } from 'react'
import MultiInput from './MultiInput'
import { dropdownData } from '../../Data/JobsData'
import { Button, Collapse, Divider, RangeSlider } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../Slices/FilterSlice';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';


const SearchBar = () => {
  const matches = useMediaQuery('(max-width: 475px');
  const [opened, { toggle }] = useDisclosure(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState<[number, number]>([0, 300]);
  const handleChange=(event:any)=>{
    dispatch(updateFilter({salary:event}));
    
  }
  return (
    <div>
      <div className='flex justify-end'>
        {matches &&<Button 
          onClick={toggle}
          m="sm"
          radius="lg" 
          className="align" 
          variant="outline" 
          color="brightSun.4" 
          autoContrast
        >
          {opened?"Close":"Filters"}
        </Button>}
      </div>
      
      <Collapse in={!(opened || !matches)}>
      <div className="px-5 lg-mx:!flex-wrap py-8 items-center !text-mine-shaft-100 flex">
          {
            dropdownData.map((item, index) => {
              return <React.Fragment key={index}>
                <div className='w-1/5 lg-mx:w-1/4 bs-mx:w-[30%] sm-mx:w-[48%]'>
                  <MultiInput title={item.title} icon={item.icon} options={item.options} />
                </div>
                <Divider className="sm-mx:hidden" mr="xs" size="xs" orientation="vertical" />
              </React.Fragment>
            })
            }
          <div className='w-1/5 lg-mx:w-1/4 lg-mx:mt-7 bs-mx:w-[30%] sm-mx:w-[48%] text-sm text-mine-shaft-300 [&_.mantine-Slider-label]:!translate-y-10'>
            <div className='flex text-sm justify-between'>
              <div>Salary</div>
              <div>{value[0]}&#8364; k - {value[1]}&#8364; k</div>
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
      </Collapse>
    </div>
  )
}

export default SearchBar

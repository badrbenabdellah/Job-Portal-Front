import { IconAnchor, IconSettings , IconBell } from '@tabler/icons-react';
import { Avatar, Indicator } from '@mantine/core';
import NavLinkList from './NavLinkList';
import { useLocation } from 'react-router-dom';


const Header = () => {
    const location = useLocation();
  return (
    location.pathname != "/signup" && location.pathname != "/login"?
    <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center font-['poppins']">
        <div className='flex gap-1 items-center text-bright-sun-400'>
            <IconAnchor className='w-8 h-8' stroke={2.5} />
            <div className='text-3xl font-semibold'> FJobs </div> 
        </div>
        {NavLinkList()}
        <div className='flex gap-3 items-center'>
            <div className="flex items-center gap-2">
                <div>Badr Benabdellah</div>
                <Avatar src="/avatar.png" alt="it's me" />
            </div>
            <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <IconSettings stroke={2.5} />
            </div>
            <div className='bg-mine-shaft-900 p-1.5 rounded-full'>
                <Indicator color="brightSun.4" offset={6} size={8} processing>
                    <IconBell stroke={1.5} />
                </Indicator>    
            </div>
            
        </div>
    </div>:<></>
  )
}

export default Header

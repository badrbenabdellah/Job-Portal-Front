import React from 'react'
import Login from '../SignUpLogin/Login'
import SignUp from '../SignUpLogin/SignUp'
import { Divider } from '@mantine/core'
import { IconAnchor } from '@tabler/icons-react'

const SignUpPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins']">
        <Divider size="xs" mx="md" />
        <div className='w-[100vw] h-[100vh] flex'>
            <div className='w-1/2 rounded-r-[200px] h-full bg-mine-shaft-900 flex flex-col items-center justify-center'>
                <div className='flex gap-1 items-center text-bright-sun-400'>
                    <IconAnchor className='w-16 h-16' stroke={2.5} />
                    <div className='text-6xl font-semibold'> FJobs </div> 
                </div>
                <div className='text-2xl text-mine-shaft-200 font-semibold'>Find the made for you</div>
            </div>
        </div>
        <SignUp />
    </div>
  )
}

export default SignUpPage
import { IconAnchor, IconArrowLeft } from '@tabler/icons-react'
import { useLocation, useNavigate } from 'react-router-dom';
import SignUp from '../Components/SignUpLogin/SignUp';
import Login from '../Components/SignUpLogin/Login';
import { Button } from '@mantine/core';

const SignUpPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
        <Button onClick={()=>navigate("/")} className='!absolute left-5 z-10' my="md" leftSection={<IconArrowLeft size={20} />} color='brightSun.4' variant='light'>Home</Button>
        <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-100 flex [&>*]:flex-shrink-0 ${location.pathname === '/signup'? '-translate-x-1/2':'-translate-x-0'}`}>
            <Login />
            <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-mine-shaft-900 flex flex-col items-center justify-center gap-5`}>
                <div className='flex gap-1 items-center text-bright-sun-400'>
                    <IconAnchor className='w-16 h-16' stroke={2.5} />
                    <div className='text-6xl font-semibold'> FJobs </div> 
                </div>
                <div className='text-2xl text-mine-shaft-200 font-semibold'>Find the made for you</div>
            </div>
            <SignUp />
        </div>
    </div>
  )
}

export default SignUpPage
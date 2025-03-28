import { Button, LoadingOverlay, PasswordInput, rem, TextInput } from '@mantine/core';
import { IconAt, IconLock, } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Services/UserService';
import { loginValidation } from '../../Services/FormValidation';
import { useDisclosure } from '@mantine/hooks';
import ResetPassword from './ResetPassword';
import { useDispatch } from 'react-redux';
import { errorNotification, successNotification } from '../../Services/NotificationService';
import { setUser } from '../../Slices/UserSlice';


const Login = () => {
    const [loading, setLoading] = useState(false);
    const dipatch = useDispatch();
    const form= {
        email: "",
        password: "",
    }
    const [data,setData] = useState<{[key:string]:string}>(form);
    const [formError, setFormError] = useState<{[key:string]:string}>(form);
    const [opened, { open, close }] = useDisclosure(false);
    const navigate = useNavigate();
  
    const handleChange=(event:any) => {
        setFormError({...formError, [event.target.name]:""})
        setData({...data, [event.target.name]:event.target.value})
    }

    const handleSubmit=()=>{
        
        let valid = true, newFormError:{[key:string]:string}={};
        for(let key in data) {
            newFormError[key]=loginValidation(key, data[key]);
            if(newFormError[key]) valid=false;
        }
        setFormError(newFormError);
        if(valid){
            setLoading(true);
            loginUser(data).then((res)=>{
                successNotification("Login Successful", "Redirecting to home page...");
                  setTimeout(()=>{
                    setLoading(false);
                    dipatch(setUser(res));
                    navigate("/")
                  }, 4000)
            }).catch((err)=>{
                setLoading(false);
                errorNotification("Login Failed",err.response.data.errorMessage);
        });
    }   
}
    return (
        <>
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'brightSun.4', type: 'bars' }}
        />
            <div className='w-1/2 px-20 flex flex-col justify-center gap-3'>
                <div className='text-2xl font-semibold'>Create Account</div>
                <TextInput error={formError.email} value={data.email} name="email" onChange={handleChange} withAsterisk leftSection={<IconAt style={{width: rem(16), height: rem(16)}} />} label="Email" placeholder="Your email" />
                <PasswordInput error={formError.password} value={data.password} name="password" onChange={handleChange} leftSection={<IconLock style={{width: rem(18), height: rem(18)}} stroke={1.5} />} label="Password" placeholder="Password" />
                <Button loading={loading} onClick={handleSubmit} autoContrast variant='filled'>Login</Button>
                <div className='text-center'>Don't have an account? <span className='text-bright-sun-400 hover:underline cursor-pointer' onClick={()=>{navigate("/signup"); setFormError(form); setData(form)}}>SignUp</span></div>
                <div onClick={open} className='text-bright-sun-400 hover:underline cursor-pointer text-center'>Forget Password?</div>
            </div>
            <ResetPassword opened={opened} close={close} />
        </>
      )
}

export default Login;
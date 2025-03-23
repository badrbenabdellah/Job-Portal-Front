import { Button, Modal, PasswordInput, PinInput, TextInput } from '@mantine/core'
import { IconAt, IconLock } from '@tabler/icons-react';
import React, { useState } from 'react'
import { changePassword, sendOtp, verifyOtp } from '../../Services/UserService';
import { signupValidation } from '../../Services/FormValidation';
import { successNotification, errorNotification } from '../../Services/NotificationService';

const ResetPassword = (props:any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passErr, setPassErr] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpSending, setOtpSending] = useState(false);
    const [verified, setVerified] = useState(false);

    const handleSendOtp =() => {
        setOtpSending(true);
        sendOtp(email).then((res) => {
            console.log(res);
            successNotification("OTP Sent Successfully", "Enter OTP to reset.")
            setOtpSent(true);
            setOtpSending(false);
        }).catch((err) => {
            console.log(err);
            setOtpSending(false);
            errorNotification("OTP Sending Failed", err.response.data.errorMessage)
        })
    }

    const handleVerifyOTP =(otp:string) => {
        verifyOtp(email, otp).then((res) => {
            console.log(res);
            successNotification("OTP Verified.", "Enter new Password.")
            setVerified(true);
        }).catch((err) => {
            console.log(err);
            errorNotification("OTP Verification Failed", err.response.data.errorMessage)
        })
    }

    const resendOtp =() => {
        handleSendOtp();
    }

    const changeEmail =() => {
        setOtpSent(false);
    }

    const handleResetPassword =() => {
        changePassword(email, password).then((res) => {
            console.log(res);
            successNotification("Password Changed", "Login with new password.")
            props.close();
        }).catch((err) => {
            console.log(err);
            errorNotification("Password Reset Failed.", err.response.data.errorMessage);
        })
    }
    
  return (
    <Modal opened={props.opened} onClose={props.close} title="Authentication">
        <div className='flex flex-col gap-6'>
            <TextInput value={email} name="email" onChange={(e)=>setEmail(e.target.value)} leftSection={<IconAt size={16} />} withAsterisk label="Email" placeholder="Your email" 
            rightSection={<Button loading={otpSending} size='xs' className='mr-1' onClick={handleSendOtp} autoContrast disabled={email === "" || otpSent} variant='filled'>Login</Button>} rightSectionWidth="xl"
            />
            {otpSent && <PinInput onComplete={handleVerifyOTP} length={6} className="mx-auto" size="md" gap="lg" type="number" />}
            {otpSent && !verified &&
                <div className='flex gap-2'>
                    <Button fullWidth loading={otpSending} color='brightSun.4' onClick={resendOtp} autoContrast variant='light'>Resend</Button>
                    <Button fullWidth onClick={changeEmail} autoContrast variant='filled'>Change Email</Button>
                </div>
            }
            {verified && 
                <PasswordInput error={passErr} value={password} name="password" onChange={(e)=>{setPassword(e.target.value); setPassErr(signupValidation("password", e.target.value))}} leftSection={<IconLock size={16} />} label="Password" withAsterisk placeholder="Password" />
            }
            {verified &&
                <Button onClick={handleResetPassword} autoContrast variant="filled">Change Password</Button>
            }
        </div>
    </Modal>
  )
}

export default ResetPassword
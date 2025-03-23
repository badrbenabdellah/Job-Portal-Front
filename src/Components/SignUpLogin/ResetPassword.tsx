import { Button, Modal, TextInput } from '@mantine/core'
import { IconAt } from '@tabler/icons-react';
import React, { useState } from 'react'
import { sendOtp } from '../../Services/UserService';

const ResetPassword = (props:any) => {
    const [email, setEmail] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const handleSendOtp =() => {
        sendOtp(email).then((res) => {
            console.log(res);
            setOtpSent(true);
        }).catch((err) => {
            console.log(err);
        })
    }
  return (
    <Modal opened={props.opened} onClose={props.close} title="Authentication">
        <div>
            <TextInput value={email} name="email" onChange={(e)=>setEmail(e.target.value)} leftSection={<IconAt size={16} />} withAsterisk label="Email" placeholder="Your email" 
            rightSection={<Button size='xs' className='mr-1' onClick={handleSendOtp} autoContrast disabled={email === ""} variant='filled'>Login</Button>} rightSectionWidth="xl"
            />

        </div>
    </Modal>
  )
}

export default ResetPassword
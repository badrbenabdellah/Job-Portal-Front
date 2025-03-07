import { rem, TextInput } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';
import React from 'react'

const SignUp = () => {
  return (
    <div className='w-1/2 px-20 flex flex-col justify-center'>
        <div className='text-2xl font-semibold'>Create Account</div>
        <TextInput label="Your name" placeholder="Your name" />
        <TextInput leftSection={<IconAt style={{width: rem(16), height: rem(16)}} />} label="Your email" placeholder="Your email" />
    </div>
  )
}

export default SignUp
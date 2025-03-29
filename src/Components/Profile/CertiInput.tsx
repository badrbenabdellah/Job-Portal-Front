import { Anchor, Button, Checkbox, Select, Textarea, TextInput } from '@mantine/core';
import { useState } from 'react';
import { MonthPickerInput } from '@mantine/dates';
import SelectInput from './SelectInput';
import { fields } from '../../Data/Profile';
import { isNotEmpty, useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { successNotification } from '../../Services/NotificationService';
import { changeProfile } from '../../Slices/ProfileSlice';

const CertiInput = (props:any) => {
    const select = fields;
    const dispatch = useDispatch();
    const profile = useSelector((state:any)=> state.profile);
    const form = useForm({
        mode : 'controlled',
        validateInputOnChange : true,
        initialValues : { 
            name: '', 
            issuer: '', 
            issueDate: new Date(),
            certificateId : ''
        },
        validate : {
            name : isNotEmpty("Name is required"),
            issuer : isNotEmpty("Issuer is required"),
            issueDate : isNotEmpty("Issue Date is required"),
            certificateId : isNotEmpty("Certificate Id is required"),
        }
    });
    const handleSave = () => {
        form.validate();
        if(!form.isValid())return;
        let certi=[...profile.certifications];
        certi.push(form.getValues());
        certi[certi.length-1].issueDate=certi[certi.length-1].issueDate.toISOString();
        let updatedProfile={...profile, certidications:certi};
        props.setEdit(false);
        dispatch(changeProfile(updatedProfile));
        successNotification("Success", "Certifcate Added Successfully");

    }
  return (
    <div className='flex flex-col gap-3'>
        <div className='text-lg font-semibold'>Add Certificate</div>
        <div className='flex gap-10 [&>*]:w-1/2'>
            <TextInput {...form.getInputProps("name")} label="Title" withAsterisk placeholder='Enter title'/>
            <SelectInput form={form} name="issuer" {...select[1]}/>
        </div>
        <div className='flex gap-10 [&>*]:w-1/2'>
            <MonthPickerInput {...form.getInputProps("issueDate")} withAsterisk maxDate={new Date()} label="Issue Date" placeholder="Pick date"/>
            <TextInput {...form.getInputProps("certificateId")} label="Certificate ID" withAsterisk placeholder='Enter ID'/>
        </div>
        <div className='flex gap-5'>
            <Button onClick={handleSave} color='green.8' variant='light'>Save</Button>
            <Button onClick={()=>props.setEdit(false)} color='red.8' variant='light'>Cancel</Button>
        </div>
    </div>
  )
}

export default CertiInput;
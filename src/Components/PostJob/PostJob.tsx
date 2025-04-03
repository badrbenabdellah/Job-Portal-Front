import React, { useEffect, useState } from 'react'
import SelectInput from './SelectInput'
import { content, fields } from '../../Data/PostJob'
import { Button, NumberInput, TagsInput, Textarea } from '@mantine/core';
import TextEditor from './TextEditor';
import { IconArrowLeft } from '@tabler/icons-react';
import { isNotEmpty, useForm } from '@mantine/form';
import { getJob, postJob } from '../../Services/JobService';
import { successNotification } from '../../Services/NotificationService';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostJob = () => {
    const {id} = useParams();
    const [editorData, setEditorData] = useState(content);
    const user = useSelector((state:any)=> state.user);
    const navigate = useNavigate();
    const select = fields;
    useEffect(()=>{
        window.scrollTo(0, 0);
        if(id!=="0"){
            getJob(id).then((res)=>{
                form.setValues(res);
                setEditorData(res.description);
            }).catch((err)=>{
                console.log(err);
            })
        }
        else {
            form.reset();
            setEditorData(content);
        } 
    }, [id])
    const form = useForm({
        mode: 'controlled',
        validateInputOnChange: true,
        initialValues: {
            jobTitle: '',
            company: '',
            experience: '',
            jobType: '',
            location: '',
            packageOffered: '',
            skillsRequired: [],
            about: '',
            description: content
        },
        validate: {
            jobTitle: isNotEmpty('Title is required'),
            company: isNotEmpty('Company is required'),
            experience: isNotEmpty('Experience is required'),
            jobType: isNotEmpty('Job Type is required'),
            location: isNotEmpty('Location is required'),
            packageOffered: isNotEmpty('Package is required'),
            skillsRequired: isNotEmpty('Skills is required'),
            about: isNotEmpty('About is required'),
            description: isNotEmpty('Description is required'),
        }

    });
    const handlePost = () => {
        form.validate();
        if(!form.isValid())return;
        postJob({...form.getValues(), id, postedBy:user.id, jobStatus:"ACTIVE"})
            .then((res:any) => {
                successNotification("Success", "Job Posted Successfully");
                navigate(`/posted-job/${res.id}`);
        }).catch((err:any) => {
            console.log(err);
            successNotification("Error", err.response.data.errorMessage);
        })
    }
    const handleDraft = () => {
        postJob({...form.getValues(), id, postedBy:user.id, jobStatus:"DRAFT"}).then((res:any) => {
            successNotification("Success", "Job Drafted Successfully");
            navigate(`/posted-job/${res.id}`);
        }).catch((err:any) => {
            console.log(err);
            successNotification("Error", err.response.data.errorMessage);
        })
    }
  return (
    <div className='w-4/5 mx-auto'>
        <div className='text-2xl font-semibold mb-5'>Post a Job</div>
        <div className='flex flex-col gap-5'>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput form={form} name="jobTitle" {...select[0]} />
                <SelectInput form={form} name="company" {...select[1]} />
            </div>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput form={form} name="experience" {...select[2]} />
                <SelectInput form={form} name="jobType" {...select[3]} />
            </div>
            <div className='flex gap-10 [&>*]:w-1/2'>
                <SelectInput form={form} name="location" {...select[4]} />
                <NumberInput {...form.getInputProps('packageOffered')} withAsterisk label="Salary" placeholder='Enter Salary' min={1} max={300} clampBehavior="strict" hideControls />
            </div>
            <TagsInput {...form.getInputProps('skillsRequired')} withAsterisk label="Skills" placeholder="Enter skill" splitChars={[',', ' ', '|']} clearable acceptValueOnBlur />
            <Textarea {...form.getInputProps('about')} withAsterisk label="About Job" placeholder='Enter About Job..' autosize minRows={2} />
            <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
                <div className='text-sm font-medium'>Job Description<span className='text-red-500'>*</span></div>
                <TextEditor form={form} data={editorData}/>
            </div>
            <div className='flex gap-4'>
                <Button color='brightSun.4' onClick={handlePost} variant='light'>Publish Job</Button>
                <Button color='brightSun.4' onClick={handleDraft} variant='outline'>Save as Draft</Button>
            </div>
        </div>
    </div>
  )
}

export default PostJob
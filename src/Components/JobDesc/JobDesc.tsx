import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconBookmark, IconBookmarkFilled, IconMapPin } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { card } from '../../Data/JobDescData'
import DOMPurify from 'dompurify';
import { timeAgo } from '../../Services/Utilities'
import { profile } from '../../Data/TalentData';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../../Slices/ProfileSlice';
import { useEffect, useState } from 'react';

const JobDesc = (props:any) => {
    const dispatch = useDispatch();
    const [applied, setApplied] = useState(false);
    const cleanHTML = DOMPurify.sanitize(props.description);
    const profile = useSelector((state:any) => state.profile);
    const user = useSelector((state:any) => state.user);
    const handleSaveJob = () => {
        let savedJobs: any = [...(profile.savedJobs || [])];
        if (savedJobs.includes(props.id)) {
            savedJobs = savedJobs.filter((id: any) => id !== props.id);
        } else {
            savedJobs = [...savedJobs, props.id];
        }
        let updatedProfile = { ...profile, savedJobs: savedJobs };
        dispatch(changeProfile(updatedProfile));
    };
    useEffect(()=>{
        if(props.applicants?.filter((applicant:any)=>applicant.applicantId==user.id).length>0){
            setApplied(true);
        }
        else setApplied(false);
    }, [props])
  return (
    <div className='w-2/3'>
        <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
            <div className='p-3 bg-mine-shaft-800 rounded-xl'>
                <img className='h-14' src={`/Icons/${props.company}.png`} alt='' />
            </div>
            <div className='flex flex-col gap-1'>
                <div className='font-semibold text-2xl'>{props.jobTitle}</div>
                <div className='text-lg text-mine-shaft-300'>{props.company} &bull; {timeAgo(props.postTime)}  &bull; {props.applicants?props.applicants.length:0} Applications</div>
            </div>
        </div>
        <div className='flex flex-col gap-2 items-center'>
            { (props.edit || !applied) &&
                <Link to={`/apply-job/${props.id}`}>
                    <Button color='brightSun.4' size='sm' variant='light'>{props.edit?"Edit":"Apply"}</Button>
                </Link>
            }
            {
                !props.edit && applied && <Button color='green.8' size='sm' variant='light'>Applied</Button>
            }
            {props.edit?<Button color='red.5' size='sm' variant='outline'>Delete</Button>:
            profile.savedJobs?.includes(props.id)?
            <IconBookmarkFilled onClick={handleSaveJob} className='text-bright-sun-400 cursor-pointer' stroke={1.5}/>:
            <IconBookmark onClick={handleSaveJob} className='text-mine-shaft-300 cursor-pointer hover:text-bright-sun-400'/>
            }

        </div>
        </div>
        <Divider my='xl' />
        <div className='flex justify-between'>
            {
                card.map((item: any, index: any) => 
                    <div key={index} className='flex flex-col items-center gap-1'>
                        <ActionIcon className='!h-12 !w-12' color='brightSun.4' variant="light" radius="xl"  aria-label="Settings">
                            <IconMapPin className="h-4/5 w-4/5" stroke={1.5} />
                        </ActionIcon>
                        <div className='text-sm text-mine-shaft-300'>{item.name}</div>
                        <div className='font-semibold'>{props?props[item.id]:"NA"}
                            {item.id == "packageOffered" && <>LPA</>}
                        </div>
                    </div>
                )
            }
        </div>
        <Divider my='xl' />
        <div >
            <div className='text-xl font-semibold mb-5'>Required Skills</div>
            <div className='flex flex-wrap gap-2'>
                {
                    props?.skillsRequired?.map((skill: any, index: any) =>
                        <ActionIcon key={index} className='!h-fit !w-fit font-medium !text-sm' color='brightSun.4' variant="light" p="xs" radius="xl"  aria-label="Settings"> {skill} </ActionIcon>
                    )
                }
            </div>
        </div>
        <Divider my='xl' />
        <div className='[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify ' dangerouslySetInnerHTML={{__html: cleanHTML}}></div>
        <Divider my='xl' />
        <div>
            <div className='text-xl font-semibold mb-5'>About Company</div>
            <div className='flex justify-between mb-3'>
            <div className='flex gap-2 items-center'>
                <div className='p-3 bg-mine-shaft-800 rounded-xl'>
                    <img className='h-8' src={`/Icons/${props.company}.png`} alt='' />
                </div>
                <div className='flex flex-col'>
                    <div className='font-medium text-lg'>{props.company}</div>
                    <div className='text-mine-shaft-300'> 10k+ Employees</div>
                </div>
            </div>
            <Link to={`/company/${props.company}`}>
                <Button color='brightSun.4' variant='light'>Company Page</Button>
            </Link>
            </div>
            <div className='text-mine-shaft-300 text-justify'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quidem, quam, fugiat ipsam sunt omnis blanditiis veniam eum voluptatem recusandae est repellendus atque dolor perferendis amet nulla ratione. Veritatis aut fugiat recusandae aperiam ut cumque excepturi vero error, accusantium rem.
            </div>
        </div>
    </div>
    
  )
}

export default JobDesc
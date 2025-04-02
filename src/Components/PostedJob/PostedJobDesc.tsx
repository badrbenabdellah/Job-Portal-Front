import { Badge, Tabs } from '@mantine/core'
import React from 'react'
import JobDesc from '../JobDesc/JobDesc'
import { talents } from '../../Data/TalentData'
import TalentCard from '../FindTalent/TalentCard'

const PostedJobDesc = (props:any) => {
  return (
    <div className='w-3/4 px-5'>
        <div className='text-2xl font-semibold flex items-center'>{props.jobTitle}
            <Badge variant="light" ml="sm" color="brightSun.4" size='sm'>{props.jobStatus}</Badge>
        </div>
        <div className='font-medium text-mine-shaft-300 mb-5'>{props.location}</div>
        <div>
            <Tabs variant="outline" radius="lg" autoContrast defaultValue="overview">
                <Tabs.List className="font-semibold [&_button]:!border-b-mine-shaft-950 [&_button]:!text-lg mb-5 [&_button[data-active='true']]:text-bright-sun-400">
                    <Tabs.Tab value="overview">Overview</Tabs.Tab>
                    <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                    <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    <Tabs.Tab value="offered">Offered</Tabs.Tab>
                    <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="overview" className="[&>div]:w-full">
                    <JobDesc {...props} edit={true} />
                </Tabs.Panel>
                <Tabs.Panel value="applicants">
                    <div className='flex mt-10 flex-wrap gap-5 justify-around'>
                        {
                            props.applicants?.filter((x:any)=>x.applicationStatus=="APPLIED").map((talent:any, index:any) => <TalentCard key={index} {...talent} posted={true}/>)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="invited">
                    <div className='flex mt-10 flex-wrap gap-5 justify-around'>
                        {
                            props.applicants?.filter((x:any)=>x.applicationStatus=="INTERVIEWING").map((talent:any, index:any) => <TalentCard key={index} {...talent} invited={true}/>)
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="invited">
                    <div className="flex mt-10 flex-wrap gap-5 justify-around" />
                    {
                        props.applicants?.filter((x:any)=>x.applicationStatus=="APPLIED").map((talent:any, index:any)=>index<6 && <TalentCard key={index} {...talent} invited={true}/>)
                    }
                </Tabs.Panel>
            </Tabs>
        </div>
    </div>
  )
}

export default PostedJobDesc
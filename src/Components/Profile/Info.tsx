import { ActionIcon } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconPencil } from "@tabler/icons-react";
import SelectInput from "./SelectInput";
import { fields } from "../../Data/Profile";
import { useState } from "react";
import { useForm } from "@mantine/form";

const Info = () => {
    const select = fields;
    const [edit, setEdit] = useState(false);
    const handleEdit = () => {
        if(!edit){
            setEdit(true);
        }
        else{
            setEdit(false);
            console.log(form.getValues());
        }
        
    }
    const form = useForm({
        mode: 'controlled',
        initialValues: { jobtitle: '', company: '', location: '' },
    });
    return <>
            <div className='text-3xl font-semibold flex justify-between'>Insaf Elkorachi <ActionIcon onClick={() => handleEdit} size="lg" color='brightSun.4' variant="subtle">
                {
                    edit?<IconDeviceFloppy className='h-4/5 w-4/5' />:<IconPencil className='h-4/5 w-4/5'/>}
                </ActionIcon> 
                </div>
                {
                    edit?<><div className='flex gap-10 [&>*]:w-1/2'>
                        <SelectInput {...select[0]}/>
                        <SelectInput {...select[1]}/>
                    </div>
                    <SelectInput {...select[2]}/></>:
                    <>
                        <div className='text-xl flex gap-1 items-center'> <IconBriefcase className='h-5 w-5' stroke={1.5}/> Software Engineer &bull; Google</div>
                    <div className='text-lg flex gap-1 text-mine-shaft-300 items-center'>
                        <IconPencil className='h-5 w-5' stroke={1.5} /> New York, USA
                    </div></>
                }
        </>        
}
export default Info;
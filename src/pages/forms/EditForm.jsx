import React from 'react'

import { deleteFormFieldApi, getFormDetailApi, getFormFieldsApi } from '../../api/formApi'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, IconButton, MenuItem, TextField, Typography } from '@mui/material'
import { ArrowBack, Delete, Edit } from '@mui/icons-material'
import AddFieldModal from '../../component/form/AddFieldModal'

const EditForm = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const [data, setData]=React.useState({})
    const [formFields, setFormFields]=React.useState([])
    const [open, setOpen]=React.useState(false)
    const [fieldSelectOptions, setFieldSelectOptions]=React.useState([])

    // -----
    const handleModal=()=>setOpen(!open)
   
    const updateFormFields=(data)=>{
        
        setFormFields([...formFields,data])
        handleModal()
    }

    const deleteSuccess=(id)=>{
        const newFieldList=formFields.filter((item)=>item.id!==id)
        setFormFields(newFieldList)
    }
    const deleteError=()=>{}
    const handleDelete=(id)=>{
        deleteFormFieldApi(id, deleteSuccess, deleteError)
    }
    // ----USE EFFECTS AND THEIR
    const fieldSuccessCallback=(data)=>{
        setFormFields(data)
        CONSOLE.LOG(data)
    }
    const successCallback=(data)=>{
        setData(data)
        CONSOLE.LOG(data)
    }
    const errorCallback=(err)=>{

    }
    

    React.useEffect(()=>{
        getFormDetailApi(id, successCallback, errorCallback)
        getFormFieldsApi(id, fieldSuccessCallback, errorCallback)
    },[id])
  return (
    <Box sx={{mb:3}}>
        <Box sx={{display:'flex', justifyContent:"space-between", mb:3}} >
        <Box sx={{display:'flex', justifyContent:"space-between"}} ><IconButton onClick={()=>navigate(-1)}>
            <ArrowBack sx={{mr:2}} /></IconButton> <Typography variant='h4'>{data.title}</Typography></Box>
 
       
        
        <Button variant='outlined' onClick={handleModal}>Add Field</Button></Box>
        <Box sx={{display:"flex", flexDirection:"column"}}>
        {formFields.map((field,index)=>{
            return<Box> <TextField 
            select={field.is_select}
            key={index}
            type={field.field_type}
            readOnly
            sx={{m:1, width:"40ch"}}
            name={field.label}
            label={field.label}
            placeholder={field.placeholder}
            >
                {field.is_select && fieldSelectOptions.map((option)=><MenuItem value={option}>{option}</MenuItem>)}
            </TextField>
            <IconButton onClick={()=>handleDelete(field.id)}><Delete sx={{color:"red"}} /></IconButton>
            </Box>
        })}
        </Box>

        <AddFieldModal open={open} handleClose={handleModal} formId={id} updateFieldList={updateFormFields} />
    </Box>
  )
}

export default EditForm
import React from 'react'
import { deleteFormApi, getFormDetailApi, getFormFieldsApi } from '../../api/formApi'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import { Box, Button, IconButton, MenuItem, TextField, Typography } from '@mui/material'
import { ArrowBack, Delete, Edit } from '@mui/icons-material'
import { LINKS } from '../../links/links'
import ResponseList from '../response/ResponseList'

const FormDetail = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [data, setData]=React.useState({})
    const [formFields, setFormFields]=React.useState([])
    const [fieldSelectOptions, setFieldSelectOptions]=React.useState([])

    const goToEdit=()=>navigate(generatePath(LINKS.FORM_EDIT, {id}))

    const deleteSuccess=(id)=>{
        navigate(LINKS.FORM_LIST)
    }
    const handleFormDelete=()=>{
        deleteFormApi(id, deleteSuccess, errorCallback)
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
    <Box>
        <Box sx={{display:'flex', justifyContent:"space-between", mb:3}}>
        <IconButton onClick={()=>navigate(LINKS.FORM_LIST)}>
            <ArrowBack sx={{mr:2}} /></IconButton><Typography variant='h4'>{data.title}'s Responses</Typography>
        <Box>
        <Button sx={{color:"blue", fontSize:"12px"}} onClick={goToEdit}> <Edit sx={{color:"blue", fontSize:"12px", mr:1}} /> Edit</Button>
            <Button sx={{color:"red", fontSize:"12px"}} onClick={handleFormDelete}> <Delete sx={{color:"red", fontSize:"12px", mr:1}} />  Delete</Button>
        </Box>
        
        </Box>
        <ResponseList />
        {/* {formFields.map((field,index)=>{
            return <TextField 
            select={field.is_select}
            key={index}
            type={field.field_type}
            fullWidth
            readOnly
            sx={{my:1}}
            name={field.label}
            label={field.label}
            placeholder={field.place_holder}
            >
                {field.is_select && fieldSelectOptions.map((option)=><MenuItem value={option}>{option}</MenuItem>)}
            </TextField>
        })} */}
    </Box>
  )
}

export default FormDetail
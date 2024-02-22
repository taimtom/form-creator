import { ArrowBack } from '@mui/icons-material'
import { Box, Button, IconButton, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { getFormDetailApi, getFormFieldsApi } from '../../api/formApi'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import { createResponseApi, createResponseFieldApi } from '../../api/responseApi'
import { LINKS } from '../../links/links'

const ResponseCreation = () => {
    
    const navigate=useNavigate()
    const {form_id}=useParams()
    const [data, setData]=React.useState({})
    const [formFields, setFormFields]=React.useState([])
    const [open, setOpen]=React.useState(false)
    const [fieldSelectOptions, setFieldSelectOptions]=React.useState([])
    const [responseFieldList, setResponseFieldList]=React.useState([])

    // -----
    const handleChange=(e, field,index)=>{
        
        responseFieldList[index].value = e.target.value;
        const newResponseFieldList=responseFieldList
        setResponseFieldList(responseFieldList);
    }

   
const ResponseCreationSuccess=(data)=>{
    let resCount=0
    responseFieldList.map((item)=>{
        const resData={
        ...item,
        form_response_id:data.insertId
    }
    createResponseFieldApi(resData, )
    resCount+=1

})
if (resCount===responseFieldList.length){
    navigate(generatePath(LINKS.RESPONSE_SUCCESS,{form_id:form_id}))
}

}
  const handleSubmit=(e)=>{
    e.preventDefault()
    const responseData={
        "form_id": form_id,
        "response_user_id": 1
        
    }
    createResponseApi(responseData,ResponseCreationSuccess)
  }


    // ----USE EFFECTS AND THEIR
    const fieldSuccessCallback=(data)=>{
        setFormFields(data)
       setResponseFieldList(data.map((item)=>({
        form_response_id:null,
        form_field_id:item.id,
        value:null
        })))
        
    }
    const successCallback=(data)=>{
        setData(data)
        CONSOLE.LOG(data)
    }
    const errorCallback=(err)=>{

    }
    

    React.useEffect(()=>{
        getFormDetailApi(form_id, successCallback, errorCallback)
        getFormFieldsApi(form_id, fieldSuccessCallback, errorCallback)
    },[form_id])
  return (
    <Box sx={{mb:3}}>
        <Box sx={{display:'flex', justifyContent:"space-between", mb:3}} >
        <Box sx={{display:'flex', justifyContent:"space-between"}} ><IconButton onClick={()=>navigate(-1)}>
            <ArrowBack sx={{mr:2}} /></IconButton> <Typography variant='h4'>{data.title}</Typography></Box>
 
       
        
</Box>
        <Box component="form" onSubmit={handleSubmit} sx={{display:"flex", flexDirection:"column"}}>
        {formFields.map((field,index)=>{
            return<Box> <TextField
            required
            select={field.is_select}
            key={index}
            type={field.field_type}
            readOnly
            sx={{m:1, width:"40ch"}}
            name={field.label}
            label={field.label}
            placeholder={field.placeholder}
            onChange={(e)=>handleChange(e,field,index)}
            >
                {field.is_select && fieldSelectOptions.map((option)=><MenuItem value={option}>{option}</MenuItem>)}
            </TextField>
            </Box>
        })}
        <Button type='submit'  variant='contained' fullWidth>Submit Response</Button>
        </Box>

        
    </Box>
  )
}
export default ResponseCreation
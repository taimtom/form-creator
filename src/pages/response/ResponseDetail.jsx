import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getResponseDetailApi, getResponseDetailFieldsApi } from '../../api/responseApi'
import { Box, IconButton, MenuItem, TextField, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

const ResponseDetail = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [response, setResponse]=React.useState({})
    const [responseFields, setResponseFields]=React.useState([])

     // ----USE EFFECTS AND THEIR
     const fieldSuccessCallback=(data)=>{
        setResponseFields(data)
        
        
    }
    const successCallback=(data)=>{
        setResponse(data)

    }
    const errorCallback=(err)=>{

    }

    React.useEffect(()=>{
        getResponseDetailApi(id, successCallback, errorCallback)
        getResponseDetailFieldsApi(id, fieldSuccessCallback, errorCallback)
    },[])
  return (
    <Box sx={{mb:3}}>
        <Box sx={{display:'flex', justifyContent:"space-between", mb:3}} >
        <Box sx={{display:'flex', justifyContent:"space-between"}} ><IconButton onClick={()=>navigate(-1)}>
            <ArrowBack sx={{mr:2}} /></IconButton> <Typography variant='h4'>{response.full_name}'s Response </Typography>
            </Box>
        </Box>
 
       
        

        <Box sx={{display:"flex", flexDirection:"column"}}>
        {responseFields.map((field,index)=>{
            return<Box key={index}> <TextField 
            disabled
            select={field.is_select}
            key={index}
            value={ field.field_type !== 'file'?field.value:''}
            type={field.field_type}
            readOnly
            sx={{m:1, width:"40ch"}}
            name={field.label}
            label={field.label}
            placeholder={field.placeholder}
            inputProps={{
                step: 300,
              }}
            >
                {field.is_select && fieldSelectOptions.map((option)=><MenuItem value={option}>{option}</MenuItem>)}
            </TextField>
            
            </Box>
        })}
        </Box>

        
    </Box>
  )
}

export default ResponseDetail
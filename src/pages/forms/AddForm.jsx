import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { createFormApi } from '../../api/formApi'
import { generatePath, useNavigate } from 'react-router-dom'
import { LINKS } from '../../links/links'

const AddForm = () => {

    const initialValues={
        title:null,
        note:null
    }
    const navigate=useNavigate()
    const [values, setValues]=React.useState(initialValues)
    const handleChange=(e)=>{
        setValues({...values, [e.target.name]:e.target.value})
    }
    const successCallback=(data)=>{
        navigate(generatePath(LINKS.FORM_EDIT, {id:data.insertId}))
    }
    const errorCallback=(err)=>{

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        createFormApi(values,successCallback,errorCallback)
    }
  return (
    <Box sx={{display:"flex", justifyContent:"center"}}>
    <Box component="form" onSubmit={handleSubmit} sx={{ display:"flex", flexDirection:"column",  m:3}}>
        <Typography sx={{mb:2}}>Add Form</Typography>
        <TextField required sx={{mb:2}} label="Title" name="title" value={values.title} onChange={handleChange} />
        <TextField required sx={{mb:2}} label="Note" name="note" value={values.note} onChange={handleChange} />
        <Button type='submit' sx={{mb:2}} variant='contained'>Next</Button>
    </Box>
    </Box>
  )
}

export default AddForm
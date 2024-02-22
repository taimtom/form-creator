import { Box, Button, MenuItem, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import { createFormFieldApi, getFormFieldsApi, getOneFormFieldApi } from '../../api/formApi';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
    boxShadow: '0px 24px 32px rgba(171, 171, 171, 0.16)',
    borderRadius: '16px',
  };







  const fieldTypeList=[
    {
        title:"Text",
        value:"text"
    },
    {
        title:"Checkbox",
        value:"checkbox"
    },
    {
        title:"Date",
        value:"date"
    },
    {
        title:"Color",
        value:"color"
    },
    {
        title:"Date and Time",
        value:"datetime-local"
    },
    {
        title:"Email",
        value:"email"
    },
     {
        title:"File",
        value:"file"
    },
    {
        title:"Hidden",
        value:"hidden"
    },
    {
        title:"Image",
        value:"image"
    },
    {
        title:"Month",
        value:"month"
    },
    {
        title:"Number",
        value:"number"
    },
    {
        title:"Password",
        value:"password"
    },

     {
        title:"Url",
        value:"url"
    },
    {
        title:"Range",
        value:"range"
    },
    {
        title:"Radio",
        value:"radio"
    },
    {
        title:"Telephone",
        value:"tel"
    },
    {
        title:"Select",
        value:"select"
    },
    
  ]

const AddFieldModal = ({open, handleClose, updateFieldList, formId}) => {
    const initialValues={
        form_id:parseInt(formId),
        label:null,
        name:null,
        placeholder:null,
        field_type:"text",
        is_select:false,

    }
    const [values, setvalues]=React.useState(initialValues)

    const handleChange=(e)=>{
        
        if (e.target.value==="select"){
            setvalues({...values, is_select:true})
        }
        else{
            setvalues({...values, [e.target.name]:e.target.value})
        }
    }

    const addFieldUpdateSuccess=(data)=>{
        updateFieldList(data)
        setvalues(initialValues)
    }
    const successCallback=(data)=>{
        getOneFormFieldApi(data.insertId, addFieldUpdateSuccess, errorCallback)
        
    }
    const errorCallback=(data)=>{
       
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        createFormFieldApi(values, successCallback, errorCallback)
    }
  return (
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} component="form" onSubmit={handleSubmit}>
    {/* <Typography id="modal-modal-title" variant="h5" component="h2">
      Text in a modal
    </Typography> */}
    <Box>
        <TextField fullWidth
        label="Label"
        name='label'
            value={values.label}
            onChange={handleChange}
            sx={{m:1}}

        />
        <TextField fullWidth
        label="Name"
        name='name'
            value={values.name}
            onChange={handleChange}
            sx={{m:1}}

        />
        <TextField fullWidth
        label="Place Holder"
        name='placeholder'
            value={values.placeholder}
            onChange={handleChange}
            sx={{m:1}}

        />
        <TextField fullWidth
        select
        label="Field Type"
        name='field_type'
            value={values.field_type}
            onChange={(e)=>{handleChange(e)
            
            }}
            sx={{m:1}}

        >
            {fieldTypeList.map((option)=><MenuItem value={option.value}>{option.title}</MenuItem>)}
        </TextField>
        <Button fullWidth variant='contained' type='submit'>Add Field</Button>
    </Box>
  </Box>
</Modal>
  )
}

export default AddFieldModal
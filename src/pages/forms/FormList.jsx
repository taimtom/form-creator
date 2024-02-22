import React from 'react'
import { deleteFormApi, getFormListApi } from '../../api/formApi'
import { Box, Button, Card, Grid,  Typography } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { generatePath, useNavigate } from 'react-router-dom'
import { LINKS } from '../../links/links'
import AddForm from './AddForm'

const FormList = () => {
  const [forms, setForms]=React.useState([])


const navigate=useNavigate()

const goToDetail=(id)=>navigate(generatePath(LINKS.FORM_DETAIL,{id}))

const deleteSuccess=(id)=>{
  const newFormList=forms.filter((item)=>item.id!==id)
  setForms(newFormList)
}
const handleFormDelete=(id)=>{
  deleteFormApi(id, deleteSuccess, errorCallback)
}

const goToEdit=(id)=>navigate(generatePath(LINKS.FORM_EDIT, {id}))
const respondToForm=(id)=>navigate(generatePath(LINKS.RESPONSE_CREATE, {form_id:id}))

  const successCallback=(data)=>{
    setForms(data)
  }
  const errorCallback=(err)=>{

  }
  React.useEffect(()=>{
    getFormListApi(successCallback, errorCallback)
  },[])
  return (
    <div>
      <AddForm />
      <Typography variant='h4' sx={{my:3}}>All Taimtom Forms</Typography>
      <Grid container spacing={2}>
      {forms.map((item)=><Grid item xs={6}>
        <Card sx={{p:2, cursor:"pointer", minHeight:"200px",
         "&:hover": {
      backgroundColor: "#aeaeae !important",
      p:6
    }}}  >
          <Box sx={{display:"flex", justifyContent:"space-between", my:2}}>
          <Button sx={{color:"green", fontSize:"12px"}} onClick={()=>respondToForm(item.id)}> <LibraryBooksIcon sx={{color:"green", fontSize:"12px", mr:1}} /> Respond</Button>
            <Button sx={{color:"blue", fontSize:"12px"}} onClick={()=>goToEdit(item.id)}> <Edit sx={{color:"blue", fontSize:"12px", mr:1}} /> Edit</Button>
            <Button sx={{color:"red", fontSize:"12px"}} onClick={()=>handleFormDelete(item.id)}> <Delete sx={{color:"red", fontSize:"12px", mr:1}} />  Delete</Button>
          </Box>
          <Box onClick={()=>goToDetail(item.id)} sx={{p:4}}>
            <Typography variant='h5'>{item.title}</Typography>
            <Typography variant='caption'>{item.date_created}</Typography>
            <Typography >{item.note}</Typography>
          </Box>

        </Card>
        
      </Grid>)}
      </Grid>
    </div>
    
  )
}

export default FormList
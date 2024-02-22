import { Box, Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { getFormResponseListApi } from '../../api/responseApi'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import { LINKS } from '../../links/links'

const ResponseList = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [formResponses, setFormResponses]=React.useState([])

    const goToDetail=(resId)=>navigate(generatePath(LINKS.RESPONSE_DETAIL,{id:resId}))

    // -------------------------------------
    const successCallback=(data)=>{
        setFormResponses(data)
    }
    const errorCallback=()=>{}
    React.useEffect(()=>{
        getFormResponseListApi(id, successCallback, errorCallback )
    },[])
  return (
    <div>
        <Grid container spacing={2}>
      {formResponses.length>0? formResponses.map((item)=><Grid item xs={6}>
        <Card sx={{p:2, cursor:"pointer", minHeight:"200px", "&:hover": {
      backgroundColor: "#aeaeae !important",
      p:6
    }}} onClick={()=>goToDetail(item.id)}>
          {/* <Box sx={{display:"flex", justifyContent:"space-between", my:2}}>
            <Button sx={{color:"blue", fontSize:"12px"}}> <Edit sx={{color:"blue", fontSize:"12px", mr:1}} /> Edit</Button>
            <Button sx={{color:"red", fontSize:"12px"}} onClick={handleFormDelete}> <Delete sx={{color:"red", fontSize:"12px", mr:1}} />  Delete</Button>
          </Box> */}
          <Box>
            <Typography variant='h5'>{item.full_name}</Typography>
            <Typography variant='caption'>{item.date_created}</Typography>
            <Typography >{item.note}</Typography>
          </Box>

        </Card>
        
      </Grid>):<div style={{display:'flex', justifyContent:'center', width:"100%"}}>No Response Yet</div>}
      </Grid>
    </div>
  )
}

export default ResponseList
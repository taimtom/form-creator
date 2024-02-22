import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { getFormListApi } from './api/formApi'
import { getUserListApi } from './api/userApi'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LINKS } from './links/links'
import FormList from './pages/forms/FormList'
import FormDetail from './pages/forms/FormDetail'
import EditForm from './pages/forms/EditForm'
import ResponseCreation from './pages/response/ResponseCreation'
import ResponseSuccess from './pages/response/ResponseSuccess'
import ResponseDetail from './pages/response/ResponseDetail'

function App() {
  const [count, setCount] = useState(0)
 

  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route element={<FormList />} path={LINKS.FORM_LIST} />
    <Route element={<FormDetail />} path={LINKS.FORM_DETAIL} />
    <Route element={<EditForm />} path={LINKS.FORM_EDIT} />

    <Route element={<ResponseCreation />} path={LINKS.RESPONSE_CREATE} />
    <Route element={<ResponseSuccess />} path={LINKS.RESPONSE_SUCCESS} />
    <Route element={<ResponseDetail />} path={LINKS.RESPONSE_DETAIL} />
   </Routes>
   
   </BrowserRouter>
    </>
  )
}

export default App

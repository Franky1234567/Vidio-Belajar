
// import LoginPage from './Layouts/Login-layout'
import { RouterProvider } from 'react-router'
import { router } from './Routers'
import './App.css'

function App() {
  

  return (
    <>
      <RouterProvider router={router}>

        {/* <LoginPage/> */}
      </RouterProvider>
     
    </>
  )
}

export default App

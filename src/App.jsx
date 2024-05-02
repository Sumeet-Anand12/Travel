
import './App.css'
import Layout from './component/Layout/Layout'
import AccountDetails from './pages/AccountDetails/AccountDetails'
import Home from './pages/Home/Home'
import Tour from './pages/TourDetails/Tour'

function App() {
 

  return (
    
     <div className='bg-FFFFFF'> 
       <Home  />
       <Tour />
       <AccountDetails />

     </div> 
      
     
   
  )
}

export default App

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {ProvidingFunction} from './components/context/ReactContext'
import StartingPage from './components/StartingPage'
import LoginHindi from './components/LoginHindi'
const App=()=>{
  return(
    <ProvidingFunction>
    <BrowserRouter>
     <Routes>
      <Route exact path='/in' element={<StartingPage/>}/>
      <Route exact path='/in/login-hindi' element={<LoginHindi/>}/>
     </Routes>
    </BrowserRouter>
    </ProvidingFunction>
  )
} 
export default App
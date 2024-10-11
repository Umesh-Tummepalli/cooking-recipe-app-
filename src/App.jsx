import { Route,Routes } from 'react-router-dom'
import Mainpage from './assets/components/Mainpage'
import RecipeInfo from './assets/components/RecipeInfo'
function App() {
  return (
    <>
    <div style={{fontFamily:`"Yatra One", system-ui`,}}>

    <h1 className='text-6xl uppercase text-yellow-600 text-center font-bold mt-4 cursor-default' >The Baker's Box</h1>
    <h3 className='text-yellow-600 italic  text-center ' >Sweet Treats Made Simple</h3>
    </div>
    <Routes>
      <Route exact path="/" element={<Mainpage/>}/>
      <Route path='/recipe/:id' element={<RecipeInfo/>}/>
    </Routes>
    </>
  )
}

export default App;
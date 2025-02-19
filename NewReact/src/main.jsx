import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Timer from './Func_exercise/func_comp3'
//import CancelRequest from './Func_exercise/func_comp3'
//import Test2 from './Func_exercise/func_comp6'
//import Test1 from './Func_exercise/func_comp2'
//import ReducerExample from './Func_exercise/func_comp7'
//import ReducerDependency from './Func_exercise/func_comp8'
import MyFeature from './Func_exercise/myfeature'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyFeature/>
  </StrictMode>
)  

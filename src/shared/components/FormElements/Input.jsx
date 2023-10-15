import {useReducer} from 'react';
import "./Input.css";


const inputReducer = (state, action) => {
  switch(action.type){
    default state
  }

}
const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {value:'', isValid: false})

  const changeHandler = () => {

  }

    const element =
    props.element === 'input' ? (
    <input 
    id={props.id} 
    type={props.type} 
    placeholder={props.placeholder}
    onChange={changeHandler}
    
    />) : (
<textarea 
id={props.id} 
rows={props.roe || 3}
onChange={changeHandler}
/>
    )
  return (
    <div className={`form-control`}>
        <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  )
}

export default Input

import { useEffect, useReducer } from 'react';
import { validate } from '../utils/validators';
import "./Input.css";


const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      }
    case 'TOUCHED': {
      return {
        ...state,
        isTouched: true,
      }
    }
    default:
      return state
  }

}
const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    isTouched: false
  })

  const { onInput, id } = props;
  const { value, isValid } = inputState;


  useEffect(() => {
    onInput(id, value, isValid)
  }, [onInput, id, value, isValid])

  const changeHandler = (event) => {
    dispatch({ 
      type: 'CHANGE', 
      val: event.target.value, 
      validators: props.validators
     })
  }

  const touchHandler = () => {
    dispatch({ type: 'TOUCHED' })
  }

  const element =
    props.element === 'input' ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}

      />) : (
      <textarea
        id={props.id}
        rows={props.roe || 3}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
    )
  return (
    <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  )
}

export default Input

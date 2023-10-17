import { useCallback, useReducer } from 'react'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/components/utils/validators';
import Button from '../../shared/components/FormElements/Button/Button';
import './NewPlace.css';


const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE': {
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isFormValid: formIsValid
      };
    }
    default:
      return state;
  }
}

const NewPlace = () => {

  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      }
    },
    isFormValid: false
  })

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    })
  }, [])
  console.log(formState.isFormValid)


  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs)
  }


  return (
    <form className='place-form' onSubmit={formSubmitHandler}>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title.'
        onInput={inputHandler}
      />

      <Input
        id='description'
        element='textarea'
        type='text'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description ( Please enter atleast 5 characters).'
        onInput={inputHandler}
      />

      <Input
        id='address'
        element='input'
        type='text'
        label='Address'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid address.'
        onInput={inputHandler}
      />

      <Button type='submit' disabled={!formState.isFormValid}>ADD PLACE</Button>
    </form>
  )
}

export default NewPlace

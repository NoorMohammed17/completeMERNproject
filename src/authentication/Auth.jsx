import { useState } from 'react'
import Input from "../shared/components/FormElements/Input"
import Button from "../shared/components/FormElements/Button/Button"
import Card from "../shared/components/UIElements/Card/Card"
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../shared/components/utils/validators"
import { useForm } from "../shared/components/hooks/form-hook";
import "./Auth.css"

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: '',
      isValid: false,
    },
    password: {
      value: '',
      isValid: false,
    },
  }, false)

  console.log(formState.isFormValid)


  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs)
  }

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined // in 
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid)
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        }, false
      )
    }
    setIsLoginMode(prevMode => !prevMode)
  }
  return (
    <Card className='authentication'>
      <h2>{isLoginMode ? 'Login Required' : 'Signup Required'}</h2>
      <hr />
      <form className='place-form' onSubmit={formSubmitHandler}>
        {!isLoginMode && (
          <Input
            id='name'
            element='input'
            type='text'
            label='Enter Name'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a name.'
            onInput={inputHandler}
          />
        )}
        <Input
          id='email'
          element='input'
          type='email'
          label='E-mail'
          validators={[VALIDATOR_EMAIL()]}
          errorText='Please enter a valid email address.'
          onInput={inputHandler}
        />

        <Input
          id='password'
          element='input'
          type='password'
          label='Password'
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText='Please enter a valid password ( Please enter atleast 6  characters).'
          onInput={inputHandler}
        />


        <Button type='submit' disabled={!formState.isFormValid}> {isLoginMode ? 'LOGIN' : 'SIGN UP'}</Button>
      </form>
      <Button inverse onClick={switchModeHandler}>SWITCH TO {!isLoginMode ? 'LOGIN' : 'SIGN UP'}</Button>
    </Card>
  )
}

export default Auth

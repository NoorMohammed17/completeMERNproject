// import React from 'react'
import Input from "../shared/components/FormElements/Input"
import Button from "../shared/components/FormElements/Button/Button"
import Card from "../shared/components/UIElements/Card/Card"
import { VALIDATOR_EMAIL,VALIDATOR_MINLENGTH } from "../shared/components/utils/validators"
import { useForm } from "../shared/components/hooks/form-hook";
import "./Auth.css"

const Auth = () => {
    const [formState, inputHandler] = useForm({
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
  return (
    <Card className='authentication'> 
    <h2>Login Required</h2>
    <hr/>
    <form className='place-form' onSubmit={formSubmitHandler}>
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

    
    <Button type='submit' disabled={!formState.isFormValid}>LOGIN</Button>
  </form>
  </Card>
  )
}

export default Auth

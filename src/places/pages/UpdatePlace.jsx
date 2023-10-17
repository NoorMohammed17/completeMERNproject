import {useParams} from 'react-router-dom'
import { VALIDATOR_REQUIRE ,VALIDATOR_MINLENGTH} from '../../shared/components/utils/validators';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button/Button';

let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Taj Mahal",
    description: "The iconic white marble mausoleum",
    address:
      "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
    location: {
      lat: 27.175,
      long: 78.0422,
    },
    creator: 'u1',
  },
  {
    id: "p2",
    title: "Jaipur Palace",
    description: "Historic royal palace in Jaipur",
    address: "Jal Mahal, Amer, Jaipur, Rajasthan 302002, India",
    location: {
      lat: 26.9855,
      long: 75.8513,
    },
    creator: 'u1',
  },
  {
    id: "p3",
    title: "Gateway of India",
    description: "Historical monument in Mumbai",
    address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001, India",
    location: {
      lat: 18.9217,
      long: 72.8347,
    },
    creator: 'u2',
  },
];

const UpdatePlace= () => {
  const placeId = useParams.placeId // it should be same as you mentioned in the dynamic route

  const identifiedPlace = DUMMY_PLACES.find(p => p.id  === placeId);
  if(!identifiedPlace){
    return(
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    )
  }

  return (
    <form>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title.'
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />

      <Input
        id='description'
        element='textarea'
        type='text'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description ( Please enter atleast 5 characters).'
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
         <Button type='submit' disabled={true}>UPDATED PLACE</Button>
      
    </form>
  )
}

export default UpdatePlace


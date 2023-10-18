//import React from 'react'
import Card from "../../shared/components/UIElements/Card/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button/Button";
import './PlaceList.css';



const PlaceList
 = (props) => {

    if (props.items.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                <h2>No places found. Maybe create one?</h2>
                <Button to='/places/new'>Add Place</Button>
                </Card>

            </div>
        )

    }
    return (
        <ul className="place-list">
            {props.items.map((place) => (
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    image={place.imageUrl}
                    title={place.title}
                    description = {place.description}
                    address={place.address}
                    creatorId={place.creatorId}
                    coordinates={place.location}
                />
            ))}

        </ul>
    )
}

export default PlaceList


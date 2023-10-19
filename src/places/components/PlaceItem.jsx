import React, { useState, useContext } from 'react';
//import Map from '../../shared/components/UIElements/Map';
import Card from '../../shared/components/UIElements/Card/Card';
import Button from '../../shared/components/FormElements/Button/Button';
import Modal from '../../shared/components/UIElements/Modal';
import { AuthContext } from '../../shared/components/context/auth-context';

import './PlaceItem.css';

const PlaceItem = props => {
    const auth = useContext(AuthContext)
    const [showMap, setShowMap] = useState(false);
    const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    const openDeleteWarningHandler = () => setShowConfirmDeleteModal(true)
    const closeDeleteWarningHandler = () => setShowConfirmDeleteModal(false)
    const confirmDeleteWarningHandler = () => {
        setShowConfirmDeleteModal(false)
        console.log('DELETING......')
    }

    return (
        <React.Fragment>

            {/* MAP MODAL STARTS */}
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container" >
                    <iframe
                        title="map"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        // src={'https://maps.google.com/maps?q=' + props.coordinates.lat.toString() + ',' + props.coordinates.lng.toString() + '&t=&z=15&ie=UTF8&iwloc=&output=embed'}
                        src={`https://maps.google.com/maps?q=${props.coordinates.lat.toString() + ',' + props.coordinates.lng.toString()}&t=&z=13&ie=UTF8&iwloc=&output=embed`}

                    >
                    </iframe>
                </div>
            </Modal>
            {/* MAP MODAL ENDS */}

            {/* DELETE MODAL STARTS */}
            <Modal
                show={showConfirmDeleteModal}
                onCancel={closeDeleteWarningHandler}
                header={'Are you sure?'}
                // contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={closeDeleteWarningHandler}>CANCEL</Button>
                        <Button danger onClick={confirmDeleteWarningHandler}>DELETE</Button>
                    </React.Fragment>
                }
            >
               <p>
                Do you want to proceed and delete this place? Please note that it cannot be undone thereafter.
               </p>
            </Modal>
            {/* DELETE MODAL ENDS */}

            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                       {auth.isLoggedIn && <Button to={`/places/${props.id}`}>EDIT</Button>} 
                        {auth.isLoggedIn && <Button danger onClick={openDeleteWarningHandler}>DELETE</Button>}
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};

export default PlaceItem;

//code for Modal as per the instructor
{/* <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal> */}

import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (

<Modal
isOpen={!!props.selectedOption}
onRequestClose={props.handleclearer}
closeTimeoutMS={200}
className="modal"
contentLabel="Selected Option">
    <h3 className="modal__title">Select Option</h3>
    {props.selectedOption && <p className="modal_body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleclearer}>
        Okay
    </button>
</Modal>
);

export default OptionModal;
import React from 'react';
import Modal from 'react-modal';

const ErrorModal = (props) => (
  <Modal
    isOpen={!!props.submissionError}
    onRequestClose={props.handleCloseModal}
    contentLabel="Error fetching geo-location, please try again."
    closeTimeoutMS={200}
    className="modal"
    appElement={document.getElementById('app')}
  >
    <h3 className="modal__title">Error fetching geo-location, click the button below to refresh the page and try again.</h3>
    <button className="button" onClick={props.handleCloseModal}>Refresh!</button>
  </Modal>
);

export default ErrorModal;
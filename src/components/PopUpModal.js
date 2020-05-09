import React from 'react';
import Modal from 'react-modal';

import Signup from './Signup';
import Button from './Button'
 
import styled from 'styled-components';
import { media } from '../style/media';


const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledModal = styled(Modal)`
  margin: auto;
  padding: 1em;
  ${media.large`
    width: 60%;
    margin: auto;
  `};
`;
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
function PopUpModal(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <ModalWrapper className="signup-modal">
        
        <Button
          buttonType="primary"
          className="modal-form"
          onClick={openModal}
          text="I'm on board!"
        /> 
        <StyledModal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        >
          
        <Button
          buttonType="secondary"
          onClick={closeModal}
          text="X"
        />   
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Request an invite</h2>  

        <Signup />
      </StyledModal>
    </ModalWrapper>
  );
}
export default PopUpModal;
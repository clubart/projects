import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

export default function EnterAdminMode(props) {


  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [adminPassword, setAdminPassword] = useState('');

  useEffect(() => {
    setIsOpen(true);
    Modal.setAppElement('body');
  }, []);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
    props.leaveAdminMode();
  }

  function admin (e) {
    e.preventDefault();
    if(adminPassword === props.adminPassword){
      props.admin();
      closeModal();
    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <label>Enter Admin Password:
        <form>
            <input type="password" name="adminPassword" onChange={(e)=>setAdminPassword(e.target.value)}/>
            <button onClick ={admin}>Enter Admin Mode</button> 
          </form>
        </label><button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}
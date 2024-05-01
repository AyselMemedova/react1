// import { useState } from "react";

// function task1(){
//     const[modalButton, setModalbutton] = useState(true);
//     const[closeButton,setCloseButton] = useState(false);

//     function clickButton(){
//         setModalbutton(false);
//         setCloseButton(true)

//     }

//     function baglaButton(){
//         setModalbutton(true);
//         setCloseButton(false)
//     }

//     return(
//         <>
//         <div className="task1">
//         {modalButton ? <button onClick={clickButton}>Open Modal</button> : null}
//       {closeButton ? (
//         <div className="modal">
//           <p>Some text in the Modal</p>
//           <button onClick={baglaButton}>X</button>
//         </div>
//       ) : null}
//         </div>

//         </>
//     )
// }
// export default task1;

import React, { useState } from 'react';
// import Modal from './Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a modal</h2>
        <p>You can add any content here</p>
      </Modal>
    </div>
  );
};

export default taskfrst;

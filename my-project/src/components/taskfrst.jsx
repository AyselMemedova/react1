import { useState } from "react";

function task1(){
    const[modalButton, setModalbutton] = useState(true);
    const[closeButton,setCloseButton] = useState(false);

    function clickButton(){
        setModalbutton(false);
        setCloseButton(true)

    }

    function baglaButton(){
        setModalbutton(true);
        setCloseButton(false)
    }

    return(
        <>
        <div className="task1">
        {modalButton ? <button onClick={clickButton}>Open Modal</button> : null}
      {closeButton ? (
        <div className="modal">
          <p>Some text in the Modal</p>
          <button onClick={baglaButton}>X</button>
        </div>
      ) : null}
        </div>

        </>
    )
}
export default task1;
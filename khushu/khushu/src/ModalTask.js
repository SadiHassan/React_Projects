import React from 'react'
import './ModalTask.css'

function ModalTask({ show,  selectedOption,handleClose, children }) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div>
            <div className={showHideClassName}>
                <section className="modal-main">
                {children}
                <button onClick={handleClose}>Done</button>
                </section>
            </div>      
        </div>
    )
}

export default ModalTask
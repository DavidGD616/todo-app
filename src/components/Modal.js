import React from "react";
import ReactDOM from 'react-dom';

function Modal() {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div className="ModalBackground-box">
                <h3 className="ModalBackground-box__h3">Add Your ToDo</h3>
                <input
                    className="addToDoinput"
                    placeholder="Write your ToDo"
                />
                <div className="ModalBackground-box__buttons">
                    <a href="/" className="ModalBackground-box__buttons-a">Cancel</a>
                    <a href="/" className="ModalBackground-box__buttons-a">Complete</a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal };
import React from 'react'
import { FaTimes } from 'react-icons/fa';

import './Modal.css';
import { BagContainer, WishListContainer } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../actions/modals';
export default function Modal() {
    const dispatch = useDispatch();
    const {
        modals
    } = useSelector(state => ({
        modals: state.modalsStore,
    }));
    let modalContent = modals.container;
    function renderSwitch(container) {
        switch (container) {
            case "bag":
                return <BagContainer />;
            case "wishlist":
                return <WishListContainer />;   
            default:
                return <BagContainer />;
        }
    }
    return (
        <div className="modal" >
            <button
                className="modal-close-button"
                onClick={() => dispatch(closeModal())}
            >
                <FaTimes className=''/>
            </button>
            {
                renderSwitch(modalContent)
            }
        </div>
    )
}

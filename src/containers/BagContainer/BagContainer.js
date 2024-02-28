import React from 'react';
import './BagContainer.css';
import { BagItemCard, Empty } from '../../components';
import { emptyBag } from '../../actions/bag';
import { useDispatch, useSelector } from 'react-redux';
import { findTotal } from '../../helpers/general';
// Import the close icon from react-icons
import { MdClose } from 'react-icons/md';

export default function BagContainer() {
    const bag = useSelector(state => state.bagStore);
    const dispatch = useDispatch();

    function checkOutHandler(event) {
        console.log("check out");
        let checkoutCheck = true;

        bag.forEach(product => {
            if (product.size === undefined) {
                window.alert('Please select size for ' + product.productName);
                checkoutCheck = false;
                return;
            }
        });
        if (checkoutCheck) {
            dispatch(emptyBag());
        }
    }

    // Handler for closing the bag container
    function handleClose() {
        console.log("Close bag container");
        // Add your logic here. For example, hiding the BagContainer or updating a state.
    }

    return (
        <div className="bag-container flex-row">
            <div className="close-icon" onClick={handleClose}>
                <MdClose size="24px" /> {/* You can adjust the size as needed */}
            </div>
            {bag.length === 0 ? 
                <Empty /> :
                bag.map((product, index) => (
                    <BagItemCard key={product.id} item={product} />
                ))
            }
            <div className="bag-action">
                <div className="total-amount center">
                    <p>₹ {findTotal(bag)}</p>
                </div>
                <button 
                    className={`checkout center ${bag.length > 0 ? "" : "inactive"}`} 
                    onClick={checkOutHandler}
                    disabled={bag.length === 0}
                >
                    <p>
                        Checkout <i className="fas fa-arrow-circle-right"></i>
                    </p>
                </button>
            </div>
        </div>
    );
}

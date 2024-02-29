import React from 'react';
import './ProductSampleCarousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ProductSampleCarousel({ product = {} }) { // Provide a default empty object

    // Conditional rendering check
    if (!product.images || product.images.length === 0) {
        return <div>No images available</div>; // Or any other placeholder content
    }

    return (
        <div className="product-sample-carousel">
            <Carousel
                showThumbs={false}
                showArrows={false}
                showStatus={false}
            >
                {product.images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={product.productName} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

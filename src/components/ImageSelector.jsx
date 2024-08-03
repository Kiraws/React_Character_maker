import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ImageSelector = ({ images, name, onSelect, selectedIndex }) => {
    const [selectedImage, setSelectedImage] = useState(() => localStorage.getItem(`${name}-selected`) || '');

    const handleImageSelect = (image, index) => {
        if (selectedImage === image) {
            setSelectedImage('');
            onSelect(null);
        } else {
            setSelectedImage(image);
            onSelect(index);
        }
    };

    useEffect(() => {
        localStorage.setItem(`${name}-selected`, selectedImage);
    }, [selectedImage, name]);

    useEffect(() => {
        if (selectedIndex !== null) {
            setSelectedImage(images[selectedIndex]);
        }
    }, [selectedIndex, images]);

    return (
        <section className="h-3/4 grid grid-cols-3 w-[600px] -ml-6">
            {images.map((image, index) => (
                <label key={index} className="container ml-8 border-red-600">
                    <input
                        type="checkbox"
                        name={name}
                        checked={selectedImage === image}
                        onChange={() => handleImageSelect(image, index)}
                        className="hidden "
                    />
                    <div className={`checkmark ${selectedImage === image ? 'opacity-1' : 'opacity-0'} ml-36 mt-3 `}></div>
                    <img className="w-[150px] m-5 " src={image} alt={`${name} ${index + 1}`} />
                </label>
            ))}
        </section>
    );
};

ImageSelector.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number,
};

export default ImageSelector;

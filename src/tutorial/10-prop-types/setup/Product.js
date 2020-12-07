import React from 'react';
import PropTypes from 'prop-types'; // import from the package
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
  const url = image && image.url
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name || 'default name'}/>
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

//set up the name of property
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
}
// Product.defaultProps ={
//   name:"default name",
//   price:3.99,
//   image: defaultImage
// }

export default Product;

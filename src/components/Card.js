/* eslint-disable jsx-a11y/alt-text */
import "../App.css";

function Card(props) {
  return (
    <div className="card-flex">
      <div className="card-item">
      <div className="product-img"> <img height="50px" src={props.img} /></div> 
       <p className="name-product"> {props.name}</p>
    <div className="product-price">${props.price}</div>
      </div>
    </div>
  );
}

export default Card;

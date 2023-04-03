import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addTotalPrice, reduceTotalPrice, removeProduct, removeManyProducts, createCarrito } from "../../redux/actions/actions";
import HandlerShoppingItems from "../HandlerShoppingItems/HandlerShoppingItems";
import { useState } from "react";


/* felipe */
import Model from '../Detail/ModelDetail/modelDetail'

const Card = ({ image, name, id, price, rating, _quantity, stock, aux, setAux, item }) => {

  const [model, setModel] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (id) => {
    let tempData = [id];
    setTempData(data => [1, ...tempData])
    return setModel(true)

  }
  return (
    <>
    <div className={style.cardContainer}>
      <div className={style.card}>
        <Link class="text-decoration-none" to={`/detail/${id}`}>
          <h2 className={style.text}>{name}</h2>
        </Link>
        <Link to={`/detail/${id}`}>
          <img src={image} alt={name} className={style.card_image} />
        </Link>
        <p style={{ margin: '10px' }} >Price: {price} USD</p>
{/*         <p>Rating {rating}</p>
 */}        <HandlerShoppingItems dish={item} aux={aux} setAux={setAux} id={id} />
         <button type="button" class="btn btn-danger w-75 mx-auto" 
          onClick={() => getData(id)}
        >View details food
        </button>

      </div>
      {
        model === true ? <Model
          id={tempData[1]}
          hide={() => setModel(false)}
        /> : ''
      }
    </div>
    </>
  );
  
};


export default Card;

import CategoryFltr from "../CategoryFltr/CategoryFltr"
import Cards from "../Cards/Cards"
import Pagination from "../Pagination/Pagination"
import Orderings from "../Orderings/Orderings"
import style from "./Menu.module.css"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { saveCarrito } from "../../redux/actions/actions"


const Menu = () => {
    const dispatch = useDispatch();
    const allDishes = useSelector(state => state.allDishes)
    const categories = useSelector(state => state.categories)
    const cart = useSelector(state => state.cart)
    const userLogged = useSelector(state => state.user)
    const dishesPerPage = 9
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState("any");
    const lastDishIndex = currentPage * dishesPerPage;
    const firstDishIndex = lastDishIndex - dishesPerPage;
    const currentDishes = allDishes.slice(firstDishIndex, lastDishIndex)

    let totalPrice = 0

  cart.forEach(item => {
    totalPrice += item.price * item.quantity
  });

  useEffect(() => {
    handleSaveCarrito(cart)
    console.log("pasoxuseeffect");
    console.log(totalPrice);
  }, [totalPrice])

  const handleSaveCarrito = (cart) => {
    //   if(userLogged){
    // setAux(aux + 1)
    console.log("holaaa")
    console.log(cart)
    dispatch(saveCarrito({ cart, id: userLogged.sub }))
    //   } else {
    //     alert("login")
    //   }
  }
    return (
        <div className={style.menu}>
            <h2 className={style.title}>Menú</h2>
            <CategoryFltr setCurrentPage={setCurrentPage}/>
            <Orderings setCurrentPage={setCurrentPage} setOrder={setOrder}/>
            {/* <Pagination/> */}
            <Cards slicedDishes={currentDishes}/>
            <Pagination totalDishes={allDishes.length} 
                dishesPerPage={dishesPerPage} 
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}/>
                        

        </div>

    )
}

export default Menu
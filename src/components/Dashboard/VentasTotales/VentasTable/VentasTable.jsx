import { useSelector } from "react-redux";
import VentasItem from "../VentasItem/VentasItem";

const VentasTable = () => {
    const orders = useSelector(state => state.adminData.orders)

    return (
        <table className="table">
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Dirección</th>
          <th>Productos</th>
          <th>Monto</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {orders?.map(order => {
            if(order.status === "entregado"){
                return <VentasItem
                owner = {order.owner}
                direccion = "Av. Corrientes 1234"
                items = {order.items}
                monto = {order.amount}
                date = {order.date}
                id = {order._id}
                />
            }
        })}
      </tbody>
      
    </table>
    );
}
 
export default VentasTable;
import { useDispatch } from "react-redux";
import { orderDelivered } from "../../../redux/actions/actions";
import { useState } from "react";

const PedidoActivo = ({direccion, monto, id}) => {
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(true)
    const displayNone = {
        display: "none"
    }
    const displayInLine = {
        display: 'in-line'
    }
    
    return (
        <tr style={display ?  displayInLine : displayNone }>
            <td>{direccion}</td>
            <td>{monto}</td>
            <td><button onClick={() => {
                dispatch(orderDelivered(id))
                setDisplay(false)
            }}>Entregado</button></td>            
        </tr>
    );
}
 
export default PedidoActivo;
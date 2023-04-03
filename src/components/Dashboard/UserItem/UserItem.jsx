import { useEffect } from "react";
import { useState } from "react";
import { banUser, unbanUser } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux";

const UserItem = ({id, name,email,pedidos,isActive, sub}) => {
    const [status, setStatus] = useState(null);
    const dispatch = useDispatch()
    useEffect(()=>{
        isActive ? setStatus(true) : setStatus(false);
        console.log(status);
    },[])

    useEffect(()=>{
        console.log(status);
    },[status])

    const handleClick = () => {
        const _id = sub || id
        if (!status) {
          dispatch(unbanUser(_id));
          setStatus(true);
        } else {
          dispatch(banUser(_id));
          setStatus(false);
        }
    }

    return (
        <tr style={{width:"80%"}}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{pedidos.length}</td>
            <td>{status ? "Activo"  : "Inactivo"}</td>
            {status 
            ? <button onClick={handleClick}>desactivar usuario</button> 
            : <button onClick={handleClick}>activar usuario</button>
            }
        </tr>
    );
}
 
export default UserItem;
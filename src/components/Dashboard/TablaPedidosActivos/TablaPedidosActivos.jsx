import PedidoActivo from "./PedidoActivo";

const TablaPedidosActivos = ({pedidos}) => {
    return (<>
        <thead>
            <tr>
                <th>Dirección</th>
                <th>Monto</th>
                <th>Marcar entregado</th>
            </tr>
        </thead>
        <tbody>
            {pedidos?.map(pedido => {
                if(pedido.status === "pending"){
                    return <PedidoActivo
                    direccion = "Av. Corrientes 1234"
                    monto = {pedido.amount}
                    id = {pedido._id}
                    />
                }
            })}
        </tbody>
            </>
    );
}
 
export default TablaPedidosActivos;
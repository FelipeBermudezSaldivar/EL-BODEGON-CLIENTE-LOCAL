import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDishes, getAllOrders, getAllUsers, getAuth0Users } from "../../redux/actions/actions";
import UserItem from "./UserItem/UserItem";
import UserList from "./UserList/UserList";
import { Container, Row, Col, Card, CardGroup, Table} from 'react-bootstrap';
import style from './Dashboard.module.css'
import Sidebar from "./Sidebar/Sidebar";
import GraficoLinea from "./GraficoLinea/GraficoLinea";
import GraficoBarras from "./GraficoBarras/GraficoBarras";
import GraficoTorta from "./GraficoTorta/GraficoTorta";
import { Link } from "react-router-dom";
import TablaPedidosActivos from "./TablaPedidosActivos/TablaPedidosActivos";


const Dashboard = () => {
    // const users = useSelector(state => state.adminData.users)
    // const auth0Users = useSelector(state => state.adminData.auth0Users)
    // const [allUsers, setAllUsers] = useState([])
    // const [cantidadUsuarios, setCantidadUsuarios] = useState(0)
    const pedidos = useSelector(state => state.adminData.orders)
    const productos = useSelector(state => state.allDishes)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAuth0Users())
        dispatch(getAllUsers())
        dispatch(getAllDishes())
        dispatch(getAllOrders())
        console.log("traigousuarios");
    },[])

  return (
    <Container fluid>
      <Row>
        <Col sm={2} className="bg-light">
          <Sidebar/>
        </Col>
        <Col sm={10}>
          <Row className="my-3">
            <Col md={4}>
              <Link to = '/dashboard/sales'>
              <Card>
                <Card.Body>
                  <Card.Title>Ventas totales</Card.Title>
                  <Card.Text>{pedidos?.length}</Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col md={4}>
              <Link to ="/dashboard/foods">
              <Card>
                <Card.Body>
                  <Card.Title>Productos</Card.Title>
                  <Card.Text>{productos?.length}</Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
            <Col md={4}>
            <Link to ="/dashboard/users">
              <Card>
                <Card.Body>
                  <Card.Title>Ver </Card.Title>
                  <Card.Text>usuarios</Card.Text>
                </Card.Body>
              </Card>
              </Link>
            </Col>
          </Row>
          <Row className="my-3">
            <Col md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>Chart</Card.Title>
                  <div style={{ height: '300px' }}>
                    <GraficoTorta/>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Pedidos activos</Card.Title>
                  <div style={{ height: '300px', overflowY: 'scroll' }}>
                    <Table striped bordered>
                      <TablaPedidosActivos pedidos={pedidos}/>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

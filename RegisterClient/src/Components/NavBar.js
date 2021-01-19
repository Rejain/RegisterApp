import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#">Registration App</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/addUser">Add User</Nav.Link>
                    <Nav.Link as={Link} to="/">Show Users</Nav.Link>
                </Nav>
            </Navbar>
            {props.children}
        </div>
    );
}
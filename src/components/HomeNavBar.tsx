import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const HomeNavBar = () => {

    return (
        <Navbar bg="light" expand="lg" style={{paddingLeft:15,paddingRight:15}}>
            <Container fluid>
                <Navbar.Brand href="#">Leituras</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#" as="span">
                        <Link to='/' style={{textDecoration:0, color:"dimgrey"}}>
                            Home
                        </Link>
                    </Nav.Link>
                    <NavDropdown title="Livros" id="home-nav-dropdown" style={{color:"dimgrey"}}>
                        <NavDropdown.Item href="#recentes">Recentes</NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            <Link to='/categorias' style={{textDecoration:0, color:"dimgrey"}}>
                                Categorias
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            <Link to='/livros' style={{textDecoration:0, color:"dimgrey"}}>
                                Todos
                            </Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="#">Entrar</Nav.Link>
                    <Nav.Link href="#">Cadastre-se</Nav.Link>
                    <Nav.Link href="#" as="span">
                        <Link to='/sobre' style={{textDecoration:0, color:"dimgrey"}}>
                            Sobre
                        </Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )

}

export default HomeNavBar;
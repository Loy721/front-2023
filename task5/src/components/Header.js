import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Form, FormControl} from "react-bootstrap";
import {useLocation, useNavigate} from 'react-router-dom';
import {useState} from "react";

function Header({search}) {
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const isSearchVisible = currentPath === '/films';

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Админка фильмотеки</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/films">Главная</Nav.Link>
                    </Nav>
                    {isSearchVisible && (
                        <Form className='d-flex'>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-sm-2"
                                value={searchQuery}
                                onChange={e => setSearchQuery(e.target.value)}
                            />
                            <Button variant={"outline-info"} onClick={e => search(searchQuery)}>Search</Button>
                        </Form>
                    )}
                    <Button className={"ms-2"} variant={"outline-info"} onClick={() => navigate("/films/create")}>Создать</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
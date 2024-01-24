import { Button, Container, Form, Image, Nav, NavDropdown, NavItem, Navbar } from 'react-bootstrap'
import './Navi.css'
export default function Navi() {
    return (
        <div className='navi'>
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <Image src='assets/images/logos/logo.svg' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavItem className='movie'>Filmler</NavItem>
                            <NavItem>Sinemalar</NavItem>
                            <NavItem>Kampanyalar</NavItem>
                            <NavItem>Ayrıcalıklı Salonlar</NavItem>
                            <NavItem><Image src='assets/images/logos/cgv_movie_pass_1x.svg' /> </NavItem>
                            <NavDropdown title="..." id="basic-nav-dropdown">
                                <NavDropdown.Item>CGV Arthouse</NavDropdown.Item>
                                <NavDropdown.Item>Gold Class Salon Sizin</NavDropdown.Item>
                                <NavDropdown.Item>Özel Etkinlik Talepleri</NavDropdown.Item>
                                <NavDropdown.Item>CGV Sinema Club</NavDropdown.Item>
                                <NavDropdown.Item>Yardım Merkezi</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Form className="navi-search d-flex">
                            <div className='search-left'>
                                <Image src='assets/images/logos/search.svg'></Image>
                                <span className='search-text'>Ara</span>

                            </div>

                            <Button>
                                <Image src='assets/images/logos/cgv_cinema_club_2x.svg' />
                                <div>
                                    <span className='login-btn'>Giriş Yap</span>
                                    <span className='register-btn'>veya Üye Ol</span>
                                </div>
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

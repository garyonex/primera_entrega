import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const style = {
  padding: 5,
}
function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Nav>
          <Navbar.Collapse>
            <Link to='/' style={style}>
              HOME
            </Link>
            <Link to='/productos' style={style}>
              NOTES
            </Link>
            <Link to='/users' style={style}>
              USERS
            </Link>
            <Link to='/login' style={style}>
              LOGIN
            </Link>
            <Link to='/register' style={style}>
              REGISTER
            </Link>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar

import React from 'react'
import {Routes, Router, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import AddReview from './components/add-review';
import MoviesList from './components/movies-list';
import Movie from './components/movie';
import Login from './components/login';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function App(){
  const [user, setUser] = React.useState(null)
  async function login(user = null){
    setUser(user)
  }
  async function logout(){
    setUser(null)
  }
  return(
    <div className="App"> 
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to={"/movies"}>Movies</Link></Nav.Link>
            <Nav.Link >{user ? (<a onClick={logout}>Logout User</a>) : (<Link to={"/login"}>Login</Link>)}</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route exact path="/" element={<MoviesList/>}></Route>
        <Route exact path="/movies" element={<MoviesList/>}></Route>
        <Route path="/movies/:id/review" render={(props) =>(<AddReview {...props} user={user}/>)}></Route>
        <Route path="/movies/:id" render={(props) => (<Movie {...props} user={user}/>)}></Route>
        <Route path="/login" element={<Login login={login}/>}  >        </Route>
      </Routes>

    </div>
  )
}

export default App;
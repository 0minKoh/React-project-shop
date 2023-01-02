import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import './App.css';

import products from './Data'
import Detail from './routes/Detail'

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {

  let navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="light" variant='light'>
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail/0')}}>
              Detail
            </Nav.Link>
            <Nav.Link onClick={() => {navigate('/event')}}>
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className="container">
        <Routes>
          <Route path='/' element={
            <div className="row">
              <Card products={products[0]} i={1}></Card>
              <Card products={products[1]} i={2}></Card>
              <Card products={products[2]} i={3}></Card>
            </div>
          }></Route>
          <Route path='/detail/:id' element={<Detail products={products}></Detail>}></Route>
          <Route path='/about' element={<div>aboutPage</div>}></Route>
          <Route path='/event' element={<Event></Event>}>
            <Route path='one' element={<p>이벤트1</p>}></Route>
            <Route path='two' element={<p>이벤트2</p>}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

function Event() {
  return(
    <div>
      <p style={{fontSize : '20px'}}>오늘의 이벤트</p>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <div className="col-md-4 col-12">
      <img src={'http://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" alt="" />
      <h4>{props.products.title}</h4>
      <p>{props.products.content}</p>
      <p>{props.products.price}</p>
    </div>
  )
}

export default App;

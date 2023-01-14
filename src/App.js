import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import './App.css';
import axios from 'axios'

import products from './Data'
import Detail from './routes/Detail'
import Cart from './routes/Cart'

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {

  let products2, setProducts2 = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.length == 0) {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  }, [])

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
            <Nav.Link onClick={() => {navigate('/cart')}}>
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className="container">
        <Routes>
          <Route path='/' element={
            <div>
              <div className="row">
                <Card products={products[0]} i={1} navigate={navigate}></Card>
                <Card products={products[1]} i={2} navigate={navigate}></Card>
                <Card products={products[2]} i={3} navigate={navigate}></Card>
              </div>
              <button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {
                  let products2Copy = [...products2]
                  products2Copy = result
                  setProducts2(products2Copy)
                }).catch(() => {
                  console.log('실패')
                })
              }}>서버에 요청하기</button>
            </div>
          }></Route>
          <Route path='/detail/:paramId' element={<Detail products={products}></Detail>}></Route>
          <Route path='/about' element={<div>aboutPage</div>}></Route>
          <Route path='/event' element={<Event></Event>}>
            <Route path='one' element={<p>이벤트1</p>}></Route>
            <Route path='two' element={<p>이벤트2</p>}></Route>
          </Route>
          <Route path='/cart' element={ <Cart></Cart> }></Route>
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
    <div className="col-md-4 col-12" onClick={() => {props.navigate('/detail/' + String(props.i - 1))}}>
      <img src={'http://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" alt="" />
      <h4>{props.products.title}</h4>
      <p>{props.products.content}</p>
      <p>{props.products.price}</p>
    </div>
  )
}

export default App;

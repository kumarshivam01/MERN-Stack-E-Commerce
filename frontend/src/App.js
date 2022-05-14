import React from "react";
import { Container } from 'react-bootstrap'
import Footer from "./components/Footer";
import { Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductDeails from "./screens/ProductDeails";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <>
      <Header />
      <main className="my-3">
        <Container>
          {/* <h1>Hello E-commerce</h1> */}
    <Routes>
          <Route exact path='/' element={<HomeScreen/>}/>
          <Route exact path='/product/:id' element={<ProductDeails/>}/>
          <Route exact path='/cart/:id?' element={<CartScreen/>}/>
    </Routes>
        </Container>
      </main>
      <Footer />
      </>
  );
}

export default App;

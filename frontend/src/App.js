import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer'
import Homescreen from './screens/HomeScreen'

const App =() => {
  return (
    <>
      <Header />
      <main className='py-3'>
          <Container>
            <h1 className="text-center">Welcome to XZen</h1>
            <Homescreen />
          </Container>
        
      </main>
      <Footer />
      
      
    </>
  );
}

export default App;

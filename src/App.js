import React from 'react';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Card from './Card';
import assets from './assets/character.png.png';

function App() {
  return (
    <div className=''>
    <NavBar />
    <MainContent />
    <div className='grid md:grid-cols-3 gap-1'>
    <Card 
      image={assets}
      meal="Bean Chilli"
      cook="Reciepe by Mario"
    />
    <Card 
      image={assets}
      meal="Chicken and Chips"
      cook="Reciepe by Mario"
    />
    <Card 
      image={assets}
      meal="Veg Noodles"
      cook="Reciepe by Mario"
    />
    <Card 
      image={assets}
      meal="Bean Chilli"
      cook="Reciepe by Mario"
    />
    <Card 
      image={assets}
      meal="Bean Chilli"
      cook="Reciepe by Mario"
    />
    <Card 
      image={assets}
      meal="Bean Chilli"
      cook="Reciepe by Mario"
    />
    <Card 
      image={assets}
      meal="Chicken and Chips"
      cook="Reciepe by Mario"
    />
    <Card 
      image={assets}
      meal="Veg Noodles"
      cook="Reciepe by Mario"
    />
    <Card 
      image={assets}
      meal="Chicken and Chips"
      cook="Reciepe by Mario"
    />
    </div>
    </div>
  );
}

export default App;

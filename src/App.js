import React from 'react';
import './App.css';
import GameDisplay from "./components/GameDisplay/GameDisplay";

function App() {

  let games = [
    {
      title: "Dr. Mario",
      imageURL: "images/DoctorMario.jpg",
      price: 5.99,
      rating: 4.0,
    },
    {
      title: "Legend of Zelda: Breath of the Wild",
      imageURL: "images/ZeldaBotW.jpeg",
      price: 10.99,
      rating: 4.5,
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to GameShare!</h1>
        <p>
          This site is currently under development. We are working on bringing you the next greatest thing since
          wireless remotes!
        </p>
        <GameDisplay games={games}/>
      </header>
    </div>
  );
}

export default App;

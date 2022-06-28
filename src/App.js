import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

const data = [
  {
    name: "wap"
  },
  {
    name: "been so long"
  },
  {
    name: "lunch"
  },
]

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(data)
  }, [])

  const addSongHandler = song => {
    const newSongs = [...songs, song];
    setSongs(newSongs);
  }

  return (
    <div>
    <h1 className="title">my mixtape</h1>
    <Form addSong={addSongHandler}/>
    <List songs={songs} />
    </div>
  );
}

export default App;

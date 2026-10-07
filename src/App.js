import logo from './logo.svg';
import './App.css';
import React from 'react';
import RenderAndCommitDemo from './ex17/RenderAndCommitDemo';
import SnapshotDemo from './ex18/SnapshotDemo ';

function App() {
  return (

    <React.StrictMode>
      <SnapshotDemo />
    </React.StrictMode>
  );
}

export default App;

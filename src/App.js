import React from 'react';
import MyEditor from './Editor';
import './App.css'


function App() {
  const handleSaveClick = () => {
    // Add your save logic here
    console.log('Save button clicked!');
  };
  return (
    <div className="App">
      <header className='header-container'>
        
        <h1>  Demo Editor</h1>
        <button className='save-button' onClick={handleSaveClick}> Save</button>
        
      </header>
      <main>
        <MyEditor />
        
      </main>
      
    </div>
  );
}

export default App;

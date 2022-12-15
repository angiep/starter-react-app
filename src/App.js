import './App.css';


function MainComponent() {
  return (
    <div>My Main Component</div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Exercise</h1>
      </header>
      <main>
        <MainComponent />
      </main>
    </div>
  );
}

export default App;

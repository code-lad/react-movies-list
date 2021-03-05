import Movies from './components/movies'
import Header from './components/header'
import './App.css'
function App() {
  return (
    <div className="app">
      <Header/>
        <main className="container">
          <h2><span className="world">World</span> <span className="movies">Movies</span></h2>
          <Movies/>
        </main>
    </div>
  );
}

export default App;

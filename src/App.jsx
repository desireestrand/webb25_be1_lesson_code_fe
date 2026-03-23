import "./App.css";
import SongList from "./components/songs/SongList";
import { songs } from "./data/tempData";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Song Library</h1>
      </header>
      <main>
        <section className="section">
          <h2>All Songs</h2>
          <SongList songs={songs} />
        </section>
      </main>
    </div>
  );
}

export default App;

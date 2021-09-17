import './assets/css/app.scss';
import Apod from "./components/Apod";

function App() {
  return (
    <div className="app">
      <div className="app-banner">
          <h1>Spacestagram</h1>
      </div>
      <div className="app-body">
          <Apod />
      </div>
    </div>
  );
}

export default App;

import './assets/css/app.scss';
import Apod from "./components/Apod";
import AppNav from "./components/AppNav";
import AppImages from "./views/AppImages";

function App() {
  return (
    <div className="app">
      <div className="app-banner">
          <h1>Spacestagram</h1>
      </div>
      <div className="app-body">
          <Apod />
          <div className="app-body__content">
            <AppNav />
            <AppImages />
          </div>
      </div>
    </div>
  );
}

export default App;

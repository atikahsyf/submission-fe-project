import './App.css';
import routes from './routers/index';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChangePhoto from './pages/ChangePhoto';
import Profile from './pages/Profile';
import CropPhoto from './pages/CropPhoto';
import TakePhoto from './pages/TakePhoto';
//import { createBrowserHistory } from "history";

//const history = createBrowserHistory();

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Profile />}></Route>
        <Route path='/change-photo' element={<ChangePhoto />}></Route>
        <Route path='/take-photo' element={<TakePhoto />}></Route>
        <Route path='/crop-photo' element={<CropPhoto />}></Route>
      </Routes>
    </Router >
  );
}


export default App;

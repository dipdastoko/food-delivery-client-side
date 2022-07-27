import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import AuthProvider from './ContextAPI/AuthProvider';
import OrderFood from './pages/OrderFood/OrderFood';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='orderfood' element={<OrderFood />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

/* 
https://i.ibb.co/PM4jN8G/bhuna-khichuri.png
https://i.ibb.co/L1sF7Fy/Chicken-Hyderabadi-Biryani-6-1.png
https://i.ibb.co/9gGzR5S/Idli.png
https://i.ibb.co/NZkG04s/Ilish-Pulao-7.png
https://i.ibb.co/XxTWTHq/Mutton-Biryani-Goat-min.png
https://i.ibb.co/t2jHJgQ/plain-dosa.png
*/

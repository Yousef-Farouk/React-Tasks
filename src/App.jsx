import logo from './logo.svg';
import './App.css';
import MyNav from './Components/NavBar';
import { MySlider } from './Components/MySlider';
import { Products } from './Components/Products/Products';
import { Footer } from './Components/Footer';

import { StudentPage } from './Components/StudentPage';

function App() {
  return (
    <>
      <MyNav></MyNav>
      {/* <MySlider></MySlider>
      <Products></Products> */}

      <StudentPage></StudentPage>
      {/* <Footer></Footer> */}
    </>
    
  );
}

export default App;

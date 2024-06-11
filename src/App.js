import logo from './logo.svg';
import './App.css';
import MyNav from './Components/NavBar';
import { MySlider } from './Components/MySlider';
import { Products } from './Components/Products/Products';
import { Footer } from './Components/Footer';
import { StudentPage } from './Components/StudentPage';
import { createBrowserRouter, createRoutesFromElements,RouterProvider,Route, Outlet } from 'react-router-dom';
import {Layout} from './Components/Shared/layout'
import Producttable from './Components/Products/Product-table';
import { getAllProducts } from './Api/ProductApi';
import Productform from './Components/Products/product-form';

function App() {

  const Router = createBrowserRouter(

      createRoutesFromElements(
        <>
          <Route path="/" element= {<Layout/>}>
            <Route index element={<MySlider />} />

            <Route path='products' element={<Producttable/>}
            loader={getAllProducts}
						/>

            <Route path='products/:id/edit' element={<Productform/>}/>
          </Route>
        
        </>
      )
      
  )

  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  );

  
  // return (
  //   <>
  //     <MyNav></MyNav>

  //     {/* <MySlider></MySlider> */}

  //     {/* <Products></Products> */}

  //     {/* <StudentPage></StudentPage> */}
  //     {/* <Footer></Footer> */}
  //   </>
    
  // );
}

export default App;

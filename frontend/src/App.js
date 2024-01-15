import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PhotoList from './components/PhotoList';
// import PhotoForm from './PhotoForm';

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <header>
    //       <h1>Photo Gallery App</h1>
    //       <nav>
    //         <ul>
    //           <li><Link to="/">Home</Link></li>
    //           <li><Link to="/add">Add Photo</Link></li>
    //         </ul>
    //       </nav>
    //     </header>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PhotoList/>}/>
            
            {/* <Route path="add" element={<AddProduct/>}/>
            <Route path="edit/:id" element={<EditProduct/>}/> */}
          </Routes>
        </BrowserRouter>
    //   </div>
    // </Router>
  );
}

export default App;

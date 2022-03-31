import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import AboutUs from './components/aboutUs'
import ContactUS from './components/ContactUs';
import Services from './components/services'
import reportWebVitals from './reportWebVitals';
//console.log(temp);

// const root=ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(

    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>}></Route>
    <Route path="/aboutUs" element={<AboutUs/>}></Route>
    <Route path="/ContactUs" element={<ContactUS/>}></Route>
    <Route path="/Services" element ={<Services/>}> </Route>
    </Routes>
    </BrowserRouter>,
    document.getElementById('root')

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

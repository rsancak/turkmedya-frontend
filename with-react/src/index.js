import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/scss/bootstrap.scss';
import './assets/scss/_reset.scss';
import Header from './layout/header'
import Footer from './layout/footer';
import MainSlider from './partials/main-slider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <MainSlider/>
    <Footer/>
  </>
);

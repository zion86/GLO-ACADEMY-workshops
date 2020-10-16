import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Features } from './components/Features/Features';
import { Details } from './components/Details/Details';
import { Footer } from './components/Footer/Footer';
import { Calendar } from './components/Calendar/Calendar';
import './style.css';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Details />
      <Calendar />
      <Footer />
    </>
  );
};
import React from 'react';
import Codebar from './components/Codebar/Codebar';
import {EditorProvider} from './context/context'
import s from './App.module.scss'
import Header from './components/Header/Header';
const App = () => {
  return (
    <EditorProvider>
      <Codebar/>

    <div className={s.main}>
      <Header/>
    </div>
    </EditorProvider>
  );
};

export default App;
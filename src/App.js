import React, { Fragment, useEffect } from 'react';
import SearchBar from './component/layout/SearchBar'
import Logs from './component/logs/Logs'
import AddBtn from './component/layout/AddBtn'
import AddLogModal from './component/logs/AddLogModal'
import EditLogModal from './component/logs/EditLogModal'
import AddTechModal from './component/techs/AddTechModal'
import TechListModal from './component/techs/TechListModal'


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })

  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;

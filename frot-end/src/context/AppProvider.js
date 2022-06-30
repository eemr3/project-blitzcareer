import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './Context';
// import api from '../api/api';
// import tokenMock from '../api/tokenMock';

function AppProvider({ children }) {
  const [nameUser, setNameUser] = useState({});
  const [saveDataFormTask, setSaveDataFormTask] = useState();
  const [isSave, setIsSave] = useState(false);

  return (
    <GlobalContext.Provider
      value={ {
        setNameUser,
        nameUser,
        saveDataFormTask,
        setSaveDataFormTask,
        isSave,
        setIsSave,
      } }
    >
      {children}
    </GlobalContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default AppProvider;

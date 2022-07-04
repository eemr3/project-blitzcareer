import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './Context';

function AppProvider({ children }) {
  const [nameUser, setNameUser] = useState({});
  const [saveDataFormTask, setSaveDataFormTask] = useState();
  const [valuesFormTask, setValuesFormTasks] = useState({
    title: '',
    description: '',
    status: 'Pendente',
  });
  const [dataTaskUpdate, setDataTaskUpdate] = useState({});
  const [isSave, setIsSave] = useState(false);
  const [isCreate, setIsCreate] = useState(true);

  return (
    <GlobalContext.Provider
      value={ {
        setNameUser,
        nameUser,
        saveDataFormTask,
        setSaveDataFormTask,
        valuesFormTask,
        setValuesFormTasks,
        isSave,
        setIsSave,
        setIsCreate,
        isCreate,
        dataTaskUpdate,
        setDataTaskUpdate,
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

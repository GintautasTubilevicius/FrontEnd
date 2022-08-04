import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import { useState } from 'react';
import { useEffect } from 'react';
import { create, destroy, edit, read } from './Functions/localStorage';
import DataContext from './Components/DataContext';
import List from './Components/List';
import Edit from './Components/Edit';

const localStorageKey = 'zoo';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [animals, setAnimals] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [EditData, setEditData] = useState(null);
  const [modalData, setModalData] = useState(null);


  useEffect(() => {
    setAnimals(read(localStorageKey));
  }, [lastUpdate])

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(localStorageKey, createData);
    setLastUpdate(Date.now());
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(localStorageKey, deleteData.id);
    setLastUpdate(Date.now());
  }, [deleteData]);

  useEffect(() => {
    if (null === EditData) {
      return;
    }
    edit(localStorageKey, EditData, EditData.id);
    setLastUpdate(Date.now());
  }, [EditData]);

  return (
    <DataContext.Provider value={{
      setCreateData,
      animals,
      setDeleteData,
      modalData, 
      setModalData,
      setEditData
    }}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <Create />
          </div>
          <div className="col-7">
            <List />
          </div>
        </div>
      </div>
      <Edit/>
    </DataContext.Provider>
  );
}

export default App;
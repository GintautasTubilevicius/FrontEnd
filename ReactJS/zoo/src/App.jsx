import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import { useState } from 'react';
import { useEffect } from 'react';
import { create, destroy, edit, rand, read } from './Functions/localStorage';
import DataContext from './Components/DataContext';
import List from './Components/List';
import Edit from './Components/Edit';
import Messages from './Components/Messages';

const localStorageKey = 'zoo';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [animals, setAnimals] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [EditData, setEditData] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [messages, setMessages] = useState([]);


  useEffect(() => {
    setAnimals(read(localStorageKey));
  }, [lastUpdate])

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(localStorageKey, createData);
    setLastUpdate(Date.now());
    msg('success', 'All good!');
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(localStorageKey, deleteData.id);
    setLastUpdate(Date.now());
    msg('danger', 'Animal gone!');
  }, [deleteData]);

  useEffect(() => {
    if (null === EditData) {
      return;
    }
    edit(localStorageKey, EditData, EditData.id);
    setLastUpdate(Date.now());
    msg('success', 'Animal was edited!');
  }, [EditData]);

  const msg = (type, text) => {
    const mes = { type, text, id: rand(100000, 9999999) }
    setTimeout(() => {
      setMessages(m => m.filter(me => me.id !== mes.id))
    }, 3000);
    setMessages(m => [...m, mes])
  }

  return (
    <>
      <p className="h1">Animal List</p>
      <DataContext.Provider value={{
        setCreateData,
        animals,
        setDeleteData,
        modalData,
        setModalData,
        setEditData,
        messages,
        msg
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
        <Edit />
        <Messages></Messages>
      </DataContext.Provider>
    </>
  );
}

export default App;
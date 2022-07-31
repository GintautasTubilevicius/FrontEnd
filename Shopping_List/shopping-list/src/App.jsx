import React, { useState, useEffect } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [items, setItems] = useState([
    { itemName: 'Pienas', quantity: 1, isSelected: false },
    { itemName: 'Duona', quantity: 2, isSelected: false },
    { itemName: 'Cukrus', quantity: 2, isSelected: false }
  ]);

  const [inputValue, setInputValue] = useState('');
  const [countTotal, setCountTotal] = useState(0);
  const [color, setColor] = useState(null);

  const handleAddButtonClick = () => {
    if (inputValue === '') return;
    const newItem = {
      itemName: inputValue,
      quantity: 1,
      isSelected: false
    };
    setItems(s => [...s, newItem]);
    setInputValue('');
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      if (inputValue === '') return;
      const newItem = {
        itemName: inputValue,
        quantity: 1,
        isSelected: false
      };
      setItems(s => [...s, newItem]);
      setInputValue('');
    }
  };

  const handleQuantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity = newItems[index].quantity + 1;
    setItems(newItems);
  }

  const handleQuantityDecrease = (index) => {
    const newItems = [...items];
    newItems[index].quantity > 0 ? newItems[index].quantity = newItems[index].quantity - 1 : newItems[index].quantity = 0;
    setItems(newItems);
  }

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected
    setItems(newItems);
  }

  useEffect(() => {
    countTotalSum();
    shoppingDone();
  })

  const countTotalSum = () => {
    setCountTotal(items.reduce((sum, list) => sum + list.quantity, 0));
  }

  const shoppingDone = () => {
    let done = 0;
    items.forEach((el) => el.isSelected ? done++ : null);
    setColor(items.length === done ? 'green' : null);
  }

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div className='app-background'>
      <div className='main-container' style={{ backgroundColor: color }}>
        <h2 className='title'>Shop list</h2>
        <div className='add-item-box'>
          <input value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} className='add-item-input' placeholder='Add item...' />
          <FontAwesomeIcon onClick={() => handleAddButtonClick()} icon={faPlus} />
        </div>
        <div className='item-list'>
          {
            items.map((item, index) => (
              <div className='item-container' key={index}>
                <div className='item-name' onClick={() => toggleComplete(index)}>
                  {item.isSelected ? (
                    <>
                      <FontAwesomeIcon icon={faCheckCircle} />
                      <span className='completed'>{item.itemName}</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faCircle} />
                      <span>{item.itemName}</span>
                    </>
                  )}
                </div>
                <div className='buttons'>
                  <div className='quantity'>
                    <button>
                      <FontAwesomeIcon onClick={() => handleQuantityDecrease(index)} icon={faChevronLeft} />
                    </button>
                    <span> {item.quantity} </span>
                    <button>
                      <FontAwesomeIcon onClick={() => handleQuantityIncrease(index)} icon={faChevronRight} />
                    </button>
                  </div>
                  <div className='quantity'>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </div>
              </div>)
            )
          }

        </div>
        <div className='total'>Total: {countTotal}</div>
      </div>
    </div>
  );
};

export default App;
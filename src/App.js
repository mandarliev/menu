import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Get the unique categories of the list
const allCategories =['all',...new Set(items.map((item)=> item.category))];

console.log(allCategories);

function App() {
  // Getting the data
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;

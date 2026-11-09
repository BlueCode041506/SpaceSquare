import { useState } from 'react';
import Header from './components/Header.jsx';
import ItemList from './components/ItemList.jsx';
import { items } from './data.js';
import './App.css'

export default function App(){
  const [selectedCategory, setSelectedCategory]= useState(() => {
    return localStorage.getItem('lastFilter') ||'';
});
  const[favoriteIds, setFavoriteIds] = useState(() => { const saved = localStorage.getItem('favorites');
    return saved? JSON.parse(saved):[];
  });
  function handleCategoryChange(event){
    const choice = event.target.value;
    setSelectedCategory(choice);
    localStorage.setItem('lastFilter',choice);
  }
  function handleToggleFavorite(itemId){
    const updated = favoriteIds.includes(itemId)
    ?favoriteIds.filter(id => id !== itemId):[...favoriteIds, itemId];
    setFavoriteIds(updated);
    localStorage.setItem('favorites',JSON.stringify(updated));
  }
  const filteredItems = selectedCategory===''
  ?items
  :items.filter(item => item.catagory === selectedCategory);
  return(
    <>
    <Header />
    <main>
    <label htmlFor="filter">🝖 Sort by category </label>
    <select className="select" id="filter" value={selectedCategory} onChange={handleCategoryChange}>
      <option value=""> All </option>
      <option value="Squalian">Squalian</option>
      <option value="Planet">Planet</option>
    </select>
    <ItemList items = {filteredItems} favoriteIds = {favoriteIds} onToggleFavorite = {handleToggleFavorite}/>
    </main>
    </>
    );
}




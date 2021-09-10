import React, {useState} from 'react'
import "./tab.css";
import Menu from "./menu";
import MenuItems from './MenuItems';
import NavComponents from './NavComponents';
// const catVal= [...new Set(Menu.map((curElem) => {return curElem.category;})), 'all ']

// console.log(catVal);
const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading my-10">Order Your Favourite Dish</h1>
            <hr />
            
           <NavComponents filterItem={filterItem}/>
  
            {/* my main items section  */}
            <MenuItems items={items}/>
           
                                    
                                       
        </>
    )
}

export default GalleryReact
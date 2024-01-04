import React from 'react'
import './Shopping.css'
import { useState } from 'react';

const Shopping = () => {

    const [items, setItems] = useState([]);

    function onSubmit(event) {
        event.preventDefault();
        const form = event.target;
        //console.log(form);
        const input = form.item;
        //console.log(input);
        const newItems = [...items, input.value];
        setItems(newItems);
        console.log(newItems);
        form.reset();    
    } 

    function onRemove(itemToRemove){
        const filteredItems = items.filter((singleItem) => {
            return singleItem !== itemToRemove;
        });

        setItems(filteredItems)
        console.log(filteredItems);
    }



    return (
        <>
            <h1>Shopping List</h1>
            <div className="shopping-list">
                <h2>Items to Buy</h2>
                <form onSubmit={onSubmit} >
                    <input type='text'
                        name='item'
                        placeholder='Add an Item' required />
                    <button>Add</button>

                    <ul>
                        {items.map((item, index) => (
                            <Item item={item} key={index} onRemove={onRemove} />
                        ))}
                    </ul>

                </form>
            </div>
        </>
    )
}

function Item({item, onRemove}) {
    return (
        <li>
            {item}
            <button className="delete" onClick={()=> onRemove(item)} >x</button>
        </li>
    )
}

export default Shopping


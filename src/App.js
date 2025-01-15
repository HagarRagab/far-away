import { useEffect, useState } from "react";
import Form from "./components/Form.js";
import Logo from "./components/Logo.js";
import PackingList from "./components/PackingList.js";
import Stats from "./components/Stats.js";

export default function App() {
    const [items, setItems] = useState(() => {
        if (localStorage.getItem("travel-items"))
            return JSON.parse(localStorage.getItem("travel-items"));
        else return [];
    });

    useEffect(() => {
        localStorage.setItem("travel-items", JSON.stringify(items));
    }, [items]);

    const handleAddItem = (quantity, description) => {
        setItems((prevItems) => [
            ...prevItems,
            {
                id: Math.random() * 1000,
                quantity,
                description,
                packed: false,
            },
        ]);
    };

    const handleToggleItem = (id) => {
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item
            )
        );
    };

    const handleDeleteItem = (id) =>
        setItems((items) => items.filter((item) => item.id !== id));

    const handleClearList = () => setItems([]);

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddItem} />
            <PackingList
                items={items}
                onToggleItem={handleToggleItem}
                onDeleteItem={handleDeleteItem}
                onClearList={handleClearList}
            />
            <Stats items={items} />
        </div>
    );
}

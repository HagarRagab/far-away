import { useState } from "react";
import Actions from "./Actions";
import Item from "./Item";

export default function PackingList({
    items,
    onToggleItem,
    onDeleteItem,
    onClearList,
}) {
    const [sortedBy, setSortedBy] = useState("input");

    let sortedItems;
    if (sortedBy === "input") sortedItems = items;
    if (sortedBy === "description")
        sortedItems = [...items].sort((a, b) =>
            a.description.localeCompare(b.description)
        );
    if (sortedBy === "packed")
        sortedItems = [...items].sort(
            (a, b) => Number(a.packed) - Number(b.packed)
        );

    const handleSorting = (value) => setSortedBy(value);

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        onToggleItem={onToggleItem}
                        onDeleteItem={onDeleteItem}
                    />
                ))}
            </ul>
            <Actions
                sortedBy={sortedBy}
                onSorting={handleSorting}
                onClearList={onClearList}
            />
        </div>
    );
}

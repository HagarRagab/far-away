export default function Item({ item, onToggleItem, onDeleteItem }) {
    return (
        <li>
            <input
                id="label"
                type="checkbox"
                checked={item.packed}
                onChange={() => onToggleItem(item.id)}
            />
            <label
                htmlFor="label"
                style={{
                    textDecoration: item.packed ? "line-through" : "none",
                }}
            >
                {item.quantity} {item.description}
            </label>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}

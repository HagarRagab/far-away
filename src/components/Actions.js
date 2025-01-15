export default function Actions({ sortedBy, onSorting, onClearList }) {
    const handleClick = () => {
        const confirmation = window.confirm(
            "You are almost going to clear this list entirely, Are you sure?"
        );
        console.log(confirmation);
        if (confirmation) onClearList();
        else return;
    };
    return (
        <div className="actions">
            <select
                value={sortedBy}
                onChange={(e) => onSorting(e.target.value)}
            >
                <option value="input">sort by input order</option>
                <option value="description">sort by description</option>
                <option value="packed">sort by packed status</option>
            </select>
            <button onClick={handleClick}>clear list</button>
        </div>
    );
}

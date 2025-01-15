export default function Stats({ items }) {
    if (items.length === 0)
        return (
            <footer className="stats">
                Start adding some items to your packing list 🚀.
            </footer>
        );

    const numItems = items.length;
    const numPackedItems = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPackedItems / numItems) * 100);

    let message;
    if (percentage === 100) message = "You got everything! Ready to go ✈️. ";
    else
        message = `💼 You have ${numItems} item${
            items < 1 ? "" : "s"
        } on your list, and you already packed ${numPackedItems} (${percentage}%).`;

    return <footer className="stats">{message}</footer>;
}

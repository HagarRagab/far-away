import { useRef } from "react";

export default function Form({ onAddItem }) {
    const quantity = useRef();
    const description = useRef();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const quantityValue = quantity.current.value.trim();
        const descriptionValue = description.current.value.trim();

        if (!descriptionValue) return;

        onAddItem(quantityValue, descriptionValue);

        quantity.current.value = 1;
        description.current.value = "";
    };

    return (
        <form className="add-form" onSubmit={handleSubmitForm}>
            <h3>What do you need for your 😍 trip?</h3>
            <select ref={quantity}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input type="text" placeholder="Item..." ref={description} />
            <button>add</button>
        </form>
    );
}

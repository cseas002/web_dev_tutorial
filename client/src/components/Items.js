import React, { useEffect, useState } from 'react';

function Items() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/api/items', {
            method: 'GET',
        })
            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                setItems(responseData);
            })
    });
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Category</th>
            </tr>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Items;
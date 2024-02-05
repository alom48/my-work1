import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Wrapper from './Wrapper'

function ProductCreate() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [details, setDetails] = useState('');
    const [image, setImage] = useState('');

    const categories = ['laptop', 'keyboard', 'mouse'];

    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api/products', {
            method: 'POST',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ title, price, category, details, image })
        }).then(() => history.push('/admin/products'));
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <label>Title</label>
                <input type="text" name="title"
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Price</label>
                <input type="text" name="price"
                    onChange={e => setPrice(e.target.value)}
                />

                <label>Category</label>
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>


                <label>Details</label>
                <input type="text" name="details"
                    onChange={e => setDetails(e.target.value)}
                />
                <label>Image</label>
                <input type="file" name="image"
                    onChange={e => setImage(e.target.value)}

                />
                <button type="submit">Add Product</button>
            </form>
        </Wrapper>
    )
}

export default ProductCreate

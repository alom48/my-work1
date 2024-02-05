import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'


function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const del = (id) => {
        fetch(`http://localhost:4000/api/products/${id}`, {
            method: 'DELETE'
        });

        setProducts(products.filter(p => p._id !== id));

    }
    return (
        <Wrapper>
            <Link to='/admin/products/create' className='btn'>Add Product</Link>
            <table>
                <thead>
                    <tr>
                        <th>#Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => {
                        return (
                            <tr key={p._id}>
                                <td>{p._id}</td>
                                <td>{p.title}</td>
                                <td>{p.price}</td>
                                <td>{p.category}</td>

                                <td><img src={p.image} alt={p.title} width="90" /></td>

                                <td>
                                    <Link to={`/admin/products/${p._id}/edit`} className='btn'>Edit</Link>
                                    <button onClick={() => del(p._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Wrapper>
    )
}

export default Products

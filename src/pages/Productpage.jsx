import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Productpage = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => {
                console.error('Error fetching products:', error);
                setError(error.message);
            });
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
            {error ? (
                <p className="text-center text-red-500">Error: {error}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product.id} className="border p-4 rounded-lg text-center shadow-lg">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-contain rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold">{product.title}</h3>
                                <p className="text-gray-600">${product.price}</p>
                                <div className='flex justify-center gap-3'>
                                    <button className="mt-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                                        Add to Cart
                                    </button>
                                    <Link to={`/product/${product.id}`}>
                                        <button className="mt-2 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                                            View More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Loading products...</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Productpage;

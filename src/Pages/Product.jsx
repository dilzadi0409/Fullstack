
import { useState } from "react";

function Product() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    function addProduct(e) {
        e.preventDefault();

        const newProduct = {
            id: Date.now(),
            name: name,
            price: price,
        };

        setProducts([...products, newProduct]);

        setName("");
        setPrice("");
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow-lg">

                <h1 className="mb-6 text-2xl font-bold text-indigo-600">
                    Add Product
                </h1>

                <form onSubmit={addProduct}>
                    <input
                        className="mb-4 w-full rounded-lg border p-3"
                        type="text"
                        placeholder="Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        className="mb-4 w-full rounded-lg border p-3"
                        type="number"
                        placeholder="Product Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />

                    <button className="w-full rounded-lg bg-indigo-600 p-3 font-bold text-white hover:bg-indigo-700">
                        Add Product
                    </button>
                </form>

                <h2 className="mb-4 mt-8 text-xl font-bold">
                    Product List
                </h2>

                {products.map((product) => (
                    <div
                        key={product.id}
                        className="mb-3 flex justify-between rounded-lg border p-4"
                    >
                        <span>{product.name}</span>
                        <span>Rs. {product.price}</span>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Product;

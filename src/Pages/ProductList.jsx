
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function ProductList() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);

    const addProduct = (e) => {
        e.preventDefault();

        if (!name.trim() || price === "" || Number(price) <= 0) {
            alert("Please enter valid product details");
            return;
        }

        const newProduct = {
            id: Date.now(),
            name: name.trim(),
            price: Number(price),
        };

        setProducts([...products, newProduct]);
        setName("");
        setPrice("");
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    return (
        <div className="mx-auto max-w-3xl space-y-6 p-6">

            <h1 className="text-3xl font-bold">
                Product Management
            </h1>

            <Card>
                <CardHeader>
                    <CardTitle>Add New Product</CardTitle>
                </CardHeader>

                <CardContent>
                    <form onSubmit={addProduct} className="space-y-4">

                        <div className="space-y-2">
                            <Label>Product Name</Label>
                            <Input
                                placeholder="Enter product name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Product Price (Rs.)</Label>
                            <Input
                                type="number"
                                min="0.01"
                                step="0.01"
                                placeholder="Enter price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Add Product
                        </Button>

                    </form>
                </CardContent>
            </Card>

            <h2 className="text-2xl font-semibold">
                Product List ({products.length})
            </h2>

            {products.length === 0 ? (
                <p className="text-muted-foreground">
                    No products added yet.
                </p>
            ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                    {products.map((product) => (
                        <Card key={product.id}>
                            <CardHeader>
                                <CardTitle>{product.name}</CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <p className="text-lg font-medium">
                                    Rs. {product.price.toLocaleString()}
                                </p>

                                {/* <Button
                                    variant="destructive"
                                    onClick={() => deleteProduct(product.id)}
                                >
                                    Delete Product
                                </Button> */}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

        </div>
    );
}

export default ProductList;

import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import { categories, sliderItems } from '@/dummydata';
import Button from "@/components/Button";
import Container from "@/components/Container";
import CategoryList from "@/ui/CategoryList";
import api from '../api';
import { CartContext, UserContext } from "@/App";
import Carousel from '../components/Carousel';
import { popularProducts } from '../dummydata';
import Navbar from './Navbar';

export default function HomePage() {
	const { user } = useContext(UserContext);
	const { cartDispatch } = useContext(CartContext);
	const [products, setProducts] = useState([]);
	const [addedProducts, setAddedProducts] = useState(new Set()); // Track added products

	useEffect(() => {
		(async () => {
			const resp = await api.fetchProducts("", true);
			console.log(resp);
			if (resp.status !== "error") {
				setProducts(resp);
			}
		})();
	}, []);

	const addToCart = async (product, quantity = 1) => {
		if (!addedProducts.has(product.id)) {
			if (user) {
				const resp = await api.addProductsToCart([{ productID: product.id, quantity }]);
				if (resp.status === "ok") {
					cartDispatch({ type: "ADD_PRODUCTS", payload: [{ ...product, quantity }] });
				}
			} else {
				cartDispatch({ type: "ADD_PRODUCTS", payload: [{ ...product, quantity }] });
			}
			// Mark product as added
			setAddedProducts((prev) => new Set(prev).add(product.id));
		}
	};

	return (
		<main>
			<Navbar/>

			

			<Container heading="Best Seller">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{popularProducts.map((product) => (
						<div key={product.id} className="p-4 border rounded-md">
							<img src={product.image} alt={product.name} className="h-40 mx-auto mb-4" />
							<h3 className="text-lg font-semibold">{product.name}</h3>
							<p className="text-gray-500">${product.price}</p>
							<Button
								className={`mt-4 w-full ${
									addedProducts.has(product.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'
								}`}
								onClick={() => addToCart(product)}
								disabled={addedProducts.has(product.id)}
							>
								{addedProducts.has(product.id) ? 'Added' : 'Add to Cart'}
							</Button>
						</div>
					))}
				</div>

				<Link to="/products" className="flex justify-center">
					<Button className="text-lg mt-6" link>
						View More <ChevronRight className="ml-2" />
					</Button>
				</Link>
			</Container>

			
		</main>
	);
}

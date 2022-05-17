import express, { Request, Response } from "express";

import { v4 as uuid } from "uuid";

export const routes = express.Router();

type Product = {
  id: string;
  name: string;
  code: string;
  status: boolean;
  created: string;
}

const products: Product[] = [];

routes.post("/products", (request, response) => {
  const { name, code } = request.body;

  const product = {
    id: uuid(),
    name,
    code,
    status: false,
    created: new Date().toISOString(),
  };

  products.push(product);

  return response.status(201).json({product});
});

routes.get("/products", (request, response) => {
  return response.status(200).json({ products });
});

routes.put("/products/:productId", (request: Request, response: Response) => {
  const { productId } = request.params;

  const { name, code } = request.body;

  const product = products.find(product => product.id === productId);

  if (!product) {
    return response.status(404).json({
      error: "Product not found"
    });
  }

  product.name = name;
  product.code = code;

  return response.status(200).json(product);
});

routes.delete("/products/:productId", (request: Request, response: Response) => {
  const { productId } = request.params;

  const productIndex = products.findIndex(product => product.id === productId);

  if (productIndex === -1) {
    return response.status(404).json({
      error: "Product not found"
    });
  }

  products.splice(productIndex, 1);

  return response.status(200).json({});
});

routes.get("/products/:productId", (request: Request, response: Response) => {
  const { productId } = request.params;

  const product = products.find(product => product.id === productId);

  if (!product) {
    return response.status(404).json({
      error: "Product not found"
    });
  }

  return response.status(200).json(product);
});

routes.patch("/products/:productId/:status", (request: Request, response: Response) => {
  const { productId, status } = request.params;

  const product = products.find(product => product.id === productId);
  
  if (!product) {
    return response.status(404).json({
      error: "Product not found"
    });
  }

  product.status = status === "true" ? true : false;

  return response.status(200).json(product)
})
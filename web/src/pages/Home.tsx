import { useEffect, useState } from "react";
import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Table } from "../components/Table";
import { api } from "../lib/api";

export type Product = {
  id: string;
  name: string;
  code: string;
  status: boolean;
  created: string;
}

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    try {
      const response = await api.get("/products");
      setProducts(response.data.products.reverse());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="max-w-[848px] w-full my-10 px-10 mx-auto flex flex-col gap-10">
      <Header />

      <Form
        getProducts={getProducts}
      />

      <Table
        products={products}
        getProducts={getProducts}
      />
    </div>
  );
}
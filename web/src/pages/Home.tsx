import { FormEvent, useEffect, useState } from "react";
import { Product } from "../components/Product";
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

  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");

  async function getProducts() {
    try {
      const response = await api.get("/products");
      setProducts(response.data.products.reverse());
    } catch (error) {
      console.log(error);
    }
  }

  async function addProduct(event: FormEvent) {
    event.preventDefault();

    if (productName.trim() === "") return;
    if (productCode.trim() === "") return;

    const newProduct = {
      name: productName,
      code: productCode,
    };

    try {
      const response = await api.post("/products", newProduct);
      setProductName("");
      setProductCode("");
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="max-w-[848px] w-full my-10 px-10 mx-auto flex flex-col gap-10">
      <header>
        <h1 className="font-bold text-xl text-center">My tracking codes</h1>
      </header>

      <form onSubmit={addProduct} className="flex items-end gap-5">
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-sm">Nome do produto</label>
          <input
            type="text"
            className="bg-zinc-800 text-sm h-12 rounded px-4 text-slate-300 outline-none text-md"
            value={productName}
            onChange={({ target }) => setProductName(target.value)}
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label className="text-sm">Código de rastreio</label>
          <input
            type="text"
            className="bg-zinc-800 text-sm h-12 rounded px-4 text-slate-300 outline-none text-md"
            value={productCode}
            onChange={({ target }) => setProductCode(target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-sky-500 flex-1 h-12 rounded transition-colors hover:bg-sky-400 text-sm font-medium"
        >Adicionar produto</button>
      </form>

      <table className="table-auto">
        <thead>
          <tr className="h-12">
            <th className="font-medium text-sm w-1/5 text-center"></th>
            <th className="font-medium text-sm w-1/5 text-center">Nome do produto</th>
            <th className="font-medium text-sm w-1/5 text-center">Código de rastreio</th>
            <th className="font-medium text-sm w-1/5 text-center">Status</th>
            <th className="font-medium text-sm w-1/5 text-center"></th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <Product
              key={product.id}
              product={product}
              onHandleProduct={getProducts}
              even={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
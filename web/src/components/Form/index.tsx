import { FormEvent, useState } from "react";
import { Input } from "./Input";
import { SubmitButton } from "./SubmitButton";
import { api } from "../../lib/api"; 

interface Props {
  getProducts: () => Promise<void>;
}

export function Form({ getProducts }: Props) {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");

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

  return (
    <form onSubmit={addProduct} className="flex flex-col gap-5 md:flex-row md:items-end">
      <Input label="Nome do produto" value={productName} onChange={setProductName} />
      <Input label="Código do produto" value={productCode} onChange={setProductCode} />
      <SubmitButton />
    </form>
  );
}
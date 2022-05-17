import { Product } from "../../pages/Home";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";

interface Props {
  product: Product;
  getProducts: () => Promise<void>;
}

export function TableRow({ product, getProducts }: Props) {
  const [status, setStatus] = useState(product.status);

  console.log(product.name + " " + product.status);

  async function removeProduct() {
    try {
      const response = await api.delete(`/products/${product.id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function receiveProduct() {
    try {
      const response = await api.patch(`/products/${product.id}/${status}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    receiveProduct();
  }, [status]);

  return (
    <tr className="bg-gray-800">
      <td className="px-6 py-4">
        <input
          type="checkbox"
          checked={status}
          onChange={() => setStatus(!status)}
        />
      </td>

      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">{product.name}</th>
      <td className="px-6 py-4">{product.code}</td>
      <td className="px-6 py-4">{product.status ? "Recebido" : "Aguardando"}</td>
      <td className="px-6 py-4">
        <button
          type="button"
          onClick={removeProduct}
          className="flex items-center gap-2 transition-colors hover:text-red-400"
        >
          <MdDelete size={18} />
          <span>Remover</span>
        </button>
      </td>
    </tr>
  );
}
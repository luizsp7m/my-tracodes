import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { api } from "../lib/api";
import { Product as ProductType } from "../pages/Home";

interface Props {
  product: ProductType;
  onHandleProduct: () => Promise<void>;
  even: boolean;
}

export function Product({ product, onHandleProduct, even }: Props) {
  const [status, setStatus] = useState(product.status);

  async function removeProduct() {
    try {
      const response = await api.delete(`/products/${product.id}`);
      onHandleProduct();
    } catch (error) {
      console.log(error);
    }
  }

  async function receiveProduct() {
    try {
      const response = await api.patch(`/products/${product.id}/${status}`);
      onHandleProduct();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    receiveProduct();
  }, [status]);

  return (
    <tr className={`h-12 ${even && "bg-zinc-800"}`}>
      <td className="text-center">
        <input
          type="checkbox"
          checked={status}
          onChange={() => setStatus(!status)}
        />
      </td>

      <td className="text-center text-sm">{product.name}</td>
      <td className="text-center text-sm">{product.code}</td>
      <td className="text-center text-sm">{product.status ? "Recebido" : "Aguardando"}</td>

      <td className="text-center text-sm">
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
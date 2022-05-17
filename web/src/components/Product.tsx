import { useEffect, useState } from "react";

import { api } from "../lib/api";
import { Product as ProductType } from "../pages/Home";

interface Props {
  product: ProductType;
  onHandleProduct: () => Promise<void>;
  even: boolean;
}

export function Product({ product, onHandleProduct, even }: Props) {
  

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
      <td className="text-center text-sm"></td>

      <td className="text-center text-sm">
        
      </td>
    </tr>
  );
}
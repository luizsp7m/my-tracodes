import { Product } from "../../pages/Home";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

interface Props {
  products: Product[];
  getProducts: () => Promise<void>;
}

export function Table({ products, getProducts }: Props) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-gray-700">
          <TableHeader />
        </thead>

        <tbody>
          {products.map(product => (
            <TableRow
              product={product}
              getProducts={getProducts}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function TableHeader() {
  return (
    <tr>
      <th scope="col" className="px-6 py-4 whitespace-nowrap">
        <span className="sr-only">Received</span>
      </th>

      <th scope="col" className="px-6 py-4 whitespace-nowrap">Nome do produto</th>
      <th scope="col" className="px-6 py-4 whitespace-nowrap">Código de rastreio</th>
      <th scope="col" className="px-6 py-4 whitespace-nowrap">Status</th>

      <th scope="col" className="px-6 py-4 whitespace-nowrap">
        <span className="sr-only">Operations</span>
      </th>
    </tr>
  );
}
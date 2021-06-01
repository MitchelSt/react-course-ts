interface DataGridProps {
  // Do NOT use any
  items: any[];
}

export default function DataGrid({ items }: DataGridProps) {
  return (
    <>
      {items.map((item) => (
        <p key={item.id}>{JSON.stringify(item)}</p>
      ))}
    </>
  );
}

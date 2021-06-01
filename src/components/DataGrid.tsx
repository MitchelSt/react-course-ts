interface DataGridProps {
  // Do NOT use any
  items: any[];
}

export default function DataGrid({ items }: DataGridProps) {
  return (
    <>
      {items.map((item) => (
        <p>{JSON.stringify(item)}</p>
      ))}
    </>
  );
}

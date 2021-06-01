import DataGrid from "./components/DataGrid";

export default function App() {
  const users = [
    { id: 1, name: "John", age: 55 },
    { id: 2, name: "Mitchel", age: 23 },
    { id: 3, name: "Mike", age: 50 },
  ];

  return (
    <>
      <DataGrid items={users} />
    </>
  );
}

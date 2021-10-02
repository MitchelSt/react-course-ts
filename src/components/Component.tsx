export interface Item {
  id: number;
  title?: string;
  imageUrl?: string;
  quote?: string;
}

interface ComponentProps {
  items: Item[];
}

export default function Component({ items }: ComponentProps) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            {item.title && <p>{item.title}</p>}
            {item.imageUrl && (
              <img
                style={{ maxWidth: "15rem" }}
                src={item.imageUrl}
                alt={item.title}
              />
            )}

            {item.quote && <p style={{ fontStyle: "italic" }}>{item.quote}</p>}
          </li>
        );
      })}
    </ul>
  );
}

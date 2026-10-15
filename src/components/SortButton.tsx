import type { ChangeEvent } from "react";

type SortBy = "year" | "title";
type SortOrder = "ASC" | "DESC";

type SortButtonProps = {
  sortBy: SortBy;
  order: SortOrder;
  onSortChange: (sortBy: SortBy, order: SortOrder) => void;
};

const sortOptions: {
  label: string;
  sort_by: SortBy;
  order: SortOrder;
}[] = [
  { label: "Newest", sort_by: "year", order: "DESC" },
  { label: "Oldest", sort_by: "year", order: "ASC" },
  { label: "Title A-Z", sort_by: "title", order: "ASC" },
  { label: "Title Z-A", sort_by: "title", order: "DESC" },
];

export default function SortButton({
  sortBy,
  order,
  onSortChange,
}: SortButtonProps) {
  const currentIndex = sortOptions.findIndex(
    (opt) => opt.sort_by === sortBy && opt.order === order,
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = sortOptions[Number(e.target.value)];
    onSortChange(selected.sort_by, selected.order);
  };

  return (
    <select
      id="sort-button"
      value={currentIndex}
      onChange={handleChange}
      className="cursor-pointer border border-(--color-primary) bg-white px-4 py-2 text-sm text-(--color-primary) outline-none"
      aria-label="Sort projects"
    >
      {sortOptions.map((opt, index) => (
        <option key={opt.label} value={index}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

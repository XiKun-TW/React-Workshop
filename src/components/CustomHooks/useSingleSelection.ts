import { useState, useEffect } from "react";
import { SelectItem } from "../Select/index";

export const useSingleSelection: (
  defaultItems: SelectItem[]
) => [
  SelectItem[],
  (item: SelectItem) => void,
  (items: SelectItem[]) => void
] = (defaultItems) => {
  const [items, setItems] = useState(defaultItems);
  const [selectedItem, setItemSelection] = useState({} as SelectItem);

  useEffect(() => {
    const updatedItem = items.map((item) => {
      return {
        ...item,
        isSelected: selectedItem.value === item.value,
      };
    });
    if (JSON.stringify(updatedItem) !== JSON.stringify(items)) {
      setItems(updatedItem);
    }
  }, [selectedItem, items]);

  return [items, setItemSelection, setItems];
};

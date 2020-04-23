import { SelectItem } from "../Select";
import { useState, useEffect } from "react";

export const useMultipleSelections: (
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
      if (item.value === selectedItem.value) {
        return {
          ...item,
          isSelected: !selectedItem.isSelected,
        };
      }
      return { ...item };
    });
    if (JSON.stringify(updatedItem) !== JSON.stringify(items)) {
      setItems(updatedItem);
    }
  }, [selectedItem, items]);

  return [items, setItemSelection, setItems];
};

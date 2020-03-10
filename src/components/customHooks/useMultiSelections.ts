import { useState, useEffect } from "react";
import { SelectItem } from "../select/index";

export const useMultiSelections: (
  defaultItems: SelectItem[]
) => [
  SelectItem[],
  (item: SelectItem) => void,
  (items: SelectItem[]) => void
] = defaultItems => {
  const [items, setItems] = useState(defaultItems);
  const [selectedItem, setItemSelection] = useState({} as SelectItem);

  useEffect(() => {
    const updatedItem = items.map(skillItem => {
      if (skillItem.id === selectedItem.id) {
        return { ...skillItem, isSelected: !selectedItem.isSelected };
      }
      return { ...skillItem };
    });
    if (JSON.stringify(updatedItem) !== JSON.stringify(items)) {
      setItems(updatedItem);
    }
  }, [selectedItem, items]);

  return [items, setItemSelection, setItems];
};

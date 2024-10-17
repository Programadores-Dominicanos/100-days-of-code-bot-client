import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
  AutocompleteItemProps,
} from "@nextui-org/react";

export type TAutocompleteItems = {
  label: string;
  value: string | number;
  id?: string | number;
};
type TAutocompleteProps = Omit<AutocompleteProps, "children"> & {
  items: TAutocompleteItems[];
  itemProps?: Omit<AutocompleteItemProps, "children">;
};

const AutocompleteComponent = (props: TAutocompleteProps) => {
  const config: TAutocompleteProps = {
    ...props,
  };

  return (
    <Autocomplete {...config}>
      {props.items.map((item) => (
        <AutocompleteItem
          {...props.itemProps}
          key={item.value}
          value={item.value}
        >
          {item.label}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};

export default AutocompleteComponent;

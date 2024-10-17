import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
  AutocompleteItemProps,
} from "@nextui-org/react";

export interface IAutocompleteItems {
  label: string;
  value: string | number;
  id?: string | number;
}

interface IAutocompleteProps extends Omit<AutocompleteProps, "children"> {
  items: IAutocompleteItems[];
  itemProps?: Omit<AutocompleteItemProps, "children">;
}

const AutocompleteComponent = (props: IAutocompleteProps): JSX.Element => {
  return (
    <Autocomplete {...props}>
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

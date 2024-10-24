import AutocompleteComponent from "@/shared/components/autocomplete/Autocomplete";
import PreviewComponents from "@/shared/components/preview-components/PreviewComponents";
import Text from "@/shared/components/text/Text";

const Components = () => {
  return (
    <div className="px-10 py-3">
      <div>
        <Text variant="h1">Aplication components</Text>
        <div className="mt-5">
          <Text variant="h2">Text</Text>
          <Text>Text component will be used in all application typography</Text>
          <Text variant="h1">H1</Text>
          <Text variant="h2">H2</Text>
          <Text variant="h3">H3</Text>
          <Text variant="h4">H4</Text>
          <Text variant="h5">H5</Text>
          <Text variant="p">p</Text>
          <Text variant="span">span</Text>
        </div>
      </div>

      <PreviewComponents
        title="Autocomplete"
        subtitle=" This is the Autocomplete, it has a required prop, that it type is an
          array"
        code={`
    [{
      label: item1,
      value: 1, // can be string or number,
      id?: 2, // can be string or number and is optional
    }]
  `}
        componentsDistribition="grid"
        exampleComponent={
          <>
            <AutocompleteComponent
              placeholder="Normal"
              items={[{ label: "Item 1", value: 3 }]}
            />
            <AutocompleteComponent
              placeholder="Bordered"
              variant="bordered"
              items={[{ label: "Item 1", value: 3 }]}
            />

            <AutocompleteComponent
              placeholder="Faded"
              variant="faded"
              items={[{ label: "Item 1", value: 3 }]}
            />
            <AutocompleteComponent
              placeholder="Flat"
              variant="flat"
              items={[{ label: "Item 1", value: 3 }]}
            />
            <AutocompleteComponent
              placeholder="Underlined"
              variant="underlined"
              items={[{ label: "Item 1", value: 3 }]}
            />
          </>
        }
      />
    </div>
  );
};

export default Components;

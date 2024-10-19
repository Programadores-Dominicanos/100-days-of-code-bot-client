import AutocompleteComponent from "@/shared/components/autocomplete/Autocomplete";
import { Button } from "@/shared/components/button/Button";
import PreviewComponents from "@/shared/components/preview-components/PreviewComponents";
import TextField from "@/shared/components/text-field/TextField";
import Text from "@/shared/components/text/Text";

const Components = () => {
  return (
    <div className="px-10 py-3">
      <Text variant="h1">Aplication components</Text>

      <PreviewComponents
        title="Text"
        subtitle="Text component will be used in all application typography"
        exampleComponent={
          <>
            <Text variant="h1">H1</Text>
            <Text variant="h2">H2</Text>
            <Text variant="h3">H3</Text>
            <Text variant="h4">H4</Text>
            <Text variant="h5">H5</Text>
            <Text variant="p">p</Text>
            <Text variant="span">span</Text>
          </>
        }
        code={`
        <Text variant="h1" className="font-semibold">
            Hello word
        </Text>
    `}
      />
      <PreviewComponents
        title="Button"
        subtitle="These are example buttons, themes are not complete yet"
        exampleComponent={
          <>
            <Button color="primary" size="lg">
              Primary Large
            </Button>
            <Button color="secondary" size="md">
              Secondary Medium
            </Button>
            <Button color="success" size="sm">
              Success Small
            </Button>
            <Button color="warning" size="lg" variant="bordered">
              Warning Bordered
            </Button>
            <Button color="danger" size="md" variant="flat">
              Danger Flat
            </Button>
          </>
        }
      />

      <PreviewComponents
        title="Input/TextField"
        subtitle="These are example Inputs"
        exampleComponent={
          <>
            <TextField placeholder="Normal" />
            <TextField placeholder="Bordered" variant="bordered" />
            <TextField placeholder="Faded" variant="faded" />
            <TextField placeholder="Flat" variant="flat" />
            <TextField placeholder="Underlined" variant="underlined" />
          </>
        }
        componentsDistribition="grid"
      />

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

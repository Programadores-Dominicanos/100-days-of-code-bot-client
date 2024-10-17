import AutocompleteComponent from "@/shared/components/autocomplete/Autocomplete";
import { Button } from "@/shared/components/button/Button";
import TextField from "@/shared/components/text-field/TextField";
import Text from "@/shared/components/text/Text";
import { Code } from "@nextui-org/react";

const Components = () => {
  const textExampleCode = `
        <Text variant="h1" className="font-semibold">
            Hello word
        </Text>
    `;

  const autocompleteCode = `
    [{
      label: item1,
      value: 1, // can be string or number,
      id?: 2, // can be string or number and is optional
    }]
  `;

  return (
    <div className="px-10 py-3">
      <div>
        <Text variant="h1">Aplication components</Text>
        <div className="mt-5">
          <Text variant="h2">Text</Text>
          <Text>Text component will be used in all application typography</Text>
          <Code title="example use">{textExampleCode}</Code>
          <Text variant="h1">H1</Text>
          <Text variant="h2">H2</Text>
          <Text variant="h3">H3</Text>
          <Text variant="h4">H4</Text>
          <Text variant="h5">H5</Text>
          <Text variant="p">p</Text>
          <Text variant="span">span</Text>
        </div>
      </div>

      <div className="mt-10">
        <Text variant="h1">Button</Text>
        <Text>These are example buttons, themes are not complete yet</Text>
        <div className="flex flex-wrap gap-4">
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
        </div>
      </div>

      <div className="mt-10"></div>
      <Text variant="h1">Input/TextField</Text>
      <Text>These are example Inputs</Text>
      <div className="grid grid-cols-4 gap-5">
        <TextField placeholder="Normal" />
        <TextField placeholder="Bordered" variant="bordered" />
        <TextField placeholder="Faded" variant="faded" />
        <TextField placeholder="Flat" variant="flat" />
        <TextField placeholder="Underlined" variant="underlined" />
      </div>

      <div className="mt-10 flex flex-col gap-3 ">
        <Text variant="h1">Autocomplete</Text>
        <Text>
          This is the Autocomplete, it has a required prop, that it type is an
          array{" "}
        </Text>
        <Code title="Example use">{autocompleteCode}</Code>
        <div className="grid grid-cols-4 gap-5">
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
        </div>
      </div>
    </div>
  );
};

export default Components;

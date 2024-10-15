import { Button } from "@/shared/components/button/Button";
import Text from "@/shared/components/text/Text";
import { Code } from "@nextui-org/react";

const Components = () => {
  const textExampleCode = `
        <Text variant="h1" className="font-semibold">
            Hello word
        </Text>
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
    </div>
  );
};

export default Components;

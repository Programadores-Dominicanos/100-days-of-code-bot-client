import Text from "@/shared/components/text/Text";
import { Code } from "@nextui-org/react";
interface IPreviewComponentsProps {
  title: string;
  subtitle?: string;
  exampleComponent?: React.ReactNode;
  code?: string;
  componentsDistribition?: "flex" | "grid";
}

const PreviewComponents = (props: IPreviewComponentsProps) => {
  const { componentsDistribition = "flex" } = props;

  return (
    <div>
      <div className="mt-5">
        <Text variant="h2">{props.title}</Text>
        <Text>{props.subtitle}</Text>
        <Code title="example use">{props.code}</Code>
        <div
          className={
            componentsDistribition === "flex"
              ? "flex flex-wrap gap-4"
              : "grid grid-cols-4 gap-5"
          }
        >
          {props.exampleComponent}
        </div>
      </div>
    </div>
  );
};
export default PreviewComponents;

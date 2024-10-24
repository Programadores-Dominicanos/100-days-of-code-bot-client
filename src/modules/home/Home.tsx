import { Button } from "@/shared/components/button/Button";
import Text from "@/shared/components/text/Text";
import { Divider } from "@nextui-org/react";
import MotiveList from "./components/MotiveList";

const Home = () => {
  return (
    <div className="px-10 py-3">
      <div className="text-center">
        <Text variant="h1" className="my-5">
          Bot de Programadores Dominicanos
        </Text>
        <Text variant="h4">
          Este bot es una herramienta que te permite interactuar con el bot de
          programadores dominicanos.
        </Text>
      </div>

      <div className="flex justify-center items-center my-10 gap-5">
        <Button color="primary">Agregar Bot</Button>

        <Button color="primary">Administrar servidores</Button>
      </div>

      <Divider orientation="horizontal" className="my-20 bg-white" />

      <MotiveList />
    </div>
  );
};

export default Home;

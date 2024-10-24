import Text from "@/shared/components/text/Text";

const MotiveList = () => (
  <div className="text-center">
    <Text variant="h2">¿Motivo de la creación de este bot?</Text>
    <ul className="mt-4 space-y-3 text-left list-none" role="list">
      <li>
        <Text variant="span">1. Esta aplicación hace esto y lo otro</Text>
      </li>
      <li>
        <Text variant="span">
          2. Creado con el motivo de esto y lo otro, pero trae más cosas por
          agregar
        </Text>
      </li>
      <li>
        <Text variant="span">
          3. El motivo de desarrollo para que así se más fácil hacer X o Y cosa,
          por eso tiene estas funcionalidades.
        </Text>
      </li>
    </ul>
  </div>
);

export default MotiveList;

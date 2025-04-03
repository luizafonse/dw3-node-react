import Child from "./Child";

const Parent = () => {
  return (
    <>
      <div>
        <p>Este é o pai</p>
        {/* Chamando o componente filho */}
        <Child />
      </div>
    </>
  );
};
export default Parent;

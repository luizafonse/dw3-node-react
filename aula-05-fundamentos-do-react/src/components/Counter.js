import { useState } from "react";

const Counter = () => {
  //   let x = 0;
  //   console.log(x);

  //Criando o estado para o contador
  // [count - consultar o valor, setCount - função para alterar o estado]
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <p>Contador: {x}</p> */}
        <p>Contador: {count}</p>
        {/* <button onClick={() => (x = x + 1)}>Aumentar</button> */}
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
      </div>
    </>
  );
};
export default Counter;

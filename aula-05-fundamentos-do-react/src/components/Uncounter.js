import { useState } from "react";

const Uncounter = () => {

  const [count, setCounti] = useState(0);

  return (
    <>
      <div>
        <p>Contador: {count}</p>
        <button onClick={() => setCounti(count + 1)}>Aumentar</button>
        <button onClick={() => setCounti(count - 1)}>Dimunuir</button>
        <button onClick={() => setCounti(0)}>Zerar</button>
      </div>
    </>
  );
};
export default Uncounter;

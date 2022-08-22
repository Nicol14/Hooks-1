const contador = () => {
  const [cuenta, setCuenta] = useState(0);

  const aumentar = () => {
    setCuenta(cuenta + 1);
  };

  const disminuir = () => {
    setCuenta(cuenta - 1);
  };

  const reset = () => {};

  useEffect(() => {
    console.log(`el contador va en ${cuenta}`);
  }),
    [];

  return (
    <div>
      <center>
        <h1>{cuenta}</h1>
        <button onClick={aumentar}>aumentar</button>
        <button>disminuir</button>
        <button>reset</button>
      </center>
    </div>
  );
};

export default contador;

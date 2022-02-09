export default function App() {
  const carros = [
    { category: "Esporte", value: "110000.00", model: "Golf GTI" },
    { category: "Esporte", value: "120000.00", model: "Camaro" },
    { category: "SUV", value: "85000.00", model: "HRV" },
    { category: "SUV", value: "85000.00", model: "T-Cross" },
    { category: "Utilitario", value: "120000.00", model: "Hillux" },
    { category: "Utilitario", value: "90000.00", model: "Ranger" },
  ];

  const listaCarros = carros.map((c, i) => (
    <li key={i}>
      {i} - {c.category} {c.model} - R${c.value}
    </li>
  ));

  return (
    <>
      <ul>{listaCarros}</ul>
    </>
  );
}

const commitments = ['Acordar', 'Tomar Café', 'Escovar os Dentes', 'Revisar Matéria', 'Almoçar']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    commitments.map((element) => Task(element))
  );
}

export default App;

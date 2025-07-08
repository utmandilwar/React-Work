/* First code : hello world message*/
function Greeting({ name }) {
  return <h1>Hello , {name}</h1>;
}

export default function App() {
  return <Greeting name="Utkarsh" />;
}

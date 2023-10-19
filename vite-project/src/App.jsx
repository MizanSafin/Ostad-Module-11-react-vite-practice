import PropsConcept from "./components/PropsConcept";
import "../src/assets/css/index.css";
const persons = [
  {
    name: "Mizan",
    age: 29,
    sex: "male",
  },
  {
    name: "Sahanaj",
    age: 25,
    sex: "Female",
  },
  {
    name: "Safin",
    age: 2,
    sex: "male",
  },
];
function App() {
  return (
    <>
      {/* <TernaryExp />
      <ConditionalRendering />
      <MapExp /> */}
      <PropsConcept persons={persons} />
    </>
  );
}

export default App;

import PropsConcept from "./components/PropsConcept";

function App() {
  let date = new Date();
  return (
    <>
      {/* <TernaryExp />
      <ConditionalRendering />
      <MapExp /> */}
      <PropsConcept data={date.getUTCFullYear()} />
    </>
  );
}

export default App;

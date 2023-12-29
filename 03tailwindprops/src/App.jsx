import Card from "./components/Card";

function App() {
  let obj = {
    name: "Ninad",
    age: 23,
  };

  let newArr = [1, 2, 3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card userName="Ninad" btnText="click me" />
      <Card userName="React" btnText="visit me" />
    </>
  );
}

export default App;

import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import User from "./components/state/User";
import Counter from "./components/state/Counter";

function App() {
  const personName = {
    first: "Samarjit",
    last: "Singh",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wyane",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name="samar" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Oscar>
        <Heading>Oscar goes to Samarjit Singh</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <User />
      <Counter />
    </div>
  );
}

export default App;

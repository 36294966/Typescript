import { useState } from "react";
import Counter from "./Components/Counter";
import Heading from "./Components/Heading";
import List from "./Components/List";
import { Section } from "./Components/Section";

function App() {
  const [Count, setCount] = useState<number>(1);

  return (
    <>
      <Heading title="Hello" />
      <Section title="Different Title">This is my Section.</Section>
      <Counter setCount={setCount}>Count is {Count}</Counter>
      <List
        items={["Coffee", "Tacos", "Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;

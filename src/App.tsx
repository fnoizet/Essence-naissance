import "./styles.css";
import Layout from "./components/Layout/Layout";
import DateInput from "./components/DateInput/DateInput";
import { useState } from "react";

export default function App() {
  const [birthDate, setBirthDate] = useState<string | null>(null);

  function updateBirthDate(value: string | null) {
    setBirthDate(value);
  }

  return (
    <div className="App">
      <h1>Essence en naissance</h1>
      <DateInput onUpdate={updateBirthDate} />
      {typeof birthDate === "string" ? (
        <Layout date={birthDate} />
      ) : (
        <>Sélectionnez une date</>
      )}
    </div>
  );
}

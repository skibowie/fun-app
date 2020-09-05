import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { saveUserKcal } from "store/actions";

export const Calculator = () => {
  const [result, setResult] = useState("");
  const [sex, setSex] = useState("");
  const [kilos, setKilos] = useState("");
  const [centimeters, setCentimeters] = useState("");
  const [age, setAge] = useState("");
  const [activity, setActivity] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const menNumber = 5;
  const womanNumber = -162;

  const handleCalories = (e) => {
    e.preventDefault();

    if (
      kilos.length < 2 ||
      !kilos ||
      centimeters.length < 3 ||
      !centimeters ||
      age < 2
    ) {
      setError("Wprowadź wszystkie niezbędne dane!");
      setResult("");
    } else {
      const number = sex === "male" ? menNumber : womanNumber;
      setResult(
        parseInt(
          (9.99 * kilos + (6.25 * centimeters - 4.92 * age + number)) * activity
        )
      );
    }
    // setKilos('');
    // setCentimeters('');
    // setAge('');
  };

  const saveData = () => {
    dispatch(saveUserKcal(result));
  };

  return (
    <>
      <form className="form-calculator">
        <h1>Oblicz,ile kalorii potrzebujesz każdego dnia!</h1>
        Jestem:
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="female">Kobietą</option>
          <option value="male">Mężczyzną</option>
        </select>{" "}
        <br />
        <label>
          Twoja waga:
          <input
            type="number"
            name="kilos"
            value={kilos}
            onChange={(e) => setKilos(e.target.value)}
            // className={`${}`}
          />
          kg
        </label>{" "}
        <br />
        <label>
          Twój wzrost
          <input
            type="number"
            name="centimeters"
            value={centimeters}
            onChange={(e) => setCentimeters(e.target.value)}
          />
          cm
        </label>{" "}
        <br />
        <label>
          Twój wiek
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          lat
        </label>{" "}
        <br />
        Stopień Twojej aktywności fizycznej:
        <select value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value={1.2}>Brak</option>
          <option value={1.4}>Niska</option>
          <option value={1.6}>Średnia</option>
          <option value={1.8}>Wysoka</option>
          <option value={2.2}>Bardzo wysoka</option>
        </select>{" "}
        <br />
        <button onClick={handleCalories}>Oblicz</button>
        <p>
          Twoje całkowite zapotrzebowanie kaloryczne wynosi
          <strong>{result}</strong>
        </p>
        <p>{error}</p>
      </form>

      {result && (
        <div className="calculator-button-wrapper">
          <button className="save-button" onClick={saveData}>
            Zapisz
          </button>
        </div>
      )}
    </>
  );
};

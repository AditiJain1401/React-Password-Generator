import React, {useState} from 'react';
import CreatePassword from './Components/CreatePassword';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './Components/Character';
import './App.css';

function App() {
  const [password, setPassword]= useState("");
  const [passwordLength, setPasswordLength]= useState(0);
  const [includeNumbers, setIncludeNumbers]= useState(false);
  const [includeUpperCase, setIncludeUpperCase]= useState(false);
  const [includeLowerCase, setIncludeLowerCase]= useState(false);
  const [includeSymbols, setIncludeSymbols]= useState(false);

  function handleClick(){
    let characterList = ""
    if (includeNumbers) {
      characterList = characterList + numbers
    }
    if (includeUpperCase) {
      characterList = characterList + upperCaseLetters
    }
    if (includeLowerCase) {
      characterList = characterList + lowerCaseLetters
    }
    if (includeSymbols) {
      characterList = characterList + specialCharacters
    }
    setPassword(CreatePassword(characterList, passwordLength));
  }
  return (
    <div className="container">
      <header>
        <h1>🔒 Password Generator 🔒</h1>
        <p>Create your strong and unique password using this application</p>
      </header>

      <div className="form">
        <h3>Select from the options below to strengthen your security</h3>
        <div className="form-group">
            <label htmlFor="password-strength">Password length</label>
            <input defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} type="number"  max="26" min="8" />
            <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
            <input checked={includeUpperCase} onChange={(e) => setIncludeUpperCase(e.target.checked)} type="checkbox" name="uppercase-letters" />
            <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
            <input checked={includeLowerCase} onChange={(e) => setIncludeLowerCase(e.target.checked)} type="checkbox" name="lowercase-letters" />
            <label htmlFor="include-numbers">Include Numbers</label>
            <input checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} type="checkbox"  name="include-numbers" />
            <label htmlFor="include-symbols">Include Symbols</label>
            <input checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} type="checkbox" name="include-symbols" />
        </div>
        <button onClick={()=>handleClick()}>Generate Password</button>
      </div>
      {password.length>0 ? <div className="password">
        <h3>{password}</h3>
        <button className="copy__btn" onClick={()=>copyPassword()}> Copy</button>
        </div> 
        : ""}
    </div>
  );
}
export default App;

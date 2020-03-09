import React from "react";
import "./App.css";

function App() {
  const handleFormSubmit : (e : React.FormEvent<HTMLFormElement>) => void = e => {
    if(e.target) {
      // @ts-ignore
      const firstName = e.target['first-name'].value;
      // @ts-ignore
      const lastName = e.target['last-name'].value;

      alert(`User Name: ${firstName} ${lastName}`);
    }
    e.preventDefault();
  }
  
  return (
    <div className="app">
      <header className="app-header">Kun Xi's React Demo</header>
      <main className="app-body">
        <h2 className="body-title">Personal Info</h2>
        <form className="input-form" onSubmit={handleFormSubmit}>
          <label className="input-label" htmlFor="first-name">First Name:</label>
          <input className="text-input" id="first-name" />
          <label className="input-label" htmlFor="last-name">Last Name:</label>
          <input className="text-input" id="last-name" />
          <button className="primary-button">submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;

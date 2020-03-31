import React, { Component } from "react";
import "./App.css";
import InputField from "./components/InputField";

type AppState = {
  firstName: string;
  lastName: string;
};

type AppProps = {};

class App extends Component<AppProps, AppState> {
  state = {
    firstName: "",
    lastName: ""
  };

  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void = e => {
    if (e.target) {
      const { firstName, lastName } = this.state;
      alert(`User Name: ${firstName} ${lastName}`);
    }

    e.preventDefault();
  };

  handleNameChange: (
    inputName: "firstName" | "lastName",
    event: React.ChangeEvent<HTMLInputElement>
  ) => void = (inputName, event) => {
    this.setState({ [inputName]: event.currentTarget.value } as AppState);
  };

  render() {
    return (
      <div className="app">
        <header className="app-header">Kun Xi's React Demo</header>
        <main className="app-body">
          <h2 className="body-title">Personal Info</h2>
          <form className="input-form" onSubmit={this.handleFormSubmit}>
            <InputField
              labelName="First Name:"
              name="firstName"
              id="first-name"
              value={this.state.firstName}
              onChange={e => {
                this.handleNameChange("firstName", e);
              }}
            />
            <InputField
              labelName="Last Name:"
              name="lastName"
              id="last-name"
              value={this.state.lastName}
              onChange={e => {
                this.handleNameChange("lastName", e);
              }}
            />
            <button className="primary-button">submit</button>
          </form>
        </main>
      </div>
    );
  }
}

export default App;

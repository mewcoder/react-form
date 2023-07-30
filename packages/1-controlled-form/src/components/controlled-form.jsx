import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.name);
  };

  const handleSubmit = (event) => {
    alert("A name was submitted: " + name);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <input type="submit" name="Submit" />
    </form>
  );
}

// class component
class ControlledFormClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.name });
  };

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.name);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" name="Submit" />
      </form>
    );
  }
}

export default ControlledForm;

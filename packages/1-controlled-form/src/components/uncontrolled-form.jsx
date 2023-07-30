import React, { useRef } from "react";

function UncontrolledForm() {
  const input = useRef();

  const handleSubmit = (event) => {
    alert("A name was submitted: " + input.current.value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

class UnControlledFormClass extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleSubmit = (e) => {
    alert("A name was submitted: " + this.input.current.value);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default UncontrolledForm;

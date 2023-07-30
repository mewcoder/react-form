import React from "react";

export default function createForm(Component) {
  return class Form extends React.Component {
    state = {};
    options = {};

    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };

    // HOC
    getFieldDecorator = (field, option) => (InputCmp) => {
      this.options[field] = option;
      return React.cloneElement(InputCmp, {
        name: field,
        value: this.state[field] || "",
        onChange: this.handleChange,
      });
    };

    setFieldsValue = (newStore) => {
      this.setState(newStore);
    };

    getFieldsValue = () => {
      return { ...this.state };
    };

    validateFields = (callback) => {
      const err = [];

      // 校验
      for (const field in this.options) {
        const rules = this.options[field].rules;

        if (this.state[field] === undefined) {
          err.push({ [field]: "error" });
        }

        rules.forEach((rule) => {
          if (rule.required && this.state[field] === "") {
            err.push({ [field]: rule.message });
          }
        });
      }

      if (err.length === 0) {
        callback(null, this.state);
      } else {
        callback(err, this.state);
      }
    };

    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue,
          validateFields: this.validateFields,
        },
      };
    };
    render() {
      return <Component {...this.props} {...this.getForm()} />;
    }
  };
}

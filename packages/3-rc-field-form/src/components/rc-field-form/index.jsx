import React from "react";
import form from "./form";
import Field from "./field";
import useForm from "./use-form";

const Form = React.forwardRef(form);

Form.Field = Field;
Form.useForm = useForm;

export { Field, useForm };
export default Form;

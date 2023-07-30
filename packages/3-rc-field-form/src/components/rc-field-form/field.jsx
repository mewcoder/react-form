import { cloneElement, useContext, useReducer, useLayoutEffect } from "react";
import FieldContext from "./field-context";

export default function Field(props) {
  const { children, name } = props;

  const { getFieldValue, setFieldsValue, registerFieldEntities } =
    useContext(FieldContext);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  // 立即订阅
  useLayoutEffect(() => {
    const unregister = registerFieldEntities({
      props,
      onStoreChange: forceUpdate,
    });
    return unregister;
  }, []);

  const getControlled = () => {
    return {
      value: getFieldValue(name) || "", // get state
      onChange: (e) => {
        const newValue = e.target.value;
        setFieldsValue({ [name]: newValue }); // set state
      },
    };
  };

  const returnChildNode = cloneElement(children, getControlled());
  return returnChildNode;
}

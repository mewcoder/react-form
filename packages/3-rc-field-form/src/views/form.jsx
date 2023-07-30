import React, { useEffect } from "react";
import Form, { Field } from "../components/rc-field-form/index";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default function RCFieldForm(props) {
  const [form] = Form.useForm();

  const onFinish = (val) => {
    console.log("onFinish", val);
  };

  // 表单校验失败执行
  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val);
  };

  useEffect(() => {
    form.setFieldsValue({ username: "test" });
  }, []);

  return (
    <div>
      <h3>RCFieldForm</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field name="username" rules={[nameRules]}>
          <input placeholder="input UR Username" />
        </Field>
        <Field name="password" rules={[passworRules]}>
          <input placeholder="input UR Password" />
        </Field>
        <button>Submit</button>
      </Form>
    </div>
  );
}

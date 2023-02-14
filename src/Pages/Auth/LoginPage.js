import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => {
              localStorage.setItem("credentials", "value");
              navigate("/dashboard");
            }}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
      {/* <Button
                onClick={() => {
                    localStorage.setItem("credentials", "value");
                    navigate("/dashboard");
                }}
            >
                L O G I N
            </Button> */}
    </div>
  );
};

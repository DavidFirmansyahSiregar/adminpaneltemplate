import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, } from "antd";
import { LoginPage } from "./LoginPage";

export const RegistrationPage = () => {
    const navigate = useNavigate();
    return (
        <div>

            <Button
                onClick={() => {
                    localStorage.setItem("credentials", "value");
                    navigate("/login");
                }}
            >
                L O G I N
            </Button>
        </div>
    );
};
import { useEffect, useState } from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { loginRequest } from "../redux/actions/authActions";

import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import {
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";

import { FaHospital } from "react-icons/fa6";


const LoginSchema = Yup.object().shape({

    email: Yup.string()
        .required("Email is required"),

    password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),

});



function Login() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [showPassword, setShowPassword] =
        useState(false);

    const { loading, user, error } =
        useSelector((state) => state.auth);



    const handleLogin = (values) => {

        dispatch(loginRequest(values));

    };



    useEffect(() => {

        if (user) {

            navigate("/dashboard");

        }

    }, [user, navigate]);



    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 flex items-center justify-center p-6">

            <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">

                {/* LEFT SIDE */}

                <div className="bg-gradient-to-br from-cyan-500 to-blue-700 text-white p-10 flex flex-col justify-center">

                    <FaHospital className="text-7xl mb-6" />

                    <h1 className="text-5xl font-bold mb-5">
                        AI Healthcare
                    </h1>

                    <p className="text-lg leading-8 text-cyan-100">

                        AI Healthcare is a secure healthcare
                        ecosystem that helps improve patient
                        care and healthcare outcomes.

                    </p>

                </div>



                {/* RIGHT SIDE */}

                <div className="p-10 flex flex-col justify-center">

                    <h2 className="text-5xl font-bold text-slate-800 mb-3">

                        Welcome Back

                    </h2>

                    <p className="text-gray-500 mb-8">

                        Login to continue your healthcare journey

                    </p>



                    <Formik

                        initialValues={{
                            email: "",
                            password: "",
                        }}



                        onSubmit={handleLogin}

                    >

                        {({
                            values,
                        }) => (

                            <Form className="space-y-6">

                                {/* EMAIL FIELD */}

                                <Field name="email">

                                    {({ field, meta, form }) => (

                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Email"
                                            variant="outlined"
                                            onChange={(e) => {
                                                form.setFieldValue("email", e.target.value);
                                            }}
                                            error={
                                                meta.touched && Boolean(meta.error)
                                            }
                                            helperText={
                                                meta.touched ? meta.error : ""
                                            }
                                        />

                                    )}

                                </Field>



                                {/* PASSWORD FIELD */}

                                <Field name="password">

                                    {({
                                        field,
                                        meta,
                                    }) => (

                                        <TextField
                                            {...field}
                                            fullWidth
                                            label="Password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            variant="outlined"
                                            error={
                                                meta.touched &&
                                                Boolean(meta.error)
                                            }
                                            helperText={
                                                meta.touched &&
                                                meta.error
                                            }
                                            InputProps={{

                                                endAdornment: (

                                                    <InputAdornment position="end">

                                                        <IconButton
                                                            onClick={() =>
                                                                setShowPassword(
                                                                    !showPassword
                                                                )
                                                            }
                                                            edge="end"
                                                        >

                                                            {showPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}

                                                        </IconButton>

                                                    </InputAdornment>

                                                ),

                                            }}
                                        />

                                    )}

                                </Field>



                                {/* REMEMBER + FORGOT */}

                                <div className="flex justify-between items-center">

                                    <div className="flex items-center gap-2">

                                        <input type="checkbox" />

                                        <p className="text-sm text-gray-600">

                                            Remember Me

                                        </p>

                                    </div>

                                    <button
                                        type="button"
                                        className="text-sm text-cyan-600 hover:text-cyan-800"
                                    >

                                        Forgot Password?

                                    </button>

                                </div>



                                {/* ERROR */}

                                {error && (

                                    <p className="text-red-500 text-sm">

                                        {error}

                                    </p>

                                )}



                                {/* BUTTON */}

                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    disabled={
                                        loading ||
                                        !values.email ||
                                        !values.password
                                    }
                                    sx={{
                                        paddingY: 1.5,
                                        borderRadius: "14px",
                                        background:
                                            "linear-gradient(to right, #06b6d4, #2563eb)",
                                    }}
                                >

                                    {loading ? (
                                        <CircularProgress
                                            size={24}
                                            color="inherit"
                                        />
                                    ) : (
                                        "LOGIN"
                                    )}
                                </Button>

                            </Form>

                        )}

                    </Formik>

                </div>

            </div>

        </div>

    );

}

export default Login;
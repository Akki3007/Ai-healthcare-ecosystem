import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaHospital } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Enter valid email")
        .required("Email is required"),

    password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password is required"),
});

function Login() {

    const navigate = useNavigate();

    const handleLogin = (values) => {

        console.log(values);

        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 flex items-center justify-center p-6">

            <div className="w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl">

                {/* Left Side */}
                <div className="bg-gradient-to-br from-cyan-500 to-blue-700 text-white p-10 flex flex-col justify-center">

                    <FaHospital className="text-7xl mb-6 text-white" />

                    <h1 className="text-5xl font-bold mb-5 leading-tight">
                        AI Healthcare
                    </h1>

                    <p className="text-lg text-cyan-100 leading-8">
                        AI Healthcare is a secure healthcare ecosystem that helps improve
                        patient care and healthcare outcomes.
                    </p>

                </div>

                {/* Right Side */}
                <div className="bg-white p-10 flex flex-col justify-center">

                    <h2 className="text-4xl font-bold text-slate-800 mb-3">
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
                        validationSchema={LoginSchema}
                        onSubmit={handleLogin}
                    >
                        <Form className="space-y-6">

                            {/* Email Field */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">
                                    Email
                                </label>

                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                                />

                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="block mb-2 font-semibold text-gray-700">
                                    Password
                                </label>

                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                                />

                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            {/* Forgot Password */}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="text-sm text-cyan-600 hover:text-cyan-800 transition duration-300"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
                            >
                                Login
                            </button>

                        </Form>
                    </Formik>

                </div>
            </div>
        </div>
    );
}

export default Login;

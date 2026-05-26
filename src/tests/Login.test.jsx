import { render, screen } from "@testing-library/react";

import Login from "../pages/Login";

test("renders login page", () => {

    render(<Login />);

    const loginText = screen.getByText(/login/i);

    expect(loginText).toBeInTheDocument();

});
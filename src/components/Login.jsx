import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted ", enteredValue.email, enteredValue.password);
    setEnteredValue({
      email: "",
      password: "",
    });
  };

  const handleInputChange = (identifier, e) => {
    setEnteredValue((prev) => ({
      ...prev,
      [identifier]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] mx-auto max-w-[40rem] my-12 p-8 bg-gradient-to-b from-[#253c3c] to-[#1d4949] rounded-lg shadow-lg"
    >
      <h2>Login</h2>

      <div className="flex flex-wrap justify-start gap-4">
        <div className="mb-4">
          <label
            className="block text-sm mb-1 text-[#9bafaf] uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={(e) => handleInputChange("email", e)}
            value={enteredValue.email}
            className="block w-full max-w-[15rem] p-2 text-base border border-solid border-[#758a8a] bg-[#869999] text-[#142020]"
            id="email"
            type="email"
            name="email"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm mb-1 text-[#9bafaf] uppercase font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={(e) => handleInputChange("password", e)}
            value={enteredValue.password}
            className="block w-full max-w-[15rem] p-2 text-base border border-solid border-[#758a8a] bg-[#869999] text-[#142020]"
            id="password"
            type="password"
            name="password"
          />
        </div>
      </div>

      <p className="flex justify-end gap-4">
        <button
          className="py-2 px-4 text-base rounded border-none  text-[#9cbaba] bg-transparent focus:text-[#869999] hover:text-[#869999] cursor-pointer"
          type="button"
        >
          Reset
        </button>
        <button className="text-[#d9e2f1] py-2 px-4 text-base rounded border-none bg-[#147b73] focus:bg-[#319890] hover:bg-[#319890] cursor-pointer">
          Login
        </button>
      </p>
    </form>
  );
}

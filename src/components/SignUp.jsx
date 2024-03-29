import { useState } from "react";

const Signup = () => {
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const acquisitionChannel = formData.getAll("acquisition");
    const data = Object.fromEntries(formData.entries());
    data.acquisition = acquisitionChannel;

    if (data.password !== data["confirm-password"])
      return setPasswordMatch(false);

    console.log(data);
    setPasswordMatch(true);
    // e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] mx-auto max-w-[40rem] my-12 p-8 bg-gradient-to-b from-[#253c3c] to-[#1d4949] rounded-lg shadow-lg"
    >
      <h2 className="text-2xl mb-2">Welcome on board!</h2>
      <p className="mb-6">
        We just need a little bit of data from you to get you started 🚀
      </p>

      <div className="mb-4">
        <label
          className="block text-sm mb-1 text-[#9bafaf] uppercase font-bold"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="block w-full max-w-[15rem] p-2 text-base border border-solid border-[#758a8a] bg-[#869999] text-[#142020]"
          id="email"
          type="email"
          name="email"
          required
        />
      </div>

      <div className="flex flex-wrap justify-start gap-4">
        <div className="mb-4">
          <label
            className="block text-sm mb-1 text-[#9bafaf] uppercase font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="block w-full max-w-[15rem] p-2 text-base border border-solid border-[#758a8a] bg-[#869999] text-[#142020]"
            id="password"
            type="password"
            name="password"
            required
            minLength={8}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm mb-1 text-[#9bafaf] uppercase font-bold"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            className="block w-full max-w-[15rem] p-2 text-base border border-solid border-[#758a8a] bg-[#869999] text-[#142020]"
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
            minLength={8}
          />
          <div className="text-[#ffca99] text-sm h-8 py-2">
            {!passwordMatch && <p className="">Passwords must match!</p>}
          </div>
        </div>
      </div>

      <hr className="mb-6" />

      <div className="flex flex-wrap justify-start gap-4">
        <div className="mb-4">
          <label
            className="block text-sm mb-1 text-[#9bafaf] uppercase font-bold"
            htmlFor="first-name"
          >
            First Name
          </label>
          <input
            className="block w-full max-w-[15rem] p-2 text-base border border-solid border-[#758a8a] bg-[#869999] text-[#142020]"
            type="text"
            id="first-name"
            name="first-name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm mb-1 text-[#9bafaf] uppercase font-bold"
            htmlFor="last-name"
          >
            Last Name
          </label>
          <input
            className="block w-full max-w-[15rem] p-2 text-base border border-solid border-[#758a8a] bg-[#869999] text-[#142020]"
            type="text"
            id="last-name"
            name="last-name"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block text-sm mb-1 text-[#9bafaf] uppercase font-bold"
          htmlFor="phone"
        >
          What best describes your role?
        </label>

        <select
          className="block w-full max-w-[15rem] p-2 text-base rounded border border-solid border-[#758a8a] bg-[#869999] text-[#142020]"
          id="role"
          name="role"
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset className="mb-4 py-3">
        <legend>How did you find us?</legend>
        <div className="mb-4 flex items-center">
          <input
            className="inline-block w-auto mr-2 border-none bg-transparent text-[#d9e2f1]"
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label
            className="block text-sm  text-[#9bafaf] uppercase font-bold"
            htmlFor="google"
          >
            Google
          </label>
        </div>

        <div className="mb-4 flex items-center">
          <input
            className="inline-block w-auto mr-2 border-none bg-transparent text-[#d9e2f1]"
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label
            className="block text-sm  text-[#9bafaf] uppercase font-bold"
            htmlFor="friend"
          >
            Referred by friend
          </label>
        </div>

        <div className="mb-4 flex items-center">
          <input
            className="inline-block w-auto mr-2 border-none bg-transparent text-[#d9e2f1]"
            type="checkbox"
            id="other"
            name="acquisition"
            value="other"
          />
          <label
            className="block text-sm  text-[#9bafaf] uppercase font-bold"
            htmlFor="other"
          >
            Other
          </label>
        </div>
      </fieldset>

      <div className="mb-4 flex items-center">
        <label
          className="block text-sm text-[#9bafaf] uppercase font-bold"
          htmlFor="terms-and-conditions"
        >
          <input
            className="inline-block w-auto mr-2 border-none bg-transparent text-[#d9e2f1]"
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            required
          />
          I agree to the terms and conditions
        </label>
      </div>

      <p className="flex justify-end gap-4">
        <button
          type="reset"
          className="py-2 px-4 text-base rounded border-none  text-[#9cbaba] bg-transparent focus:text-[#869999] hover:text-[#869999] cursor-pointer"
        >
          Reset
        </button>
        <button
          className="text-[#d9e2f1] py-2 px-4 text-base rounded border-none bg-[#147b73] focus:bg-[#319890] hover:bg-[#319890] cursor-pointer"
          type="submit"
        >
          Sign up
        </button>
      </p>
    </form>
  );
};
export default Signup;

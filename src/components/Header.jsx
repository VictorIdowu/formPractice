import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header className="items-center my-8 flex flex-col">
      <img
        className="w-20 h-20 object-contain rounded-[50%] border-2 drop-shadow-md"
        src={logoImg}
        alt="A form and a pencil"
      />
      <h1 className="font-Quicksand font-bold text-5xl my-4 text-[#2f4444]">
        React Forms
      </h1>
    </header>
  );
}

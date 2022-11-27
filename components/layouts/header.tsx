import Button from "../ui/button ";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow">
      <h2 className="mb-0 text-2xl font-bold">Logo</h2>
      <Button>Login</Button>
    </header>
  );
};

export default Header;

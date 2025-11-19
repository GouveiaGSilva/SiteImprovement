import Navbar from "../Navbar";

export default function NavbarExample() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="pt-32 px-6">
        <p className="text-white">Scroll down to see navbar background change</p>
        <div className="h-[200vh]" />
      </div>
    </div>
  );
}

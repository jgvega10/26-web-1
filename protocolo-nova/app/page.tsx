import { Navbar } from "@/components/Navbar";
import TripulacionPage from "./tripulacion/page";

export default function Home() {
  return (
    <div className="bg-black h-screen">
      <h1 className="text-2xl font-white">Protocolo Nova</h1>
      <Navbar></Navbar>
      <TripulacionPage></TripulacionPage>
    </div>
  );
}

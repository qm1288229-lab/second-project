import { Header } from "./components/Header";
import { WorkByBike } from "./components/WorkByBike";
import { FloatingActions } from "./components/FloatingActions";
import { WorkByBike2 } from "./components/WorkByBike2";
import { WorkByBike3 } from "./components/WorkByBike3";
import { WorkByBike4 } from "./components/WorkByBike4";
import { WorkByBike5 } from "./components/WorkByBike5";
import { WorkByBike6 } from "./components/WorkByBike6";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div id="top" />
      <Header />
      <WorkByBike />
      <WorkByBike2 />
      <WorkByBike3 />
      <WorkByBike4 />
      <WorkByBike5 />
      <WorkByBike6 />
      <Footer />
      <FloatingActions />
    </main>
  );
}

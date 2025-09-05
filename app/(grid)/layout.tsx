import styles from "./page.module.css";
import '../globals.css';
import Sidebar from "../Components/nav/Sidebar";
import NavBar from "../Components/nav/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="background-image grid grid-cols-12 h-screen overflow-hidden">
      <div className="col-span-2 sticky top-0 h-screen "> 
        <Sidebar />
      </div>

      <div className="col-span-10 h-screen overflow-y-auto">
        <NavBar />
        <div className="p-4"> {/* Optional padding for content */}
          {children}
        </div>
      </div>
    </main>
  );
}

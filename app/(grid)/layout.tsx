import styles from "./page.module.css";
import '../globals.css';
import Sidebar from "../Components/nav/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="background-image grid grid-cols-12">
      <div className=" col-span-2"> 


        <Sidebar/>
        


      </div>

      <div className="col-span-10 h-screen overflow-auto">
        {children}
      </div>

    </main>
  );
}
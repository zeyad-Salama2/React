import styles from "./page.module.css";
import '../globals.css';
import Sidebar from "../Components/nav/Sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="grid grid-cols-12">
      <div className="bg-red-900 col-span-2 h-screen"> 
        
        <Sidebar/>
        


      </div>

      <div className="col-span-10 h-screen bg-gray-100 dark:bg-gray-900">
        {children}
      </div>

    </main>
  );
}
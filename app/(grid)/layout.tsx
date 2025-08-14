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
      <div className="bg-blue-200 col-span-2 h-screen"> 

        
        <Sidebar/>
        


      </div>

      <div className="col-span-10 h-screen bg-purple-900 dark:bg-gray-900">
        {children}
      </div>

    </main>
  );
}
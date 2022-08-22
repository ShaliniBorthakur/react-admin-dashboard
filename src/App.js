import { useState } from "react";
import Layout from "./components/layout";


function App() {
  const [isSidebarOpen , setIsSidebarOpen] =useState(false);

  return (
    <div >
      <Layout isSidebarOpen={isSidebarOpen}  setIsSidebarOpen={setIsSidebarOpen}/>
    </div>
  );
}

export default App;
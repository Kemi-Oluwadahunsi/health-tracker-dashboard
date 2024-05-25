
import './App.css'
import Dashboard from "./components/dashboard"
import Header from "./components/Header";
function App() {


  return (
    <>
      <div className="bg-[#F6F7F8] p-4 font-[Manrope] text-[#072635] text-[0.9rem]">
        <Header />
        <Dashboard />
      </div>
    </>
  );
}

export default App

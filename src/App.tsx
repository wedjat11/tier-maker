import "./App.css";
import AddImg from "./components/AddImg";
import SingleTier from "./components/SingleTier";
import TitleContainer from "./components/TitleContainer";

function App() {
  return (
    <div className="bg-[#242222] w-screen h-screen p-3 flex flex-col gap-30">
      <TitleContainer />
      <main className="w-full max-w-3xl mx-auto">
        <SingleTier />
        <AddImg />
      </main>
    </div>
  );
}

export default App;

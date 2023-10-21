import { Card } from "./components/Card";
import themes, { language } from "./data";

function App() {
  console.log(themes)
  return (
    <>
    <h1 className="text-amber-400 text-5xl font-bold grid grid-cols-1 py-10 text-center">
      {language}
    </h1>
    {themes.map((theme, idx) => (
      <Card key={idx}/>
    ))}
    </>
  );
}

export default App;
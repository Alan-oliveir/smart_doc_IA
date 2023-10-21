import { Card } from "./components/Card";
import themes, { language } from "./data";

function App() {
  console.log(themes)
  return (
    <section className="grid place-content-center w-full h-full">
      <h1 className="text-amber-400 text-5xl font-bold grid grid-cols-1 py-10 text-center">
        {language}
      </h1>
      <div className="grid grid-cols-4 gap-10"> 
        {themes.map((theme, idx) => (
          <Card key={idx} title={theme.name}/>
        ))}
      </div>   
    </section>
  );
}

export default App;

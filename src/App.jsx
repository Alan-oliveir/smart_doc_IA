import themes, {language} from "./data";

function App() {
  console.log(themes)
  return (
    <>
    <h1>{language}</h1>
    {themes.map((theme, idx) => (
      <p key={idx}> {theme.name}</p>
    ))}
    </>
  );
}

export default App;
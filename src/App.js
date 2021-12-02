
function App() {
  const name = 'Satish'
  const x = false
  return (
    < div className="container">
      <h1>Hello React {x ? 'Yes' : 'No'}</h1>
  <h2>{name}</h2>
    </div>
  );
}

export default App;

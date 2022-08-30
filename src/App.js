

import Input from './Input';

function App() {
  return (
    <div className="card" 
    style={{
    width: "18rem",
    display: "flex", 
    justifyContent: "center", 
    alignItems:"center",
    margin:'auto',
    marginTop:'25px',
    }}>
      <h2>EMI CALCULATOR</h2>
      <Input/>
    </div>
  );
}

export default App;

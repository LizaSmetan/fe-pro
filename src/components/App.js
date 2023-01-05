import { useState } from "react";
import Label from "./Label";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  // showDropdown === 'button 1'
  return (
    <div>
      <Label titlesdgfhbsndfsdf={showDropdown}/>
      <button onClick={() => setShowDropdown('button 1')}>Open dropdown</button>
      <button onClick={() => setShowDropdown('button 2')}>Open dropdown 2</button>
      {showDropdown ? <div>dropdown</div> : null}
    </div>
  );
}

export default App;

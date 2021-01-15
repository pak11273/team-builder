import React, {useState} from 'react'

function App() {
  const initialState = [
    {name: "Brad" },
    {name: "Brad" },
    {name: "Brad" },
    {name: "Brad" },
  ]
  const [team, setTeam] = useState(initialState)
  return (
    <div>
      <ul>
        {team.map( member => {
          return <li>{member.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;

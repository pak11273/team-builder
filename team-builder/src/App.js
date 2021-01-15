import React, {useState} from 'react'

import Form from './components/Form'

function App() {
  const initialState = [
    {name: "Stephanie Enciso", email: "stephanie-enciso@lambdastudents.com", role: "full-stack engineer" },
    {name: "Taylor Friesen", email: "taylor-friesen@lambdastudents.com", role: "full-stack engineer" },
    {name: "Gia Bleu", email: "gia-bleu@lambdastudents.com", role: "full-stack engineer" },
    {name: "Kaitlyn Hunnicutt", email: "kaitlyn-hunnicutt@lambdastudents.com", role: "full-stack engineer" },
    {name: "Kaitlyn Hunnicutt", email: "kaitlyn-hunnicutt@lambdastudents.com", role: "full-stack engineer" },
    {name: "Nicholas Cabuno", email: "nicholas-cabuno@lambdastudents.com", role: "full-stack engineer" },
    {name: "Joe Park", email: "jong-seo-park@lambdastudents.com", role: "full-stack engineer" },
    {name: "Mona Hassan", email: "mona-hassan@lambdastudents.com", role: "full-stack engineer" },
    {name: "Hairo Garcia", email: "hairo-garcia@lambdastudents.com", role: "full-stack engineer" },
    {name: "Devon Brady", email: "devon-brady@lambdastudents.com", role: "full-stack engineer" },
    {name: "Robert Houck", email: "robert-houck@lambdastudents.com", role: "full-stack engineer" },
  ]

  const [team, setTeam] = useState(initialState)
  return (
    <>
    <div>
      <Form />
    </div>
    <div>
      <ul>
        {team.map( (member,i) => {
          return <li key={i}>{member.name}</li>
        })}
      </ul>
    </div>
    </>
  );
}

export default App;

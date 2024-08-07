import { useState } from 'react';
import data from './data'
import List from './List';


const App = () => {
  const [person, setPerson] = useState(data)

  const handleClick = () => {
    setPerson([])
  }

  return <main>
    <section className="container">
      <h3>{person.length} Birthdays Today</h3>
      <List person={person} />
      <button type='button' onClick={handleClick} className='btn btn-block'>Clear All</button>
    </section>
  </main>;
};
export default App;

import { useState } from 'react';

function Header({ title }) {
  return <h1>{`Cool, ${title ? title : 'default'}`}</h1>;
}

export default function HomePage() {
  const [likes, setLikes] = useState(0);
  const names = ['Praveen Dias', 'Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  function handleClick() {
    setLikes(likes + 1)
    console.log("increment like count")
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
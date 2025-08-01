import "./styles.css";
import { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
}

export default function SearchBar({onSearch} : Props) {

  const [text, setText] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(text);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleResetClick() {
    setText("");
    onSearch("");
  }

  return (
    <form className="dsc-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔎︎</button>
      <input 
        value={text}
        type="text" 
        placeholder="Nome do produto" 
        onChange={handleChange}
      />
      <button onClick={handleResetClick}>🗙</button>
    </form>
  );
}

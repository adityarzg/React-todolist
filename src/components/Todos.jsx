import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const Todos = [
    {
      text: "Belajar React Hook"
    },
    {
      text: "Belajar Props React"
    },
    {
      text: "Belajar React Basic"
    },
    {
      text: "Belajar React Pemula"
    },
    {
      text: "Belajar React"
    }
  ];

  return (
    <section className="todos">
      {Todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;

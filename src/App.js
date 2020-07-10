import React from "react";
import "./styles.css";
import Paper from "./components/Paper";
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";

export default function App() {
  return (
    <Paper>
      <Header />
      <Form />
      <Todos />
    </Paper>
  );
}

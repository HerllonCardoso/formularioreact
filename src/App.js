import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";

import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

class App extends Component {
  state = {};
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" component="h1" align="center">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro onSubmit={onSubmit} />
      </Container>
    );
  }
}

function onSubmit(dados) {
  console.log(dados);
}

export default App;

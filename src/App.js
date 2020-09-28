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
        <FormularioCadastro onSubmit={onSubmit} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function onSubmit(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}
export default App;

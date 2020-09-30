import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuario";

function FormularioCadastro({ onSubmit, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuarios onSubmit={nextStep} />,
    <DadosPessoais onSubmit={nextStep} validarCPF={validarCPF} />,
    <DadosEntrega onSubmit={onSubmit} />,
  ];

  function nextStep() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formularios[etapaAtual]}</>;
}

export default FormularioCadastro;

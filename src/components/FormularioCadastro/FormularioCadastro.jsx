import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuario";

function FormularioCadastro({ onSubmit, validarCPF }) {

  return (
    <>
      <DadosPessoais onSubmit={onSubmit} validarCPF={validarCPF} />
      <DadosUsuarios />
    </>
  );
}

export default FormularioCadastro;

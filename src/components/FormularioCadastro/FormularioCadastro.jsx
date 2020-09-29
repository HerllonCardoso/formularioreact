import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuario";

function FormularioCadastro({ onSubmit, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(1);

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuarios />;
      case 1:
        return <DadosPessoais onSubmit={onSubmit} validarCPF={validarCPF} />;
      case 2:
        return <DadosEntrega />;
      default:
        return <Typography>Error</Typography>;
    }
  }

  return <>{formularioAtual(etapaAtual)}</>;
}

// <DadosPessoais onSubmit={onSubmit} validarCPF={validarCPF} />
// <DadosUsuarios />
// <DadosEntrega />
export default FormularioCadastro;

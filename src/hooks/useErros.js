import { useState } from "react";

function useErros(validacoes) {
  const initialState = createInitialState(validacoes);
  const [erros, setErros] = useState(initialState);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }

  return [erros, validarCampos, possoEnviar];
}

function createInitialState(validacoes) {
  const initialState = {};
  for (let campo in validacoes) {
    initialState[campo] = { valido: true, texto: "" };
  }

  return initialState;
}

export default useErros;

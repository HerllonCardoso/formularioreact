import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuarios({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          onSubmit({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        label="email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        label="senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuarios;

import { Button, TextField } from '@material-ui/core'
import React from 'react'

function DadosUsuarios(){
    return(
        <form>
            <TextField id="email" label="email" type="email"  variant="outlined"
        margin="normal"
        fullWidth/>
            <TextField id="senha" label="senha" type="password"  variant="outlined"
        margin="normal"
        fullWidth/>
            <Button type="submit" variant="contained" color="primary"
        fullWidth>Cadastrar</Button>
        </form>
    )
}

export default DadosUsuarios
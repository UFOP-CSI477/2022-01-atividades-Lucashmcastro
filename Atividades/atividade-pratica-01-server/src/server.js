import express from 'express';

import { cidadeRouter } from './routes/cidades.js';
import { doacaoRouter } from './routes/doacoes.js';
import { estadoRouter } from './routes/estados.js';
import { localColetaRouter } from './routes/locais_coleta.js';
import { mainRouter } from './routes/main.js';
import { pessoaRouter } from './routes/pessoas.js';
import { tipoSanguineoRouter } from './routes/tipos_sanguineos.js';
import { userRouter } from './routes/users.js';
import { distribuicaoRouter } from './routes/distribuicoes.js';
import { produtoRouter } from './routes/produtos.js';
import { unidadeRouter } from './routes/unidades.js';

import cors from 'cors';
import * as dotenv from "dotenv";
  
dotenv.config();

const PORT = process.env.PORT || 4002;
const app = express();

app.use(express.json());
app.use(cors());

app.use(cidadeRouter);
app.use(doacaoRouter);
app.use(estadoRouter);
app.use(tipoSanguineoRouter);
app.use(localColetaRouter);
app.use(mainRouter);
app.use(pessoaRouter);
app.use(userRouter);
app.use(distribuicaoRouter);
app.use(produtoRouter);
app.use(unidadeRouter);

app.listen(PORT, () =>{
    console.log(`[SERVER] Servidor rodando na porta ${PORT}`);
})

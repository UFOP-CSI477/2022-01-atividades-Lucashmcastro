import express from 'express';

import { acaoRouter } from './routes/acoes';
import { ativoRouter } from './routes/ativos';
import { bolsaRouter } from './routes/bolsas';
import { carteiraRouter } from './routes/carteiras';
import { mainRouter } from './routes/main';
import { cotacaoRouter } from './routes/cotacoes';
import { empresaRouter } from './routes/empresas';
import { indicadorRouter } from './routes/indicadores';

import cors from 'cors';
// import * as dotenv from "dotenv";
  
// dotenv.config();

const PORT = process.env.PORT || 4002;
const app = express();

app.use(express.json());
app.use(cors());

app.use(acaoRouter);
app.use(ativoRouter);
app.use(bolsaRouter);
app.use(empresaRouter);
app.use(carteiraRouter);
app.use(mainRouter);
app.use(cotacaoRouter);
app.use(indicadorRouter);

app.listen(PORT, () =>{
    console.log(`[SERVER] Servidor rodando na porta ${PORT}`);
})

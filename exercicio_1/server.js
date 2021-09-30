const app = require('./src/app');
const port = 8000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
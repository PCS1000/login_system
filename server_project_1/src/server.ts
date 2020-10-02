import app from './app'

const port: number = 3000
app.set('port', port)

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor rodando na porta ${port}`)
})
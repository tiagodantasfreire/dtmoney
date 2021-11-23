import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Categoria</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">- R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>05/05/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvolvimento</td>
            <td>05/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
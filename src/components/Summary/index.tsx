import { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

import entradasIcon from '../../assets/entradas.svg';
import saidasIcon from '../../assets/saidas.svg';
import totalIcon from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  const data = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasIcon} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidasIcon} alt="Saídas" />
        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalIcon} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}
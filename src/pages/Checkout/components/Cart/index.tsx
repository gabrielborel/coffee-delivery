import { CartContainer, CartItems, CartPrices } from './styles';
import americano from '../../../../assets/coffees/americano.svg';
import { Minus, Plus, Trash } from 'phosphor-react';

const data = [
  {
    id: 1,
    image: americano,
    name: 'Expresso Tradicional',
    labels: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 0,
  },
  {
    id: 2,
    image: americano,
    name: 'Expresso Americano',
    labels: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 0,
  },
];

export const Cart = () => {
  return (
    <CartContainer>
      <strong>Cafes selecionados</strong>

      <div>
        <CartItems>
          {data.map((coffee) => (
            <div>
              <img src={coffee.image} alt='' />

              <div>
                <p>{coffee.name}</p>

                <div>
                  <div>
                    <Minus weight='bold' size={20} />
                    <input type='number' defaultValue={1} />
                    <Plus weight='bold' size={20} />
                  </div>

                  <button>
                    <Trash size={16} />
                    Remover
                  </button>
                </div>
              </div>

              <strong>R$ {coffee.price.toFixed(2)}</strong>
            </div>
          ))}
        </CartItems>

        <CartPrices>
          <div>
            <p>Total de itens</p>
            <span>R$ 29,70</span>
          </div>

          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>

          <div>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </div>
        </CartPrices>

        <button>confirmar pedido</button>
      </div>
    </CartContainer>
  );
};

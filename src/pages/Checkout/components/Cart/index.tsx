import { CartContainer, CartItems, CartPrices } from './styles';
import { Minus, Plus, Trash } from 'phosphor-react';
import { useCart } from '../../../../contexts/CartContext';

export const Cart = () => {
  const {
    cart,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    cartValue,
  } = useCart();

  return (
    <CartContainer>
      <strong>Cafes selecionados</strong>

      <div>
        <CartItems>
          {cart.map((coffee) => (
            <div key={coffee.id}>
              <img src={coffee.image} alt='' />

              <div>
                <p>{coffee.name}</p>

                <div>
                  <div>
                    <Minus
                      weight='bold'
                      size={20}
                      onClick={() => decreaseCartQuantity(coffee)}
                    />
                    <input type='number' value={coffee.quantity} readOnly />
                    <Plus
                      weight='bold'
                      size={20}
                      onClick={() => increaseCartQuantity(coffee)}
                    />
                  </div>

                  <button onClick={() => removeFromCart(coffee)}>
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
            <span>R$ {cartValue}</span>
          </div>

          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>

          <div>
            <strong>Total</strong>
            <strong>R$ {(Number(cartValue) + 3.5).toFixed(2)}</strong>
          </div>
        </CartPrices>

        <button>confirmar pedido</button>
      </div>
    </CartContainer>
  );
};

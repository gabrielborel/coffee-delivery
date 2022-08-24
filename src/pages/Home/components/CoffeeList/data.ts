import americano from '../../../../assets/coffees/americano.svg';
import arabe from '../../../../assets/coffees/arabe.svg';
import cafeComLeite from '../../../../assets/coffees/cafecomleite.svg';
import cafeGelado from '../../../../assets/coffees/cafegelado.svg';
import capuccino from '../../../../assets/coffees/capuccino.svg';
import chocolateQuente from '../../../../assets/coffees/chocolatequente.svg';
import cubano from '../../../../assets/coffees/cubano.svg';
import expresso from '../../../../assets/coffees/expresso.svg';
import expressoCremoso from '../../../../assets/coffees/expressocremoso.svg';
import havaiano from '../../../../assets/coffees/havaiano.svg';
import irlandes from '../../../../assets/coffees/irlandes.svg';
import latte from '../../../../assets/coffees/latte.svg';
import macchiato from '../../../../assets/coffees/macchiato.svg';
import mochaccino from '../../../../assets/coffees/mochaccino.svg';

export interface ICoffee {
  id: number;
  image: string;
  name: string;
  labels: string[];
  description: string;
  price: number;
  quantity: number;
}

export const CoffeesList = [
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
  {
    id: 3,
    image: expressoCremoso,
    name: 'Expresso Cremoso',
    labels: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 0,
  },
  {
    id: 4,
    image: expresso,
    name: 'Expresso Gelado',
    labels: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 0,
  },
  {
    id: 5,
    image: cafeComLeite,
    name: 'Café com Leite',
    labels: ['tradicional', 'com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 0,
  },
  {
    id: 6,
    name: 'Latte',
    image: latte,
    labels: ['tradicional', 'com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    quantity: 0,
  },
  {
    id: 7,
    name: 'Capuccino',
    image: capuccino,
    labels: ['tradicional', 'com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    quantity: 0,
  },
  {
    id: 8,
    name: 'Macchiato',
    image: macchiato,
    labels: ['tradicional', 'com leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    quantity: 0,
  },
];

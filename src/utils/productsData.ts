import expressoTradicional from '../assets/coffesImages/Coffee.svg'
import expressoAmericano from '../assets/coffesImages/Coffee-1.svg'
import expressoCremoso from '../assets/coffesImages/Coffee-2.svg'
import expressoGelado from '../assets/coffesImages/Coffee-3.svg'
import cafeLeite from '../assets/coffesImages/Coffee-4.svg'
import latte from '../assets/coffesImages/Coffee-5.svg'
import capuccino from '../assets/coffesImages/Coffee-6.svg'
import macchiato from '../assets/coffesImages/Coffee-7.svg'
import mocaccino from '../assets/coffesImages/Coffee-8.svg'
import chocolateQuente from '../assets/coffesImages/Coffee-9.svg'
import cubano from '../assets/coffesImages/Coffee-10.svg'
import havaiano from '../assets/coffesImages/Coffee-11.svg'
import arabe from '../assets/coffesImages/Coffee-12.svg'
import irlandês from '../assets/coffesImages/Coffee-13.svg'
import uuid from 'react-uuid'

export const productsData = [
  {
    id: uuid(),
    type: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    price: '9,90',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: expressoTradicional,
  },
  {
    id: uuid(),
    type: ['TRADICIONAL'],
    name: 'Expresso Americano',
    price: '9,90',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: expressoAmericano,
  },
  {
    id: uuid(),
    type: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    price: '9,90',
    description: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremoso,
  },
  {
    id: uuid(),
    type: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    price: '9,90',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: expressoGelado,
  },
  {
    id: uuid(),
    type: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    price: '9,90',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeLeite,
  },
  {
    id: uuid(),
    type: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    price: '9,90',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    image: latte,
  },
  {
    id: uuid(),
    type: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    price: '9,90',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccino,
  },
  {
    id: uuid(),
    type: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    price: '9,90',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiato,
  },
  {
    id: uuid(),
    type: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    price: '9,90',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mocaccino,
  },
  {
    id: uuid(),
    type: ['TRADICIONAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    price: '9,90',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolateQuente,
  },
  {
    id: uuid(),
    type: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    price: '9,90',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: cubano,
  },
  {
    id: uuid(),
    type: ['TRADICIONAL', 'ESPECIAL'],
    name: 'Havaiano',
    price: '9,90',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano,
  },
  {
    id: uuid(),
    type: ['ESPECIAL'],
    name: 'Árabe',
    price: '9,90',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
  },
  {
    id: uuid(),
    type: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    price: '9,90',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandês,
  },
]

export const productsOrder = [
  {
    id: uuid(),
    type: ['ESPECIAL'],
    name: 'Árabe',
    price: '9,90',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
  },
  {
    id: uuid(),
    type: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    price: '9,90',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandês,
  },
]

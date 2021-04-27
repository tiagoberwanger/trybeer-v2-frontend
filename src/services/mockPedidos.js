const mockPedidos = [
  {
    id: 1,
    products: [
      {
        id: 1,
        produto: 'produto x',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto x',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto x',
        preco: '2.20',
      },
    ],
    address: 'endereço x',
    status: 'PENDENTE',
    price: 100,
  },
  {
    id: 2,
    products: [
      {
        id: 1,
        produto: 'produto y',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto y',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto y',
        preco: '2.20',
      },
    ],
    address: 'endereço y',
    status: 'CONFIRMADO',
    price: 200,
  },
  {
    id: 3,
    products: [
      {
        id: 1,
        produto: 'produto z',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto z',
        preco: '2.20',
      },
      {
        id: 2,
        produto: 'produto z',
        preco: '2.20',
      },
    ],
    address: 'endereço z',
    status: 'PENDENTE',
    price: 300,
  },
];

export default mockPedidos;

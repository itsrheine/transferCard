const db = require('./connection');
const { User, Product } = require('../models');

db.once('open', async () => {
  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'One day pass',
      description:
        '',
      image: '',
      price: 2.99,
      quantity: 500
    },
    {
      name: ' One Week pass ',
      description:
        '',
      image: '',
      price: 1.99,
      quantity: 500
    },
    {
      name: ' One month pass',
      description:
        '',
      image: '',
      price: 7.99,
      quantity: 20
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

const Sequelize = require('sequelize');
const db = require('../db');

//define the Product model
const Transaction = db.define('transaction', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  notes: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  category: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
  getterMethods: {
    showPrice() {
      return '$' + this.price;
    }
  }
})

module.exports = Transaction;

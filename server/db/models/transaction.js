const Sequelize = require('sequelize');
const db = require('../db');

//define the Product model
const Product = db.define('product', {
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
    type: Sequelize.ENUM,
    allowNull: false
  }
}, {
  getterMethods: {
    showPrice() {
      return '$' + this.price;
    }
  }
})

module.exports = Product

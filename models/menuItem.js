const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const MenuItem = sequelize.define('menuItem', {
    // Model attributes are defined here
    menuItemId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Or DataTypes.UUIDV1
        primaryKey: true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    // Other model options go here
    tableName: 'menu_items'
});


module.exports = MenuItem
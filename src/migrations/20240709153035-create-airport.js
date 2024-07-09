'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      address: {
        type: Sequelize.STRING
      },
      cityId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{               // changes made in the migration file are reflected at the db level 
          model:'Cities',           // here we are refering that the cityId acts as foreign key which is actually refering to the cityId in city model
          key:'id',               // basically binding 2 tables
          as:'cityId'
        },
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airports');
  }
};
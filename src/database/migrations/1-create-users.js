module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },

      password_hash: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      birth_date: {
        allowNull: true,
        type: Sequelize.DATE
      },

      main_role: {
        allowNull: true,
        type: Sequelize.STRING
      },

      kick: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      speed: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      pass: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      dribble: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      defense: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      goals: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      victories: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      assistances: {
        allowNull: true,
        type: Sequelize.INTEGER
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};
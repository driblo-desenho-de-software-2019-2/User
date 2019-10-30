import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        birth_date: Sequelize.DATE,
        main_role: Sequelize.STRING,
        kick: Sequelize.INTEGER,
        speed: Sequelize.INTEGER,
        pass: Sequelize.INTEGER,
        dribble: Sequelize.INTEGER,
        defense: Sequelize.INTEGER,
        goals: Sequelize.INTEGER,
        victories: Sequelize.INTEGER,
        assistances: Sequelize.INTEGER,
      },
      {
        sequelize
      }
    );
  }
}

export default User;

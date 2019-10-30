import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        pw: Sequelize.VIRTUAL,
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
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if(user.pw) {
        user.password = await bcrypt.hash(user.pw, 8)
      }
    });
    
    return this;
  }
}

export default User;

import Sequelize, { Model } from "sequelize";
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
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
      if(user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8)
      }
    });
    
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;

import User from "../models/User";

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(400).json({ error: "user already exists." });
    }

    const { id, name, email, birth_date, main_role, kick, speed,
      dribble, defense, goals, victories, assistances
    } = await User.create(req.body);

    return res.json({ 
      id, 
      name,
      email,
      birth_date, 
      main_role, kick, 
      speed, 
      dribble, 
      defense, 
      goals, 
      victories, 
      assistances,
    });
  }
}

export default new UserController();

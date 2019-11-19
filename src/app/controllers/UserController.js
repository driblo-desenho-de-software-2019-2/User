import * as Yup from 'yup';
import User from "../models/User";
import * as overallPosition from "../utils/strategy/overallStrategy";

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
        .required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      // birth_date: Yup.date(),
      // main_role: Yup.string(),
      // kick: Yup.integer(),
      // speed: Yup.integer(),
      // dribble: Yup.integer(),
      // defense: Yup.integer(),
      // goals: Yup.integer(),
      // victories: Yup.integer(),
      // assistances: Yup.integer(),
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validation fails" });
    }

    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(400).json({ error: "user already exists." });
    }

    const { id, name, email, birth_date, main_role, kick, speed,
      dribble, defense, goals, victories, assistances, overall
    } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      birth_date,
      main_role,
      kick,
      speed,
      dribble,
      defense,
      goals,
      victories,
      assistances,
      overall
    });
  }

  async update(req, res) {

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) :field
      )
      // birth_date: Yup.date(),
      // main_role: Yup.string(),
      // kick: Yup.integer(),
      // speed: Yup.integer(),
      // dribble: Yup.integer(),
      // defense: Yup.integer(),
      // goals: Yup.integer(),
      // victories: Yup.integer(),
      // assistances: Yup.integer(),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: "Validation fails" });
    }

    const { email, oldPassword} = req.body;

    const user = await User.findByPk(req.userId);

    if(email != user.email){
      const userExist = await User.findOne({ where: { email } });
      if (userExist) {
        return res.status(400).json({ error: "User already exists." });
      }
    }

    if(oldPassword && !(await user.checkPassword(oldPassword))){
      return res.status(401).json({ error: "Password does not match" });
    }

    const skills = {
      pass: user.pass,
      defense: user.defense,
      speed: user.speed,
      kick: user.kick,
      dribble: user.dribble
    }

    const overalls = overallPosition["ata"](skills);

    req.body.overall = overalls;

    const {id, name, birth_date, main_role, pass, kick, speed, dribble, defense, overall} = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      birth_date,
      main_role,
      kick,
      speed,
      dribble,
      pass,
      defense,
      overall
    });
  }
  
  async listAll(req, res) {
    
    const all = await User.findAll({
      // where: { <attribute>: <value>},
      attributes: ['id', 'name', 'email'],
    });
    return res.json(all);
  }
  
  async searchByid(req, res) {
    const user = await User.findByPk(req.params.id);
    
    if(!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const { id, name, email, birth_date, main_role, kick, speed, dribble, defense,
      goals, victories, pass, assistances, overall
    } = user;

    return res.json({
      id,
      name,
      email,
      birth_date,
      main_role,
      kick,
      speed,
      dribble,
      pass,
      defense,
      goals,
      victories,
      assistances,
      overall
    });
  }

  async deleteById(req, res) {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }
    
    await user.destroy();

    return res.json("User deletion succeeded");
    }

}

export default new UserController();

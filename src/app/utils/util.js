import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res) => {
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).json({ error: "Token not provided" });
  }
  
  const [, token] = authHeader.split(' ');

  try{
    await promisify(jwt.verify)(token, authConfig.secret);

    return res.status(200).json({ success: "Token valid" });;
  }catch(err) {
    return res.status(401).json({ error: "Token invalid" });
  }
};

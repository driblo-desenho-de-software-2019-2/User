module.exports = {
  dialect: 'postgres',
  host: 'db',
  username: 'driblo',
  password: 'pgpassword',
  database: 'db',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  }
};

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "vashisthbhushan",
  database: "api",
  password: "",
  host: "localhost",
  port: 5435,
});

const createOrder = (req, res) => {
  const order = req.body;

  pool.query(
    `INSERT INTO orders (id, quantity, status) VALUES ($1, $2, $3)`,
    [4, order.quantity, 222],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
};

const getOrders = (req, res) => {
  pool.query(`SELECT * FROM orders`, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

module.exports = {
  createOrder,
  getOrders,
};

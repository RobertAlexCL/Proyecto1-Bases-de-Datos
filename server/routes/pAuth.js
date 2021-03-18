const router = require("express").Router();
const bcrypt = require("bcrypt");
const pool = require("../db");

//Registrando

router.post("/register", async (req, res) => {
    // Destructurar el rq.body
    const { user_name, Contraseña} = req.body;
  
    try {

        // Ver si el usuario existe
      const user = await pool.query("SELECT * FROM Usuario WHERE user_name = $1", [
        user_name
      ]);
  
      if (user.rows.length > 0) {
        return res.status(401).json("!El usuario ya existe!");
      }
      
      //Se hace el Bcrypt del usuario y contraseña
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(Contraseña, salt);
      
      //Ingresar el usuario a la base de datos
      let nuevo_usuario = await pool.query(
        "INSERT INTO users (user_name, Contraseña) VALUES ($1, $2) RETURNING *",
        [user_name, Contraseña]
      );
  
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Error en el server");
    }
  });

  router.post("/login", async (req, res) => {
    // Destructurar el rq.body
    const { user_name, Contraseña} = req.body;
  
    try {
      // Ver si el usuario existe
      const user = await pool.query("SELECT * FROM Usuario WHERE user_name = $1", [
        user_name
      ]);
  
      if (user.rows.length === 0) {
        return res.status(401).json("Usuario invalido");
      }
      
      //Ver si la contraseña es la indicada
      const validPassword = await bcrypt.compare(
        Contraseña,
        user.rows[0].user_password
      );
  
      if (!validPassword) {
        return res.status(401).json("Contraseña invalida");
      }
      
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Error en el server");
    }
  });
  
  
const Pool = require('pg').Pool
const pool = new Pool ({
    user: 'chantee',
    host: 'localhost',
    database: 'remedies',
    password: '',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { firstname, lastname, email, password } = request.body

    pool.query('INSERT INTO users (firstname, lastname, email, username, password) VALUES ($1, $2, $3, $4)', [firstname, lastname, email, email, password], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Account created successfully`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { firstname, lastname, email, password } = request.body
  
    pool.query(
      'UPDATE users SET firstname = $1, lastname = $2, email = $3, password = $4  WHERE id = $5',
      [firstname, lastname, email, password, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
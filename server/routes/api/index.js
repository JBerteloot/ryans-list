const router = require('express').Router()
const conn = require('../../db')

router.get('/categories', (req, res, next) => {
  const sql = 
    `SELECT name, id, parent_id
    FROM categories
    ORDER BY parent_id` 

  conn.query(sql, (error, results, fields) => {
    const main = results.filter(category => {
      return (category.parent_id == null)
    })
    main.forEach(category => {
      category.sub = results.filter(sub => {
        return category.id === sub.parent_id
      })
    })
    res.json(main)
  })
})

router.post("/posts", (req, res, next) => {
  const post = req.body.post
  const sql = 
    `INSERT INTO posts (title, category_id, subcategory_id, price, location, picture, date_created)
      VALUES (?, ?, NULL, NULL, NULL, NULL, NOW())`

      conn.query(sql, [post.title, post.category_id] )
})

router.get('/posts', (req, res, next) => {
  const sql = 
    `SELECT id, title, category_id, subcategory_id, price, location, picture, date_created
    FROM posts` 
    
  conn.query(sql, (error, results, fields) => {
    res.json(results)
  })
})

module.exports = router
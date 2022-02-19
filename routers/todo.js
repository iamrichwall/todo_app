const express = require('express');
const router = express.Router();
const {deleteTodo, getAllTodo, postCreateTodo, putUpdateTodo} = require("../controllers/todo");

/** 
 * @router Get api/todo
 * @description get all todo
 * @access public
 */

router.get('/', getAllTodo);

/**
 * @router post api/todo
 * @description add new todo
 * @access public
 */

router.post('/', postCreateTodo);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
 router.put("/:id", putUpdateTodo);

 /**
  * @route DELETE api/todo/:id
  * @description delete todo
  * @access public
  */
 router.delete("/:id", deleteTodo);
 
 module.exports = router;
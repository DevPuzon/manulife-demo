import express from "express"; 
import { deleteItem, findAll, updateItem } from "../controllers/todo.controller";

const router = express.Router();

router.get('/',findAll);
router.delete('/:id',deleteItem);
router.put('/:id',updateItem);


export default router;

import { Request,Response } from "express";
import * as todoService from "../services/todo.service";

export const findAll = (req:Request,res:Response) => {
    const todoList = todoService.findAll();
    res.status(200).json(todoList);
}

export const deleteItem = (req:Request,res:Response) => {
    const todoList = todoService.deleteItem(req.params.id);
    res.status(200).json(todoList);
}

export const updateItem = (req:Request,res:Response) => {
    const {isDone} = req.body;
    const todoList = todoService.updateItem(req.params.id,isDone);
    res.status(200).json(todoList);
}


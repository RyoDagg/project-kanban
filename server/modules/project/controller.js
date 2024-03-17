const express = require("express");
const Project = require("./model");
const Task = require("../task/model");
const User = require("../user/model");

const getAll = async (req, res) => {
  try {
    const result = await Project.findAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).send(err);
  }
};
const create = async (req, res) => {
  try {
    const { name, description } = req.body;
    const { userId } = req;
    const result = await Project.create({ name, description, userId });
    res.status(201).json(result);
  } catch (err) {
    res.status(404).send(err);
  }
};
const getOneProject = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Project.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getAllTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    const tasks = await project.getTasks();
    res.json(tasks);
  } catch (err) {
    res.status(404).send(err);
  }
};
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await Project.destroy({ where: { id: id } });
    res.json(result);
  } catch (err) {
    res.send(err);
  }
};
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Project.update(
      {
        name: req.body.name,
        description: req.body.description,
      },
      { where: { id: id } }
    );
    res.json(result);
  } catch (err) {
    res.status(404).send(err);
  }
};
const addUser = async (req, res) => {
  try {
    const { userId, projectId } = req.body;
    const project = await Project.findByPk(projectId);
    project.addUser(userId);
    res.send('User Added');
  } catch (error) {
    res.send(404);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    const users = await project.getUsers();
    res.json(users);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = {
  getAll,
  create,
  getOneProject,
  getAllTasks,
  deleteProject,
  update,
  addUser,
  getAllUsers,
};

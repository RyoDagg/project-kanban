const express = require("express");
const Task = require("./model");

const getAll = async (req, res) => {
  try {
    const result = await Task.findAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(404).send(err);
  }
};
const create = async (req, res) => {
  try {
    const result = await Task.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(404).send(err);
  }
};
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Task.destroy({ where: { id: id } });
    res.status(202).json(result);
  } catch (err) {
    res.status(404).send(err);
  }
};
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Task.update(
      {
        name: req.body.name,
        description: req.body.description,
        state: req.body.state,
      },
      { where: { id: id } }
    );
    res.json(result);
  } catch (err) {
    res.status(404).send(err);
  }
};
module.exports = { getAll, create, remove, updateTask };

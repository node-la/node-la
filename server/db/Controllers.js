const { User, Post, PostTypes, Hood, Comment } = require('./index');
const parser = require('body-parser');
const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const app = express(feathers());
// ! USER CRUD
//create & save a user to the db
// !CREATE USER
const createUser = function (req, res, next) {
  const username = req.body.username; // Grab username from req body
  const id = req.body.id; // Grab password from req body
  User.create({
    username: username,
    id: id
  })
    .then((data) => {
      res.status(201).json({ // Send 201 status upon success.
        status: 'success',
        data: data,
        message: `POSTED ${username} TO DATABASE`
      });
    })
    .catch(err => {
      res.sendStatus(400)
      console.log('There was an error adding the user to the db', err);
      return next();
    });
};
//user login function
// ! READ
const getSingleUser = function (req, res, next) {
  const id = req.params.id;
  User.findOrCreate({
    where: {
      id: id
    }
  })
    .then((data) => { // Find the user with the given auth0_id.
      res.status(200).json({ // Send 200 status upon success.
        status: 'success',
        data: data,
        message: 'Here\'s that user you asked for'
      });
    })
    .catch(function (err) {
      res.sendStatus(400)
      console.log('Unfortunately I was unable to find that user\'s information', err);
      return next();
    });
};
//get all users
const getUsers = function (req, res, next) {
  User.findAll({})
    .then((users) => {
      res.status(200);
      res.send(JSON.stringify({
        status: 'success',
        data: users,
        message: 'Here are all the users!'
      }));
      return next();
    })
    .catch(err => {
      res.status(400);
      return next();
    });
};
//Update User
//! UPDATE
const updateUser = function (req, res, next) {
  User.update({
    // username: newUsername,
    // }, {
    // where: {
    //   id: id
    // }
  })
    .then((newName) => {
      res.status(201);
      console.log(`This username has been updated to ${newName}`);
    });
  return next();
};
//! DELETE USER
const deleteUser = function (req, res, next) {
  User.destroy({
    where: {
      id: id,
      username: username
    }
  })
    .then(() => {
      res.status(201);
      console.log('This user has been deleted');
    });
}
//! POST CRUD
//! CREATE POST
const createPost = function (req, res) {
  Post.create({
    title: title,
    postHoodId: postHoodId,
    postTypeId: goal_picture,
    postBody: postBody,
    postVotes: 0
  })
    .then(() => {
      Hood.create({})
    })
    .then(() => {
      PostTypes.create({})
    })
    .then((data) => {
      res.status(201)
        .json({
          status: 'success',
          data: data,
          message: 'Created a new Post!'
        })
    })
    .catch((err) => {
      res.status(400)
      console.log('There was an error creating that post!'), err;
      return next();
    });
}
const getSinglePost = function (req, res) {
  const id = req.params.postId;
  Post.findOne({
    where: {
      title: title,
      id: id
    }
  })
    .then((singlePost) => {
      res.status(200).json({
        data: singlePost
      });
    })
    .catch(err => res.sendStatus(400));
};
//get all the posts or comments from the db based on user id
//!READ POST
const getPosts = function (req, res, next) {
  Post.findAll({
    where: {
      id: 1,
    }
  })
    .then((response) => {
      res.status(200);
      res.send(JSON.stringify({
        status: 'success',
        data: response.data,
        message: 'Here are all that user\'s posts!'
      }));
      return next();
    })
    .catch(err => {
      res.sendStatus(400)
      console.log(err);
      return next();
    });
};
//!UPDATE POST
const updatePost = function (req, res, next) {
  Post.update({
    // title: newTitle,
    // postBody: newPostBody,
    // }, {
    // where: {
    //   id: postId
    // }
  })
    .then((newPost) => {
      res.status(201);
      console.log(`This post has been updated to ${newPost}`);
    });
};
//delete a specific post by iD
//!DELETE POST
const deletePost = function (req, res, next) {
  Post.destroy({
    where: {
      id: id,
    }
  })
    .then(() => {
      res.status(201);
      console.log('This post has been deleted');
    });
}
//COMMENT CRUD
module.exports = {
  createUser,
  getSingleUser,
  getUsers,
  updateUser,
  deleteUser,
  createPost,
  getSinglePost,
  getPosts,
  updatePost,
  deletePost,
};
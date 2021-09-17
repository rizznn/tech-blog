const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Comment } = require('../../models');
const  Post = require('../../models/Post');
const withAuth = require('../../utils/auth');

// get all posts
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
        order: [['created_at', 'DESC']],
        attributes: ['id', 'post_url', 'title', 'contents', 'created_at'],
        include: [
          // include the Comment model
          {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})       
  
// get a single post
router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'post_url', 'title', 'contents', 'created_at'],
      include: [
        {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
        },
        {
            model: User,
            attributes: ['username']
        }
      ]
    })
    .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a post
router.post('/', withAuth, async (req, res) => {
    // expects {title: 'Taskmaster goes public!', contents: 'Taskmaster is an app to organize tasks', post_url: 'https://taskmaster.com/press', user_id: 1}
    try {
    const dbPostData = await Post.create({
      title: req.body.title,
      contents: req.body.contents,
      post_url: req.body.post_url,
      user_id: req.session.user_id
    })
        console.log(dbPostData)
        return res.json(dbPostData)
  }
      catch(err) {
        console.log(err);
        res.status(500).json(err);
      };
});

// Because we'll be updating an existing entry, the idea is to first retrieve the post instance by id, then alter the value of the title on this instance of a post
router.put('/:id', withAuth, (req, res) => {
    Post.update(
      {
        title: req.body.title,
        contents: req.body.contents
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// delete a post
router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
  
module.exports = router;
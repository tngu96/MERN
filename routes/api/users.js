const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

//@route    POST api/users
//@desc     Register User
//@access   Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Email is not valid').isEmail(),
    check('password', 'Password is not valid').isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send('User routes');
  }
);

module.exports = router;

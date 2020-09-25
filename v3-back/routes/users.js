const router = new require("express").Router();
const UserModel = require('../models/Users');
const uploader = require("./../config/cloudinary");
const protectRoute = require("./../middlewares/protectPrivateRoute");

const bcrypt = require("bcrypt");
const auth = require("./../auth");



router.get("/", async (req, res, next) => {
  try {
    const getFav = await UserModel.find().populate("favoris");
    res.json(getFav);
  } catch (err) {
    next(err)
  }

});



router.get("/:id", async (req, res, next) => {
  try {
    const getUser = await UserModel.findById(req.params.id);
    res.json(getUser)
  } catch (err) {
    next(err)
  }
});
router.get("/profile", protectRoute, (req, res) => {
  res.render("profile", {
    js: ["form-create-address"]
  });
});

// router.get("/:id", async (req, res, next) => {
//   try {
//     const getFavById = await UserModel.findById(req.params.id)
//       .populate("favoris");
//     res.json(getFavById);
//   } catch (err) {
//     next(err)
//   }

// })

router.post("/signup", async (req, res, next) => {

  try {
    const newUser = await UserModel.create(req.body); //req.body contient les infos postées
    res.json(newUser)

  } catch (err) {
    next(err)
  }
});


router.patch("/:id", auth.authenticate, async (req, res, next) => {
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body, {
        new: true
      }
    );
    res.json(updateUser);
  } catch (err) {
    next(err)
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
    res.json(deleteUser);

  } catch (err) {
    next(err)
  }
})


module.exports = router;
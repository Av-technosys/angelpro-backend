const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const requredUser = require("../middlewares/requiredUser");

router.post("/login", authController.loginController);
router.post("/signup", authController.signUpController);
router.post("/logout", authController.logOutController);
router.post("/user", requredUser, authController.userData);
router.get("/users", requredUser, authController.allUsers);

module.exports = router;

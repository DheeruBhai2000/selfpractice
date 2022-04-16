const express = require('express');
const router = express.Router();

// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
const newallcortroller=require("../controllers/newallcontroller")

//==============   apr 14 apis  =============================
router.post("/createanewauther",newallcortroller.createNewAuther);
router.post("/createnewpublisher",newallcortroller.createPublisher);
router.post("/createnewbooks",newallcortroller.createNewBook);
router.get("/allnewbooks",newallcortroller.allnewbooks)

//========================     END      ======================

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    // const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    // const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    // let x= dateB.diff(dateA, "days")
    // console.log(x)

    // res.send({ msg: "all good"})
// })

module.exports = router;
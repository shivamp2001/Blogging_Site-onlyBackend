const express=require("express")
const { getAllBlogs, addBlog, updateBlog, getById, deleteBlog, getByUserId } = require("../Controller/blog")
const { signup, login, getAllUser } = require("../Controller/user")
const router=express.Router()

router.get("/getalluser",getAllUser)
router.post("/signup",signup)
router.post("/login",login)



router.get("/getallblog",getAllBlogs)
router.post("/addblog",addBlog)
router.put("/updateblog/:id",updateBlog)
router.get("/getbyid/:id",getById)
router.delete("/deletebyid/:id",deleteBlog)
router.get("/getblogbyuserid/:id",getByUserId)






module.exports=router
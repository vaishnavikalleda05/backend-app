
// import userModel from "../models/userModel.js";

// const getUsers=async(req,res)=>{
//     const users=await userModel.find()
//     res.render("users/index",{users});

// }
import userModel from "../models/userModel.js";

// Get all users
const getUsers = async (req, res) => {
    const users = await userModel.find();
    res.render("users/index", { users });
};

// Show add user form
const addUserForm = async (req, res) => {
    res.render("users/add");
};

// Add user
const addUser = async (req, res) => {
    const user = req.body;
    await userModel.create(user);
    res.redirect("/users");
};

// Delete user
const deleteUser = async (req, res) => {
    const id = req.params.id;
    await userModel.findByIdAndDelete(id);
    res.redirect("/users");
};

// Show edit user form
const editUserForm = async (req, res) => {
    const id = req.params.id;
    const user = await userModel.findOne({ _id: id });
    res.render("users/edit", { user });
};

// Save edited user
const saveUser = async (req, res) => {
    const id = req.params.id;
    await userModel.findByIdAndUpdate(id, req.body);
    res.redirect("/users");
};

export {getUsers,addUserForm,addUser,deleteUser,editUserForm,saveUser};
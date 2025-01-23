const express = require ("express");
const Staff = require("../models/staff");
const router = express.Router();

//add staff
router.post("/addstaff", async (req,res) =>{
    try{
        const{ sname, semail, snumber, sdob, srole, sdoj } = req.body;
        const staff = await Staff.create({ sname, semail, snumber, sdob, srole, sdoj });
        res.status(200).json({staff});
    }catch(err){
        res.status(400).json({ error: err.message || "Server Error" }); // Updated error response
    }
});

//get all staff
router.get("/getstaff", async (req, res)=> {
    try{
        const staff = await Staff.find();
        console.log(staff);
        res.status(200).json({staff});
    }catch(err){
        res.status(400).json({error: err});
    }
});

//get staff by id
router.get("/:id", async (req,res) =>{
    try{
        const staff = await Staff.findById(req.params.id);
        res.status(200).json({staff});
    }catch(err){
        res.status(400).json({error: err});
    }
});

//delete staff
router.delete("/:id", async (req, res)=>{
    try{
        await Staff.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Staff is Deleted"});
    }catch(err){
        res.status(400).json({error: err});
    }
});

//update staff
router.put("/:id", async (req,res)=> {
    try{
        const { sname, semail, snumber, sdob, srole, sdoj } = req.body;
        const staff = await Staff.findByIdAndUpdate(  // Updated from findByIdAndDelete
            req.params.id,
            { sname, semail, snumber, sdob, srole, sdoj },
            { new: true } // Ensure updated document is returned
        );
        res.status(200).json({staff});
    }catch(err){
        res.status(400).json({error: err.message || "Server Error"}); // Updated error response for better debugging
    }
});


module.exports = router;


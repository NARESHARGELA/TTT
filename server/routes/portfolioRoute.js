const router = require('express').Router();
const {Intro,About,Project,Experience,Service,Contact} = require('../models/PortfolioModel')

const User = require('../models/userModel')

// get all portfolio data
router.get('/get-port-folio-data', async(req,res)=>{

    try{
        const intros = await Intro.find()
        const abouts = await About.find()
        const projects = await Project.find()
        const experiences = await Experience.find()
        const services = await Service.find()
        const contacts = await Contact.find()
        res.send(
            {
                intros,
                abouts,
                projects,
                experiences,
                services,
                contacts
              }
        )
    }
    catch(err){
        res.status(500).send(err)
    }
})

// update intro data
router.post('/update-intro',async(req,res)=>{
    try{
        const intro = await Intro.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        );
        res.status(200).send({
            data:intro,
            success:true,
            message:"Intro Updated Successfully"
        })
    }catch(err){
        res.status(200).send(err)
    }
})

// update about data
router.post('/update-about',async(req,res)=>{
    try{
        const about = await About.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        );
        res.status(200).send({
            data:about,
            success:true,
            message:"About Updated Successfully"
        })
    }catch(err){
        res.status(500).send(err)
    }
})

// add experience
router.post('/add-experience',async(req,res)=>{
    try{
        const experience = new Experience(req.body);
        await experience.save()
        res.status(200).send({
        data:experience,
        success:true,
        message:"Experience added Successfully"
    })
    }catch(err){
        res.status(500).send(err)
    }
    
})

// update experience
router.post('/update-experience',async(req,res)=>{
    try{
        const experience = await Experience.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        );
        res.status(200).send({
            data:experience,
            success:true,
            message:"Experience Updated Successfully"
        })
    }catch(err){
        res.status(500).send(err)
    }
})

// delete experience
router.post('/delete-experience',async(req,res)=>{
    try{
        const experience = await Experience.findOneAndDelete(
            {_id:req.body._id},
        );
        res.status(200).send({
            data:experience,
            success:true,
            message:"Experience Deleted Successfully"
        })
    }catch(err){
        res.status(500).send(err)
    }
})
// add project
router.post('/add-project',async(req,res)=>{
    try{
        const project = new Project(req.body);
        await project.save()
        res.status(200).send({
        data:project,
        success:true,
        message:"Project added Successfully"
    })
    }catch(err){
        res.status(500).send(err)
    }
    
})

// update project
router.post('/update-project',async(req,res)=>{
    try{
        const project = await Project.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        );
        res.status(200).send({
            data:project,
            success:true,
            message:"Project Updated Successfully"
        })
    }catch(err){
        res.status(500).send(err)
    }
})

// delete project
router.post('/delete-project',async(req,res)=>{
    try{
        const project = await Project.findOneAndDelete(
            {_id:req.body._id},
        );
        res.status(200).send({
            data:project,
            success:true,
            message:"Project Deleted Successfully"
        })
    }catch(err){
        res.status(500).send(err)
    }
})

// add services
router.post('/add-service',async(req,res)=>{
    try{
        const service = new Service(req.body);
        await service.save()
        res.status(200).send({
        data:service,
        success:true,
        message:"Service added Successfully"
    })
    }catch(err){
        res.status(500).send(err)
    }
    
})

// update service
router.post('/update-service',async(req,res)=>{
    try{
        const service = await Service.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        );
        res.status(200).send({
            data:service,
            success:true,
            message:"Service Updated Successfully"
        })
    }catch(err){
        res.status(500).send(err)
    }
})

// delete project
router.post('/delete-service',async(req,res)=>{
    try{
        const service = await Service.findOneAndDelete(
            {_id:req.body._id},
        );
        res.status(200).send({
            data:service,
            success:true,
            message:"Service Deleted Successfully"
        })
    }catch(err){
        res.status(500).send(err)
    }
})

// update contacts
router.post('/update-contact',async(req,res)=>{
    try{
        const contact = await Contact.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        );
        res.status(200).send({
            data:contact,
            success:true,
            message:"Contact Updated Successfully"
        })
    }catch(err){
        res.status(500).send(err)
    }
})

// admin login
router.post('/admin-login',async(req,res)=>{
    try{
        const user = await User.findOne({
            username:req.body.username,
            password:req.body.password
        })
        user.password =""
        if(user){
            res.status(200).send({
                data:user,
                success:true,
                message:"Login Successfully"
            })
        }else{
            res.status(200).send({
                data:user,
                success:false,
                message:"Please Enter Valid Details"
            })
        }
    }
    catch(error){
        res.status(500).send(error)
    }
})

module.exports = router;
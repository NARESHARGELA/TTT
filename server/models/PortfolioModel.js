const mongoose = require('mongoose');

const introSchema = new mongoose.Schema({
    welcomeText:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true,
    },
    caption:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    }
});

const aboutSchema = new mongoose.Schema({
    lottieurl:{
        type:String,
        required:true
    },
    description1:{
        type:String,
        required:true,
    },
    description2:{
        type:String,
        required:true,
    },
    skills:{
        type:Array,
        required:true
    }
});

const experienceSchema = new mongoose.Schema({
    title:{
        type:String,
        requied:true
    },
    period:{
        type:String,
        requied:true
    },
    company:{
        type:String,
        requied:true
    },
    description:{
        type:String,
        required:true
    }
});

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        requied:true
    },
    description:{
        type:String,
        requied:true,
    },
    image:{
        type:String,
        requied:true
    },
    link:{
        type:String,
        requied:true,
    },
    technologies:{
        type:Array,
        requied:true
    }
});

const serviceSchema = new mongoose.Schema({
    title:{
        type:String,
        requied:true,
    },
    description:{
        type:String,
        requied:true,
    },
    image:{
        type:String,
        requied:true,
    },
    link:{
        type:String,
        requied:true,
    }
});

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        requied:true,
    },
    email:{
        type:String,
        requied:true,
    },
    mobile:{
        type:Number,
        requied:true,
    },
    age:{
        type:Number,
        requied:true,
    },
    country:{
        type:String,
        requied:true,
    },
    gender:{
        type:String,
        requied:true
    }
});

module.exports = {
    Intro: mongoose.model('intros', introSchema),
    About: mongoose.model('abouts', aboutSchema),
    Experience: mongoose.model('experiences', experienceSchema), // Corrected spelling
    Project: mongoose.model('projects', projectSchema),
    Service: mongoose.model('services', serviceSchema),
    Contact: mongoose.model('contacts', contactSchema),
};

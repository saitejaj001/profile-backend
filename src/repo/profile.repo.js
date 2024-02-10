const skillSchema = require("./models/SkillsSchema");
const profileRepo = require("./index")
const mongoose = require("mongoose")

const getAllSkills = async () => {
   const SkillModel = mongoose.model("skills", skillSchema)
    return SkillModel.find()
};

module.exports= {
    getAllSkills
}

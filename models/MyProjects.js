import mongoose from 'mongoose';

const { Schema } = mongoose;

const MyProjectsSchema = new Schema({
  Id: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  SkillsUsed: {
    type: [String],
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
  image3: {
    type: String,
    required: true,
  },
  image4: {
    type: String,
    required: true,
  },
  step1: {
    type: String,
    required: true,
  },
  step2: {
    type: String,
    required: true,
  },
  step3: {
    type: String,
    required: true,
  },
  step4: {
    type: String,
    required: true,
  },
});

const MyProjects = mongoose.model('myProjects', MyProjectsSchema);

export default MyProjects;

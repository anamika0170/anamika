import mongoose from 'mongoose';

const { Schema } = mongoose;

const MyDetailsSchema = new Schema({
  Description: {
    type: String,
    required: true,
  },
  Designation: {
    type: [String],
  },
  Name: {
    type: String,
  },
  technicalSkills: {
    type: [String],
  },
  image: {
    type: String,
  },
  // Add more fields here as needed
});

const MyDetails = mongoose.model('MyDetails', MyDetailsSchema);

export default MyDetails;

import mongoose from 'mongoose';

const { Schema } = mongoose;

// Define the contact schema
const contactSchema = new Schema({
  name: String,
  email: String,
  message: String,
});

// Define the Contact model using the schema
const Contact = mongoose.model('Contact', contactSchema);

// Export the Contact model so that it can be used in other parts of the application
export default Contact;

  


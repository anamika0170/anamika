import mongoose from 'mongoose';

const { Schema } = mongoose;

const SocialLinksSchema = new Schema({
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  // Add more fields here as needed
});

const SocialLinks = mongoose.model('socialLinks', SocialLinksSchema);

export default SocialLinks;

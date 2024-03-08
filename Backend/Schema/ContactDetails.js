const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  complaintText: {
    type: String,
    required: true,
  },
  // You can add more fields related to complaints if needed
});

const contactDetailsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobilenumber: {
    type: String,
    required: true,
  },
  queries: {
    type: [String], // This makes 'queries' an array of strings
    default: [], // Default value is an empty array
  }, // Array of complaints associated with this contact
});

const Contact = mongoose.model("Contact", contactDetailsSchema);
module.exports = Contact;

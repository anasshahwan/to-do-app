
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  _id:mongoose.Schema.Types.ObjectId,
  taskDescription:{type:String, required: true},
  isComplete: {type:Boolean, default:0},
 user_id: { type: Schema.Types.ObjectId, ref: 'User' }

});

module.exports = mongoose.model("Task", TaskSchema);

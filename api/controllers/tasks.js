const Task = require('../models/task');
const mongoose = require('mongoose');


exports.get_all_task =  (req,res,next) => {



  Task.find()
    .select("isComplete taskDescription _id")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        Tasks: docs.map(doc => {
          return {
            _id: doc._id,
            request: {
              type: "GET",
              taskDescription: doc.taskDescription,
              user_id:doc.user_id,
              isComplete:doc.isComplete,
              url: "http://localhost:3001/tasks/" + doc._id
            }
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });

}// Get all Task


exports.get_taskById= (req,res,next) => {

  const id = req.params.taskId;
    Task.findById(id)
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });




}// End get_taskById



 exports.updateTask= (req,res,next) => {

  const id = req.params.taskId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    Task.update({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        res.status(200).json({
          message: 'Task updated',
          request: {
              type: 'PATCH',
              url: 'http://localhost:3000/Tasks/' + id
          }
      });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });


}// End Update Task



exports.deleteTask = (req,res,next) => {
const id = req.params.taskId;

Task.remove({ _id: id })
 .exec()
 .then(result => {
   res.status(200).json({
          message: 'Task deleted',
          request: {
              type: 'POST',
              url: 'http://localhost:3001/Tasks',
              body: { taskDescription: 'String', isComplete: 'Boolean' }
          }
      });
    })
 .catch(err => {
   console.log(err);
   res.status(500).json({
     error: err
   });
 });



}// end Delete Task




exports.addTask =  (req, res, next) => {

  const task = new Task({
    _id: new mongoose.Types.ObjectId(),
    taskDescription: req.body.taskDescription,
    user_id:req.body.user_id

  });
  task
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created Task successfully",
        createdTask: {
            taskDescription: result.taskDescription,
            id_user:result.id_user,
            isComplete: result.isComplete,
            _id: result._id,
            request: {
                type: 'POST',
                url: "http://localhost:3000/Task/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}// add New Task

const router = require("express").Router();
const Workout = require("../models/workout");

// Requiring our Todo model

// Routes

  // GET route for getting all of the todos
  router.get('/api/workouts', (req, res) => {
    // findAll returns all entries for a table when used with no options
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" } ,
   
        }
      },
   ]).then((dbWorkout) => res.json(dbWorkout));
  });
  router.get('/api/workouts/range', (req, res) => {
    // findAll returns all entries for a table when used with no options
    Workout.aggregate([
   {
     $addFields: {
       totalDuration: { $sum: "$exercises.duration" } ,

     }
   },
] ).limit(7).then((dbWorkout) => res.json(dbWorkout));
  });

  // POST route for saving a new todo
 router.post('/api/workouts', (req, res) => {
    console.log(req.body);
    // Create takes an argument of an object describing the item we want to
    // Insert into our table. We pass in an object with a text and complete property.
    Workout.create({
    }).then((dbWorkout) => res.json(dbWorkout));
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  router.delete('/api/workouts/:id', (req, res) => {});

  // PUT route for updating todos. We can get the updated todo from req.body
  router.put('/api/workouts/:id', (req, res) => {
    Workout.findOneAndUpdate({_id:req.params.id}, { $push: { exercises: req.body } }, { new: true })
    .then(dbLibrary => {
      res.json(dbLibrary);
    })
    .catch(err => {
      res.json(err);
    });

  });



module.exports = router;
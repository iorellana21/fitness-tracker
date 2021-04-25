const Workout = require("../models/workout");

module.exports = function (app) {
    // grab all workouts logged
    app.get("/api/workouts", (req, res) => {
        Workout.find({}).then((workout) => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        })
    });

    // create new workout in db
    app.post("/api/workouts", (req, res) => {
        Workout.create({}).then((workout) => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        })
    });


    app.put("/api/workouts/:id", (req, res) => {
        // pushing updated exercise into array through the value of req.body 
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } },
            {
                new: true,
                runValidators: true
            }).then((workout) => {
                res.json(workout);
            }).catch((err) => {
                res.json(err);
            })
    })

    // getting all workouts in range - limit 5
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}).limit(5).then((workout) => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        })
    });
};
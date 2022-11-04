const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
	{
		setup: {
			type: String,
			required: [true, 'Joke setup is required'],
			minlength: [10, 'Joke setup must have at least 10 characters log']
		},
		punchline: {
			type: String,
			required: [true, 'Joke setup is required'],
			minlength: [3, 'Joke setup must have at least 3 characters log']
		},
	},
	{ timestamps: true }
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;

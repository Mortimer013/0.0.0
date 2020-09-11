const bcrypt = require('bcrypt')
const {
	UserInputError,
	AuthenticationError
} = require('apollo-server')
const jwt = require('jsonwebtoken')

const User = require('../models/user');
const {
	JWT_SECRET
} = require('../config/env.js')

const resolvers = {
	Query: {
		QUERY: async (parent, args) => {
			let {
				var
			} = args
			let errors = {}

			try {
				// Validate input data
					//Throw errors
				//Find data
					//Compare Hash
					//Set Token
				//Return data
			} catch (err) {
				throw err
			}
		},
	},
	Mutation: {
		MUTATION: async (parent, args) => {
			let {
				var
			} = args
			let errors = {}

			try {
				// Validate input data
					//Throw errors
				//Create data
					//Hash password
					//Define mongoose object
				//Save data
				//Return data
			} catch (err) {
				throw new UserInputError('bad input', {
					errors: err
				})
			}
		},
	},
}

module.exports = resolvers;
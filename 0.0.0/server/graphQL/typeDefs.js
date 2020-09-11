const {
	gql
} = require('apollo-server')

const typeDefs = gql `
    #Must be changed
	type User {
		id: ID
		name: String!
		token: String
	}
	type Query {
		login(name: String!, password: String!): User!
	}
	type Mutation {
		register(
			name: String!
			password: String!
			confirmPassword: String!
		): User!
	}
`;

module.exports = typeDefs;
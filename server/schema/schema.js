const graphql = require('graphql');
const _=require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data 
let books = [
    {name:'Book 1', genre: 'Fantasy', id: '1'},
    {name:'Book 2', genre: 'Fantasy', id: '2'},
    {name:'Book 3', genre: 'Sci-Fi', id: '3'},
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args){
                // code to ger data from db / other source
                return _.find(books,{id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({ //module.exports error
    query: RootQuery,
})
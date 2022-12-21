const express = require('express');
const { graphqlHTTP } = require('express-graphql'); //destructuring error
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true //graphiql ui 
}));

const PORT = 4000;
app.listen(PORT,() => {
    console.log("server running at PORT 4000")
});
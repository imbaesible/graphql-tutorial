const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// app.use('/graphql', graphqlHTTP({

// }));

const PORT = 4000;
app.listen(PORT,() => {
    console.log("server running at PORT 4000")
});
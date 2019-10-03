# Markdown File

This is a markdown file...

```javascript
import express from 'express';
import cors from 'cors';
import express_graphql from 'express-graphql';
import { buildSchema } from 'graphql';
import typedefs from './typedefs';
import * as rootValue from './resolvers';

const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;
const schema = buildSchema(typedefs);

app.use('/graphql', cors(), express_graphql({
  schema,
  rootValue,
  graphiql: env === 'development',
}));

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
```

```sql
SELECT * 
FROM Users 
WHERE id = 34567
```
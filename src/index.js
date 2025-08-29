const express = require('express');
const app = express();
const arrayRoutes = require('./routes/arrayRoutes');

app.use(express.json()); 


app.use('/', arrayRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
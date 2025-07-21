// built-in middleware
app.use(express.json()); 

// Custom middleware
app.use((req, res, next) => {
  console.log('Request received');
  next();
});

app.get('/users', getUsers);
app.post('/users', addUser);
// updating user with all args
app.put('/users/:id', updateUser);
// updating only one parameter
app.patch('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

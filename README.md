# password manager server - backend

## ini adalah back end untuk membuat password manager sederhana

**description**
<br/>
This is the back end side for the password manager application where this application is for storing password lists on websites that we visit such as google accounts, facebook, etc.

## running test
- please running first using "npm run create-db-test"
- after that running "npm run test"

## running app 
- please running first using "npm run create-db-dev"
- after that running "npm run dev"

> NB : if you use a non-window OS, please configure the script in package.json according to your running terminal OS.

**table diagram**
```
table-diagram.png
```

**routing API**
- POST "/register" - register new user 
- POST "/login" - login user
- GET "/passwords" - get All password list by user login
- GET "/paswords/:id" - get password by iD
- POST "/paswords" - craete new password
- PUT "/paswords/:id" - update password by ID
- DELETE "/paswords/:id" - delete password by ID
 
## documentation API
```
https://documenter.getpostman.com/view/14053238/Tzeaj63D
```

**STACKS USED**
- node.js
- express
- sequelize (ORM)
- postgresql
- jsonwebtoken
- redis (cache)
- jest (testing)
- supertest (Testing)



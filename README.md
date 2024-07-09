## Node.js project folder-structure

### 0: Starting from Rails

This is the reference point.  All the other options are based off this.

```
|-- app
|   |-- controllers
|   |   |-- admin
|   |   |   `-- usersController.js
|   |   |-- postsController.js
|   |-- models
|   |   `-- user.js
|   |-- views
|   |   |-- admin
|   |   |   `-- posts
|   |   |       |-- edit.jade
|   |   |-- layouts
|   |   |   `-- application.jade
|   |   `-- posts
|   |       |-- index.jade
|   `-- helpers
|       |-- admin
|       |   |-- postsHelper.js
|       `-- postsHelper.js
`-- config
|    |-- application.js
|    |-- locale
|        `-- en.js
|    |-- routes.js
`-- lib
`-- spec
|    |-- helper.js
|    |-- models
|    |   |-- postSpec.js
|    |   |-- userSpec.js
|    `-- acceptance
|        |-- loginSpec.js
|        |-- signupSpec.js
|        `-- postsSpec.js
`-- vendor
|    |-- javascripts
|    |   |-- jquery.js
|    |   |-- underscore.js
|    `-- stylesheets
|        `-- prettyPhoto.css
```

### 1: Rails-like, with nested `/app` folders for client, mobile, etc.

```
|-- app
|   |-- controllers
|   |-- models
|   |-- views
|   `-- browser
|       |-- controllers
|       |-- models
|       |-- views
|   `-- mobile
|       |-- controllers
|       |-- models
|       |-- views
`-- config
`-- lib
`-- spec
`-- vendor
```

### 2: A `/app/client` folder, similar to Rails' `/app/assets`

```
|-- app
|   |-- controllers
|   |-- models
|   |-- views
|   `-- client
|       `-- browser
|           |-- controllers
|           |-- models
|           |-- views
|       `-- mobile
|           |-- controllers
|           |-- models
|           |-- views
`-- config
`-- lib
`-- spec
`-- vendor
```

You could also have this structure if you only had 1 client (or just a default client):

```
|-- app
|   |-- controllers
|   |-- models
|   |-- views
|   `-- client
|       |-- controllers
|       |-- models
|       `-- views
```


### 3: More top-level folders

```
|-- app
|   |-- controllers
|   |-- models
|   |-- views
|-- browser
|   |-- controllers
|   |-- models
|   |-- views
|-- mobile
|   |-- controllers
|   |-- models
|   |-- views
`-- config
`-- lib
`-- spec
`-- vendor
```

### 4: Namespaces inside `/app`

```
|-- app
|   `-- client
|       |-- controllers
|       |-- models
|       |-- views
|   `-- mobile
|       |-- controllers
|       |-- models
|       |-- views
|   `-- server
|       |-- controllers
|       |-- models
|       |-- views
`-- config
`-- lib
`-- spec
`-- vendor
```

### 5: Top-level `/client` and `/server` directories

```
|-- client
|   |-- controllers
|   |-- models
|   |-- views
|-- server
|   |-- controllers
|   |-- models
|   |-- views
`-- config
`-- lib
`-- spec
`-- vendor
```

### 6: Front-end & Back-end separation

```
|-- src
|   |-- public (Front-end)
|         |-- app (AngularJS App - See 6.1 for details)
|               |-- components
|                     |-- home
|                           |-- homeController.js
|                           |-- homeController.spec.js
|                           |-- homeView.html
|               |-- shared
|                     |-- sidebar
|                           |-- sidebarDirective.js
|                           |-- sidebarDirective.spec.js
|                           |-- sidebarView.html
|         |-- assets
|               |-- css
|               |-- fonts
|               |-- img
|               `-- ...
|         |-- index.html
|   |-- server (NodeJs)
|         |-- bin
|         |-- config
|         |-- controllers
|         |-- lib
|         |-- models
|         |-- routes
|         |-- tests
|         |-- views
|-- .gitignore
|-- package.json
|-- gulpfile.js
|-- mocha.config.js
```
### 6.1: Angular JS directory structure

Source: http://scotch.io/tutorials/javascript/angularjs-best-practices-directory-structure

```
app/
----- shared/   // acts as reusable components or partials of our site
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.html
---------- article/
--------------- articleDirective.js
--------------- articleView.html
----- components/   // each component is treated as a mini Angular app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.html
---------- blog/
--------------- blogController.js
--------------- blogService.js
--------------- blogView.html
----- app.module.js
----- app.routes.js
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
----- libs/     // Third-party libraries such as jQuery, Moment, Underscore, etc.
index.html
```

### 7: Mean.io structure

Git repo: https://github.com/linnovate/mean

![Mean.io NodeJS folder structure image](http://i.stack.imgur.com/gITXI.png "Mean.io structure")

### 8: Angular-seed + Express

Git repo: https://github.com/btford/angular-express-seed

![Angular-seed + Express folder structure image](http://i.stack.imgur.com/nuPjo.png "Angular-seed structure")
# PluralsightNodeJSPath
Node.js course serial. See [link](https://app.pluralsight.com/paths/skill/node-js). <br />

## Beginner: Learning To Program - Part 1: Getting Started
Basic JavaScript with Node.js. See [link](https://app.pluralsight.com/library/courses/learning-programming-javascript/table-of-contents). <br />
### Requirements
```
sudo apt-get install nodejs-legacy
sudo apt-get install npm
sudo npm install nodeunit -g
npm install express -g
export NODE_PATH="/usr/local/lib/node_modules"
```

### Exercises
 - Module 2:
 ```
 nodejs module2ex_program.js 4
 ```
 - Module 3:
 ```
 nodejs module3ex_program.js
 ```
 - Module 4:
 ```
 nodejs module4ex_program.js
 ```
 - Module 5:
 ```
 nodejs module5ex_program.js
 ```
 - Module 6:
 ```
 nodejs module6ex_program.js
 ```
 - Module 7:
 ```
 nodeunit tests/module7ex_gradeTests.js
 nodejs module7ex_program.js 100 91 85
 ```
 - Module 8:
 ```
 nodeunit tests/module8ex_gradeTests.js
 nodejs module8ex_program.js
 localhost:3000/grade?grades=100,90,80,95
 lsof -t -i:3000
 sudo kill -9 processID
 ```
## Beginner: NPM Playbook
Basic instuction of the NPM in Node.js. See [link](https://app.pluralsight.com/library/courses/npm-playbook/table-of-contents). <br />
### Requirements
npm and nodejs installed on the machine. <br />
### Exercises
No exercise for this course. <br />

## Beginner: Building a JavaScript Development Environment
Environment setting for JavaScript development. See [link](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents). <br />
### Requirements
### Exercises
 - Module 2: JavaScript editor, use visual studio code. <br />
 - Module 3: Choose NPM as Node.js package manager. "nsp check" for vulnerability checks. <br />
 - Module 4: Development WebServer, choose Express. Share the work in progress, use localtunnel (Other options are: ngrok, now, surge). <br />
 - Module 5: Task Automation. Use npm script (Other options are: Grunt, Gulp). <br />
 - Module 6: Transpiling, translate and compile to latest JS version (like ES5 to ES6), and then compile. Use Babel (Other options are: TypeScript, Elm). <br /> 
 - Module 7: Bundling, bundle npm packages into a format that browser can consume. Format choices: CommonJS (for Node.js) or ES6 module Choose Webpack (Ohter options are: browserify, Rollup, JSPM) as bundler. Use sourcemap to debug the bundled code. <br />
 - Module 8: Linting, debugging tools for typo, suspicious structure, etc. Use ESLint. <br />

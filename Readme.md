* Javascript is Dynamic

### installation , Dependencies

* initialize the project npm init -y
* check the available global packages that you have
   using npm list --global or -g 

    output:- 
       
/home/nobodyknows/.nvm/versions/node/v16.16.0/lib
├── corepack@0.10.0
├── nodemon@2.0.22
├── npm@8.11.0
├── pm2@5.3.0
├── stylus@0.59.0
└── typescript@5.0.

 *  typescript is globally installed 
 *   if typescript is not globally installed 
       npm i  -g typescript 

 *  install tsc as a Developer dependency
     npm install tsc -D      

  *  create a src folder 
  *  create file name with extension .ts inside src folder
  *   add  script inside the package.json file as we write for nodemon

         "server":"tsc src/filename.ts"  

  *   write some code inside the filename.ts  ex. console.log("something")
     run the  script  npm run server

 *    if everything works fine it will create a new js file with same name



 *   one can also run tsc src/filename.ts its also transpile
 *   transpliler  compile  code ===> code 
        typescript ===> javascript

 *  Typescript enables developers to add type saftey to their projects 
 
        
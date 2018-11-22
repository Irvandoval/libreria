# Libreria
Boilerplate project for making libraries using React.js.


## Features
* React 16.
* Webpack 4.
* Babel 7.
* ESLint
* Testing with Jest.
* Hot Module Replacement.
* Library is exported as [umd](https://github.com/umdjs/umd).


## Getting Started

#### Installation
*  Clone this repo with `git clone git@github.com:mavriciomart/libreria.git`.
* `cd libreria`.
* Install dependencies with `npm install`.


#### Set up
* The file name for the library is defined in `constants.js` so you just have to open it and change the `libraryName` field.


#### Running a Development Server  
* Run  `npm run start`. This command will run a watcher so your code compiles on file changes.
    * The _demo_ folder is just a way to test your library on your dev environment. So you must set the library import according to your needs.


## Building for deployment
* Run `npm run build` to produce a minified version of your library that is saved on the _dist_ folder.

# ustwo_fe-web-engineer
A short test project for Front End Web Engineer

## Quick start

### Install dependencies:

```
    npm install
```

### Run the tests (you'll need phantomjs installed):

```
    npm test
```

Note, the tests don't care about styles so this won't try to compile css.


### Compile and run

```
    npm start
```

Open [http://localhost:8080](http://localhost:8080) in a browser.

### Dev mode

```
    npm run dev
```

This will:
- run the server on a port which does not clash with tests or main server.
- open the page in your default browser.
- compile sass and watch for changes.

## Self assessment

### A babel tangent

I let myself get distracted by wanting to show cool stuff rather than getting the
simplest thing that could possibly work. I would have liked an opportunity to show
some ES6 etc. but this can task really be done in just a couple of lines of plain
old es5.

### bash and npm over grunt / gulp

Normally I'd be linting, transpiling, concatenating (or bundling) and minifying
my JS and doing similar mangling of the html and styles to save every bite. In
this case, the JS file is just 20 lines, the html not much more and I'm really only
compiling the SCSS because it was a requirement. I thought I'd keep it simple.

> Look ma, only three dependencies!

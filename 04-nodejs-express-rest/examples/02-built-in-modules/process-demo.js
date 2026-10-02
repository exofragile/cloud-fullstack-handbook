// Try:  node process-demo.js hello
//       NODE_ENV=development node process-demo.js hello           (macOS / Linux)
//       $env:NODE_ENV="development"; node process-demo.js hello   (Windows PowerShell)
console.log(process.argv);
// [ '/usr/bin/node', '/path/process-demo.js', 'hello' ]

console.log(process.env.NODE_ENV);
// e.g. 'development', or undefined if it isn't set

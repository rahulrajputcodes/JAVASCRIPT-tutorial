// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// - to avoid global scope pollution and immediately invoke function call

// function hello() {
//     console.log('DB CONNECTED');
// }
// hello()


// ()() -- first one is function definition , second is function execution

// named iife
(function hello() {
    console.log('DB CONNECTED');
})();                                            // semicolon ; is needed to stop the execution call if two iife are used

// simple iife
((name) => {
    console.log(`DB CONNECTED 2 ${name} `);
})("rahul");      
t process = require('process');



const args = process.argv.slice(2);



if (args[0] === undefined) {

  console.log('No argument');

} else {

  console.log('Argument found');

}
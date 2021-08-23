const bcrypt = require('bcrypt');
async function run() {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash('1234567890', salt);
  console.log(salt);
  console.log(hashed);
}

run();

//salt
//hashing- you provide the data, salt
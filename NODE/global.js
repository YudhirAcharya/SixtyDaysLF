const fs = require('fs');

fs.mkdir('./new', (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Directory created");

    
    setTimeout(() => {
      fs.rmdir('./new', (err) => {
        if (err) {
          throw err;
        } else {
          console.log("Directory removed");
        }
      });
    }, 5000);
  }
});

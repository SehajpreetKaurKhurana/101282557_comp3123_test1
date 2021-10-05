//Sehajpreet Kaur Khurana , 101282557 , Question3

//2.Create Log Files
const fs = require("fs");

const createLogs = () => {
  const target = "./logs";
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  process.chdir(target);
  for (let i = 0; i < 10; i++) {
    fs.writeFile(`log${i}.txt`, ` log file # ${i}`, (err) =>
      err ? console.error(`Error creating file 'log${i}.txt'`) : console.log(` log${i}.txt`)
    );
  }
};

// 1. Remove Log Files 
const removeLogs = () => {
  const target = "./logs";
  if (fs.existsSync(target)) {
    process.chdir(target);
    fs.readdir(process.cwd(), (err, files) => {
      files.forEach((file) => {
        fs.unlink(file, (err) =>
          err ? console.error(`Error deleting file '${file}'`) : console.log(`delete files...${file}`)
        );
      });
    });
  }
};

createLogs();
//removeLogs();
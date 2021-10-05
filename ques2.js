//Sehajpreet Kaur Khurana , 101282557 , Question2

//Created a method resolvedPromise that is similar to delayedSuccess
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve({ message: "delayed success!" }), 500);
  });
//Created a method rejectedPromise that is similar to delayedException
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(reject({ error: "delayed exception!" }), 500);
  });

  //Called both promises separately and handle the resolved and reject results and then output to the console
resolvedPromise().then((msg) => console.log(msg));
rejectedPromise().catch((msg) => console.error(msg));

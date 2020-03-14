//Example
//Aborting API calls made using fetch

//fake REST api with a delay
const API = "https://reqres.in/api/users?delay=4";

const make = document.querySelector("#make");
const abort = document.querySelector("#abort");

//abort controller
let controller = null;

//listen to abort event
// signal.addEventListener('abort', () => {
//   // Logs true:
//   console.log(signal.aborted);
// });

const makeCall = () => {
  //console.log("make call");
  controller = new AbortController();
  let signal = controller.signal;
  fetch(API, { signal })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("Response Data: ", res);
    })
    .catch(err => {
      //promise rejections
      console.log("error: ", err.name);
    });
};

const abortCall = () => {
  //console.log("abort call");
  controller && controller.abort();
};

make.addEventListener("click", makeCall, false);
abort.addEventListener("click", abortCall, false);

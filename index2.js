const {nextISSTimesForMyLocation} = require('./iss_promised');

const printPass = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date();
    datetime.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${datetime} for ${pass.duration} seconds.`);
  }
};
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPass(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });




const ejs = require('ejs');
// const {
  // DRONE_REPO_OWNER,
  // DRONE_REPO_NAME,

  // DRONE_COMMIT_SHA,
  // DRONE_COMMIT_BRANCH,
  // DRONE_COMMIT_LINK,
  // DRONE_COMMIT_AUTHOR,
  // DRONE_COMMIT_AUTHOR_EMAIL,

  // DRONE_BUILD_NUMBER,
  // DRONE_BUILD_STATUS,
  // DRONE_BUILD_EVENT,
  // DRONE_BUILD_LINK,

  // DRONE_TAG,
  // DRONE_JOB_STARTED,
  // DRONE_JOB_FINISHED,
// } = process.env;

exports.format = message => {
  const DRONE = {};
  for(const key in process.env) {
    if(!/^DRONE_/.test(key)) {
      continue;
    }
  
    const indexs = key.toLowerCase().split('_');
    const lastIndex = indexs.pop();
    indexs.shift();
  
    let drone = DRONE;
    for(const index of indexs) {
      if(!drone[index]) {
        drone[index] = {};
        drone = drone[index];
      }
    }
    drone[lastIndex] = process.env[key];
  }
  return ejs.render(message, DRONE);
}
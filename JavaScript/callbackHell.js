const database =  {
    user: { id: 1, name:"Alice"},
    permissions: ["read", "write"],
};

function loginUser(id, callback) {
    console.log("1. Fetching user...");
    setTimeout(()=> {
        if( id===1 ) {
            callback(null, database.user);
        } else {
            callback("User not found", null);
        }
    },500);
}

function getPermissions(user, callback) {
    console.log(`2. Getting permissions for ${user.name}...`);
    setTimeout(()=> {
        callback(null, database.permissions);
    },500);
}

function logAccess(action, callback) {
    console.log(`3. Logging action: ${action}...`);
    setTimeout(()=> {
        callback(null, "Success");
    },500);
}
// THE HELL:
loginUser(1, (err, user) => {
  if (err) {
    console.error(err);
  } else {
    getPermissions(user, (err, perms) => {
      if (err) {
        console.error(err);
      } else {
        logAccess("Login", (err, status) => {
          if (err) {
            console.error(err);
          } else {
            console.log("Done!", status);
          }
        });
      }
    });
  }
});
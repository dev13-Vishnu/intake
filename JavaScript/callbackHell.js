// const database =  {
//     user: { id: 1, name:"Alice"},
//     permissions: ["read", "write"],
// };

// function loginUser(id, callback) {
//     console.log("1. Fetching user...");
//     setTimeout(()=> {
//         if( id===1 ) {
//             callback(null, database.user);
//         } else {
//             callback("User not found", null);
//         }
//     },500);
// }

// function getPermissions(user, callback) {
//     console.log(`2. Getting permissions for ${user.name}...`);
//     setTimeout(()=> {
//         callback(null, database.permissions);
//     },500);
// }

// function logAccess(action, callback) {
//     console.log(`3. Logging action: ${action}...`);
//     setTimeout(()=> {
//         callback(null, "Success");
//     },500);
// }
// // THE HELL:
// loginUser(1, (err, user) => {
//   if (err) {
//     console.error(err);
//   } else {
//     getPermissions(user, (err, perms) => {
//       if (err) {
//         console.error(err);
//       } else {
//         logAccess("Login", (err, status) => {
//           if (err) {
//             console.error(err);
//           } else {
//             console.log("Done!", status);
//           }
//         });
//       }
//     });
//   }
// });

// function stepOne (data, callback) {
//     setTimeout(()=> {
//         const result = data + "step 1 done";
//         console.log(result);
//         callback(result);
//     },1000);
// }

// function stepTwo(data, callback) {
//     setTimeout(() => {
//         const result = data + "step 2 done";
//         console.log(result);
//         callback(result);
//     })
// }


// stepOne("begin",(result)=> {
//     stepTwo(result, (final)=> {
//         console.log(final);
//     })
// })

// function doTask(name, callback) {
//     setTimeout(() => {
//         console.log(`Finished ${name}...`);
//         callback(null, `Data from ${name}`);
//     },500);
// }

// doTask("Verify user", (err, user) => {
//     console.log(user);
//     if(err) return console.error(err);
//     doTask("Fetch Permissions",(err,perms) => {
//         console.log(perms);
//         if(err) return console.error(err);
//         doTask("Access Dashboard",(err,result) => {
//             console.log(result);
//             if(err) return console.error(err);
//             console.log("Success ! All steps compleate.");
//         });
//     });
// });

function doTask(name, callback) {
    setTimeout(() => {
        console.log(`Finished ${name}...`);
        callback(name);;
    }, 500);    
}

doTask("Verify user", (name) => {
    console.log(name);
    doTask("Fetching Permissions",(name) => {
        console.log(name);
        doTask("Access Dashboard",(name)=> {
            console.log(name);
            console.log("Success! All steps complete.");
        });
    });
});
// const getUserPromise = (id) => {
//     return new Promise((resolve,reject) => {
//         console.log("1. Fetching user...");
//         setTimeout(() => {
//             id === 1? resolve({id: 1, name: "Alice" }) : reject("User not found");
//         },500);
//     });
// };

// const  getPermsPromise = (user) => {
//     return new Promise ((resolve)=> {
//         console.log(`2. Getting permission for ${user.name}...`);
//         setTimeout(()=>{
//             resolve(["read", "write"])
//         },500);
//     });
// };

// const logActionPromise  = (action) => {
//         console.log(`3. Logging action: ${action}...`);
//     return new Promise((resolve) => {
//         setTimeout(()=> {
//             resolve("Log Entry Created");
//         },500);
//     });
// };

// async function runAuthFlow() {
//     try {
//         const user = await getUserPromise(1);
//         const perms =  await getPermsPromise(user);
//         const status = await logActionPromise("Login");

//         console.log("Flow compleate", status);
//         console.log("User Permissions:", perms);

//     } catch (error) {
//         console.error("Flow failed:", error);
//     }
// }

// runAuthFlow();

const getUserPromise = (id) => {
    return new Promise ((resolve, reject)=> {
        console.log("1.Getting User...");
        setTimeout(()=> {
            id === 1 ? resolve({
            id: 1,
            name: "Alice"
        }) : reject ("User not found");
        },500);
    });
};

const getPermsPromise = (user) => {
    return new Promise((resolve) => {
        console.log(`2. Getting permissions for ${user.name}....`);
        setTimeout(()=> {
            resolve(["read", "write"]);
        },500);
    });
};

const logActionPromise = (action) => {
    return  new Promise((resolve) =>  {
        setTimeout(() => {
            resolve("Login created");
        },500);
    });
}


async function runAuthFlow() {
    try {
        
    const user = await getUserPromise (2);
    const perms = await getPermsPromise(user);
    const status = await logActionPromise("Login");

    console.log("Flow complated", status);
    console.log("User Permissions", perms);
    } catch (error) {
        console.log("Flow Failed:", error);
    }
}

runAuthFlow();
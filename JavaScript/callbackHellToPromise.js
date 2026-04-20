function doTask(name, callback){
    setTimeout(()=> {
        // console.log(name);
        callback(name);
    },500);
}

// doTask("Verify user",()=> {
//     doTask("Fetching Permissions",()=> {
//         doTask("Dashboard Access",()=> {
//             console.log("Success all steps  done");
//         });
//     });
// });


const taskPromise = (name)=> {
    return new Promise((resolve, reject)=> {
        doTask(name, (data)=> {
            resolve(data);
        });
    });
}   

taskPromise("Verify User")
.then((data)=> {
    console.log(data);
return taskPromise("Fetch Permissions");
})
.then((data)=> {
    console.log(data);
    return   taskPromise("Access DashBoard");
})
.then((data) => {
    setTimeout(() => {
    console.log(data)
    console.log("Success");
    }, 500);
})
.catch((err)=> console.error(err));
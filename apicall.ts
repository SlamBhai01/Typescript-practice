type ApiType = {
    userId: string,
    id: number,
    title: string,
     completed: boolean
}
async function apicallhandling():Promise<ApiType> {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await result.json();
    // console.log(data);
    return data;
}

// console.log(apicallhandling());
apicallhandling().then((data:ApiType)=>{
    console.log(data);
})
apicallhandling().catch((e)=>{
     console.log("please error check"+e);
})
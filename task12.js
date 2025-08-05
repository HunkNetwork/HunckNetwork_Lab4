const todos = [{
    id: 1, description: "Buy gloceries",
    dueDate : "2025-08-05", done : false,
    priority : "high", createdAt : "2025-08-01T09:00:00Z"
},
{
    id: 2, description: "finish js assignment",
    dueDate : "2025-08-06", done : false,
    priority : "medium", createdAt : "2025-08-06T14:30:00Z"
},
{
    id: 3, description: "call plumber",
    dueDate : "2025-08-04", done : true,
    priority : "high", createdAt : "2025-08-04T16:45:00Z"
},
{
    id: 4, description: "book doctor appointment",
    dueDate : "2025-08-08", done : false,
    priority : "low", createdAt : "2025-08-03T11:15:00Z"
},
{
    id: 5, description: "clean the gurage",
    dueDate : "2025-08-10", done : false,
    priority : "medium", createdAt : "2025-08-03T18:20:00Z"
}]

todos.forEach(el => {
    console.log(`description : ${el.description}
    dueDate : ${el.dueDate}`)
});

Done = todos.filter(el => el.done === true)

search = todos.find( el => el.description === "clean the gurage")

console.log(Done)
console.log(search)
const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    descreption: zod.string()
})

const updateTodo = zod.object({
    id:zod.string()
})   

module.exorts={
    createTodo: createTodo,
    updateTodo: updateTodo
}

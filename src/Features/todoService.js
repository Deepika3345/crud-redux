import axios from "axios"

export const getTodos = async () => {
    const response = await axios.get("/api/todo")
    return response.data

}

export const deleteTodo = async (_id) => {
    const response = await axios.delete("/api/todo/" + _id)
    return response.data
}

export const SaveTodo = async (formData) => {
    const response = await axios.post("/api/todo/", formData)

    return response.data

}

export const updateTodoDB = async (todo) => {
    const response = await axios.put("/api/todo/" + todo._id,
     { title: todo.title, description: todo.description })

    return response.data

}




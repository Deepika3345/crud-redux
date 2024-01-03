import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SaveTodo, deleteTodo, getTodos, updateTodoDB } from "../todoService";





const todoSlice = createSlice({
    name: "todos",
    initialState: {
        alltodos: [],


        isLoading: false,
        isSuccess: false,
        isError: false,


        edit: { todo: {}, isEdit: false },
    },
    reducers: {

        removeFromState: (state, action) => {
            return {
                ...state,
                alltodos: state.alltodos.filter((item) => item._id !== action.payload)
            }

        },

        editInState: (state, action) => {
            return {
                ...state,
                edit: {
                    todo: action.payload,
                    isEdit: true
                }
            }

        }

        // Delete
        // remove: (state, action) => {
        //     return {
        //         ...state,
        //         alltodos: state.alltodos.filter((todo) => todo.id !== action.payload)
        //     }
        // },

        // Add

        // add: (state, action) => {
        //     return {
        //         ...state,
        //         alltodos: [action.payload, ...state.alltodos]
        //     }

        // },

        // Edit

        // edit: (state, action) => {
        //     return {
        //         ...state,
        //         edit: {
        //             todo: action.payload, isEdit: true
        //         },
        //     }
        // },
        // update 


        // update: (state, action) => {
        //     return {
        //         ...state,
        //         alltodos: state.alltodos.map(todo => todo.id === action.payload.id ? action.payload : todo),
        //         edit: { todo: {}, isEdit: false }
        //     }
        // }

    },
    extraReducers: (builder) => {

        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true
        })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.isLoading = false
                state.alltodos = action.payload
                state.isSuccess = true
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.isError = true
                state.isLoading = false
            })



            .addCase(RemoveTodo.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(RemoveTodo.fulfilled, (state, action) => {
                state.isLoading = false

                state.isSuccess = true
            })
            .addCase(RemoveTodo.rejected, (state) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
            })

            // Save


            .addCase(addTodo.pending, (state) => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.isLoading = false
                state.alltodos = [...state.alltodos, action.payload]
                state.isSuccess = true
            })
            .addCase(addTodo.rejected, (state) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
            })
                 // Update
            
                 .addCase(updateTodo.pending, (state) => {
                    state.isLoading = true
                    state.isError = false
                })
                .addCase(updateTodo.fulfilled, (state, action) => {
                    state.isLoading = false
    
                    state.isSuccess = true
                    state.todos=state.todos.map((item)=> item._id ===action.payload._id ? action.payload:item)
                    state.edit={
                        todo: {}, isEdit: false
                        
                    }
                })
                .addCase(updateTodo.rejected, (state) => {
                    state.isError = true
                    state.isLoading = false
                    state.isSuccess = false
                })
        
        
        }

       


})

export const { removeFromState, editInState } = todoSlice.actions

// export const { remove, add, edit, update } = todoSlice.actions;
export default todoSlice.reducer

export const fetchTodos = createAsyncThunk("FETCH/TODOS", async () => {


    try {
        return await getTodos()

    } catch (error) {
        console.log(" something went wrong")


    }
})

export const RemoveTodo = createAsyncThunk("DELETE/TODO", async (_id) => {
    try {
        return await deleteTodo(_id)

    } catch (error) {
        console.log("try again ")

    }
})


export const addTodo = createAsyncThunk("ADD/TODO", async (formData) => {
    try {
        return await SaveTodo(formData)

    } catch (error) {
        console.log(error)

    }
})

// update


export const updateTodo = createAsyncThunk("UPDATE/TODO", async (todo) => {
    try {
        return await updateTodoDB(todo)

    } catch (error) {
        console.log(error)

    }
})



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTicket, deleteTicketById, getTicketByMemberId, getTicketByProjectId, updateTicketById } from "./TicketApi";

const initialState={
    status:"idle",
    tickets:[],
}

export const getTicketByProjectIdAsync=createAsyncThunk('tickets/getTicketByProjectIdAsync',async(id)=>{
    const tickets=await getTicketByProjectId(id)
    return tickets
})
export const createTicketAsync=createAsyncThunk('tickets/createTicketAsync',async(data)=>{
    const createdTicket=await createTicket(data)
    return createdTicket
})
export const deleteTicketByIdAsync=createAsyncThunk('tickets/deleteTicketByIdAsync',async(id)=>{
    const deletedTicket=await deleteTicketById(id)
    return deletedTicket
})
export const updateTicketByIdAsync=createAsyncThunk('tickets/updateTicketById',async(update)=>{
    const updatedTicket=await updateTicketById(update)
    return updatedTicket
})
export const getTicketByMemberIdAsync=createAsyncThunk('tickets/getTicketByMemberIdAsync',async(id)=>{
    const tickets=await getTicketByMemberId(id)
    return tickets
})

const ticketSlice=createSlice({
    name:"ticketSlice",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getTicketByProjectIdAsync.pending,(state)=>{
                state.status="loading"
            })
            .addCase(getTicketByProjectIdAsync.fulfilled,(state,action)=>{
                state.status="idle"
                state.tickets=action.payload
            })
            .addCase(getTicketByProjectIdAsync.rejected,(state)=>{
                state.status="error"
            })


            .addCase(createTicketAsync.pending,(state)=>{
                state.status="loading"
            })
            .addCase(createTicketAsync.fulfilled,(state,action)=>{
                state.status="idle"
                state.tickets.push(action.payload)
            })
            .addCase(createTicketAsync.rejected,(state)=>{
                state.status="error"
            })


            .addCase(deleteTicketByIdAsync.pending,(state)=>{
                state.status="loading"
            })
            .addCase(deleteTicketByIdAsync.fulfilled,(state,action)=>{
                state.status="idle"
                state.tickets=state.tickets.filter((ticket)=>ticket._id!==action.payload._id)
            })
            .addCase(deleteTicketByIdAsync.rejected,(state)=>{
                state.status="error"
            })


            .addCase(updateTicketByIdAsync.pending,(state)=>{
                state.status="loading"
            })
            .addCase(updateTicketByIdAsync.fulfilled,(state,action)=>{
                state.status="idle"
                const index=state.tickets.findIndex((ticket)=>ticket._id===action.payload._id)
                state.tickets[index]=action.payload
            })
            .addCase(updateTicketByIdAsync.rejected,(state)=>{
                state.status="error"
            })


            .addCase(getTicketByMemberIdAsync.pending,(state)=>{
                state.status="loading"
            })
            .addCase(getTicketByMemberIdAsync.fulfilled,(state,action)=>{
                state.status="idle"
                state.tickets=action.payload
            })
            .addCase(getTicketByMemberIdAsync.rejected,(state)=>{
                state.status="error"
            })
    }
})

export const selectTickets=(state)=>state.TicketSlice.tickets

export default ticketSlice.reducer
import { axiosi } from "../auth/AuthApi"

export const getTicketByProjectId=async(id)=>{
    try {
        const res=await axiosi.get(`/tickets/project/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const getTicketByMemberId=async(id)=>{
    try {
        const res=await axiosi.get(`/tickets/member/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const createTicket=async(data)=>{
    try {
        const res=await axiosi.post(`/tickets`,data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const updateTicketById=async(update)=>{
    try {
        const res=await axiosi.patch(`/tickets/${update._id}`,update)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const deleteTicketById=async(id)=>{
    try {
        const res=await axiosi.delete(`/tickets/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
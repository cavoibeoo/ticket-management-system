import { axiosi } from "../auth/AuthApi"


export const getCommentsByTicketId=async(id)=>{
    try {
        const res=await axiosi.get(`/comments/ticket/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const createComment=async(data)=>{
    try {
        const res=await axiosi.post(`/comments`,data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const updateCommentById=async(update)=>{
    try {
        const res=await axiosi.patch(`/comments/${update._id}`,update)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteCommentsById=async(id)=>{
    try {
        const res=await axiosi.delete(`/comments/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
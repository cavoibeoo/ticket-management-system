import { axiosi } from "../auth/AuthApi"

export const getMembersByAdminId=async(id)=>{
    try {
        const res=await axiosi.get(`/members/admin/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const createMember=async(data)=>{
    try {
        const res=await axiosi.post("/members",data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
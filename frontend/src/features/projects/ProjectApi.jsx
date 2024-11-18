import { axiosi } from "../auth/AuthApi"

export const getUserProjectById=async(id)=>{
    try {
        const res=await axiosi.get(`/projects/admin/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const getProjectDetailsById=async(id)=>{
    try {
        const res=await axiosi.get(`/projects/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const addMemberByProjectId=async(projectid,memberid)=>{
    try {
        const res=await axiosi.post(`/projects/${projectid}/members`,{memberid})
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteMemberByProjectId=async(projectid,memberid)=>{
    try {
        const res=await axiosi.delete(`/projects/${projectid}/members/${memberid}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const createProject=async(data)=>{
    try {
        const res=await axiosi.post("/projects",data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}


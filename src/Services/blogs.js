import { API } from "./api";


export async function getAllBlogs()
{
    const res = await fetch(`${API}/blog/all`,
    {
        method:"GET",
        headers:{
            "x-auth-token":localStorage.getItem("token"),
        }
    });

    const data = res.json();
    return data;
}

export async function addBlog(payload)
{
    const res = await fetch(`${API}/blog/add`,
    {
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "x-auth-token": localStorage.getItem("token"),
            "Content-Type": "application/json"
        },
    })
    const data = await res.json();
    return data;
}

export async function getUserBlogs()
{
    const res = await fetch(`${API}/blog/user`,
    {
        method:"GET",
        headers:{
            "x-auth-token":localStorage.getItem("token"),
        }
    });

    const data = res.json();
    return data;
}
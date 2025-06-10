import { useState } from "react";

const Create = () => {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAouthor]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        const blog={ title,body,author}

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
        })

    }
    return ( 
        <div className="create">
            <h2>Add a new blog </h2>
            <form onSubmit={handleSubmit}>
                
                <label>Blog title</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label >Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog Aouther</label>
                <select
                    value={author}
                    onChange={(e)=>setAouthor(e.target.value)}
                >
                    <option value="mario" >mario</option>
                    <option value="yoshi" >yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;


// git remote add origin https://github.com/Solomon-Dugasa/Figma-Clone_Next.git
// git branch -M main
// git push -u origin main
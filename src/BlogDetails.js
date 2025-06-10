import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id }=useParams();
    const { data:blogs,error,isPending }=useFetch('http://localhost:8000/blogs/'+id)
    const navigate = useNavigate();

    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+blogs.id,{
            method:'DELETE'
        }).then(()=>{
            navigate('/')
        })
    }

    return ( 
        
        <div className="blog-details">

            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Writthen by {blogs.author}</p>
                    <div>{blogs.body}</div>
                    <button onClick={handleClick}>delete</button>
                    

                </article>
            )}
        </div>
        
    );

    }

    
export default BlogDetails;
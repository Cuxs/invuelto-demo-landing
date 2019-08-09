import {useState, useEffect} from 'react';
import {getPostBySlug} from '../modules/fetches';
import {API_URL} from '../modules/constants';
import {truncate} from 'lodash';
export default (props) => {
  const [post, setPost] = useState([])
  
  useEffect(()=>{
    let ignore = false;
    const slug = props.url.split('/').pop();

    const getPost = async (slug)=> {
      const response = await getPostBySlug(slug)
      if (!ignore) setPost(response.data.post);
    }

    getPost(slug)
    return () => { ignore = true; }

  },[])

  return (<div className="container">
    <a target="__blank" rel="noopener noreferrer" href={props.url}><div className="preview__image mx-auto" style={{backgroundImage:`url(${API_URL}/images/${post.image})`}} ></div></a>
    <h3 className="preview__title mx-auto">{post.title}</h3>
    <p className="preview__description mx-auto">{truncate(post.content,{length: 60})}</p>
    <a target="__blank" rel="noopener noreferrer" href={props.url}>Seguir leyendo...</a>


  </div>)
}
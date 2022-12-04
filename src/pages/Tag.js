import Blog from "../data";
import { useParams } from "react-router-dom";


function Tag() {
        const params = useParams();
        const tagId = params.id;
return (
<h1>{tagId}</h1>
)
}

export default Tag;

import newsimage from "../assets/screenshot.jpg";
export default function Card({title,description,src,url}){
    return(
      
        <div className="card bg-dark text-light d-inline-block mb-3 my-3 mx-3 px-2 py-2 text-center" style={{maxWidth:"345px" }}>
        <img src={src?src:newsimage} style={{height:"200px", width:"328px", borderEndEndRadius:"5px", borderEndStartRadius:"5px"}} className="card-img-top" alt="newimage" />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,40)}..</h5>
          <p className="card-text">
            {description?description.slice(0,90):"Description loading....Description loading....Description loading....Description loading...."}..
          </p>
          <a href={url} className="btn btn-primary ">
            Read more
          </a>
        </div>
        </div>
     
     
    )
}
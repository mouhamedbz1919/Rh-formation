import playcourse from "../../assets/play-course.png"
import '../style.css'
function Course(){
    return(
        <main>
                <div className="video formations">
                        <div className="container">
                            <div className="row-1">
                                    <ul>
                                        <li><a href="#" className="active">Formation Soft</a></li>
                                        <li><a href="#">Formation Web</a></li>
                                        <li><a href="#">Formation Mobile</a></li>
                                        <li><a href="#">Formation Desktop</a></li>
                                    </ul>
                                </div>
                                <div className="row-2">
                                    {/* <iframe src=""></iframe> */}
                                    <img src={playcourse} alt="" />
                                    <p className="title">Lorem Ipsum is simply dummy text of the printing.</p>
                                </div>
                            </div>
                    </div> 
        </main>
    )
}
export default Course;
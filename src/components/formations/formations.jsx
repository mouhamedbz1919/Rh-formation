import course from '../../assets/course.png'
import '../style.css'
export default function Formations(){
    return(
        <main>
            <div className="formations">
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
                        <div className="course-1 course">
                            <a href="#"><img src={course} alt="" /></a>
                        </div>
                        <div className="course-2 course">
                            <a href="#"><img src={course} alt="" /></a>
                        </div>
                        <div className="course-3 course">
                            <a href="#"><img src={course} alt="" /></a>
                        </div>
                        <div className="course-4 course">
                            <a href="#"><img src={course} alt="" /></a>
                        </div>
                        <div className="course-5 course">
                            <a href="#"><img src={course} alt="" /></a>
                        </div>
                        <div className="course-6 course">
                            <a href="#"><img src={course} alt="" /></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </main>
    )
}
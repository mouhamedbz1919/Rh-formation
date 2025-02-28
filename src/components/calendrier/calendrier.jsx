import "./calendrier.css"; 
import calendar from '../../assets/calendar.png'
export function Calendrier() {
  return (
    <main>
      <h1 className="calendar">Calendar 📅</h1>
          <div className="calendar-container">
      <div className="sidebar">
        <a href="#">📚 Formation Hard</a>
        <a href="#">🌐 Formation Web</a>
        <a href="#">🤝 Team Building</a>
        <a href="#">🎂 Junior Enterprise birthday</a>
        <a href="#">📅 Seminar</a>
      </div>

      <div className="content">
          <img src={calendar} alt="Logo" />
      </div>
    </div>

    </main>
  );
}

import { experience } from '@/data';
export default function Timeline() {
  return (
    <ol className="timeline">
      {experience.map((item, index) => (
        <li key={item.title}>
          <div className="timeline-marker">
            <span>{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div>
            <p className="timeline-date">{item.date}</p>
            <h3>{item.title}</h3>
            <p className="timeline-company">{item.company}</p>
            <p className="timeline-description">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

interface TimelineItem {
  title: string;
  content: React.ReactNode;
  date?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className = "" }: TimelineProps) {
  return (
    <ul className={`timeline timeline-vertical ${className}`}>
      {items.map((item, index) => (
        <li key={index}>
          <div className="timeline-start">{item.date}</div>
          <div className="timeline-middle">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          </div>
          <div className="timeline-end timeline-box">
            <h4 className="font-bold">{item.title}</h4>
            <div>{item.content}</div>
          </div>
          {index !== items.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );
}

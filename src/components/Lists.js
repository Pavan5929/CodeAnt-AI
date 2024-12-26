import React from 'react';
import "../styles/Lists.css";
import database from "../images/database.svg";

const designsData = [
  { id: 1, name: "Design System", tag: "Public", tech: "React", size: "7320 KB", updated: "1 day ago" },
  { id: 2, name: "codeant-ci-app", tag: "Private", tech: "javascript", size: "5871 KB", updated: "2 days ago" },
  { id: 3, name: "analytics-dashboard", tag: "private", tech: "Python", size: "4521 KB", updated: "5 days ago" },
    { id: 4, name: "mobile-app", tag: "public", tech: "Swift", size: "3096 KB", updated: "3 days ago" },
       { id: 5, name: "e-commerce-platform", tag: "private", tech: "Java", size: "6210 KB", updated: "6 days ago" },
       { id: 6, name: "blog-website", tag: "public", tech: "HTML/CSS", size: "1876 KB", updated: "4 days ago" },
           { id: 7, name: "social-network", tag: "private", tech: "PHP", size: "5432 KB", updated: "7 days ago" },
  // Add more design objects here
];

function Lists({ searchTerm }) {
  const filteredDesigns = designsData.filter(design =>
    design.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    design.tech.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='designs'>
      {filteredDesigns.map(design => (
        <div key={design.id} className="design">
          <header>
            <h1>{design.name}</h1>
            <span className={`tag ${design.tag.toLowerCase()}`}>{design.tag}</span>
          </header>
          <div className="info">
            <p className='dot'>{design.tech}</p>
            <p><img className='database' src={database} alt="database" />{design.size}</p>
            <p>Updated {design.updated}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lists;

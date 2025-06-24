import React from 'react'

function ProjectsInfoItem({ label, value }) {
  return (
    <li>
        <p>{label}</p>
        {Array.isArray(value) ? (
            <div>
                {value.map((item, i) => <span key={i}>{item}</span>)}
            </div>
            ) : (
            <span>
                {typeof value === 'number' ? `${value} 명` : value}
            </span>
        )}
    </li>
  )
}

export default ProjectsInfoItem
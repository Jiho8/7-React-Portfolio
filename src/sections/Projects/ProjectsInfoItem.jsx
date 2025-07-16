import React from 'react'

function ProjectsInfoItem({ label, value }) {
  return (
    <li>
      {/* 구분 */}
      <p>{label}</p>

      {/* 타입에 따라 분기 처리 */}
      {Array.isArray(value) ? (
          // 배열은 리스트 형태로 표시
          <div>
            {value.map((item, i) => <span key={i}>{item}</span>)}
          </div>
        ) : (
          // 숫자면 '참여 인원'
          <span>
            {typeof value === 'number' ? `${value} 명` : value}
          </span>
      )}
    </li>
  )
}

export default ProjectsInfoItem
import React, { useState } from 'react';
import ProjectDetails from './ProjectDetails';
import styles from './Projects.module.scss';

function ProjectsItem({ data }) {
  const [openDetails, setOpenDetails] = useState(false);
  
  return (
    <div 
      className={`${styles.item} ${styles[data.bgColor]}`}
      onClick={() =>{
        if (!openDetails) setOpenDetails(true);
      }}
    >
      {/* 썸네일 이미지 */}
      <p className={styles.itemThumb}>
        <img src={`/imgs/${data.imgurl}`} alt="project-thumb" />
      </p>

      {/* 프로젝트 내용 */}
      <div className={styles.itemContent}>
        <p>{data.mainTitle}</p>
        <span className={styles.contentSubtitle}>
          {data.subTitle}
        </span>

        {/* 사용된 기술 스택 */}
        <div className={styles.techItemBox}>
          {
            data.techStack.map((item, i) =>
              <span key={i}>{item}</span>
            )
          }
        </div>
      </div>

      {
        // 상세 내용 팝업. 클릭했을 때만 화면에 출력
        openDetails && <ProjectDetails data={data} onClose={() => setOpenDetails(false)}/>
      }
    </div>
  )
}

export default ProjectsItem
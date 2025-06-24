import React, { useState } from 'react';
import ProjectsItem from './ProjectsItem';
import BasicButton from '../../component/BasicButton';
import data from '../../data/projects.json';
import styles from './Projects.module.scss';

function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);

  function loadMore() {
    setVisibleCount(prev => prev + 4);
  }

  return (
    <section id='project'>
      <div className={styles.titleBox}>
        <p className={styles.title}>프로젝트</p>
        <span className={styles.subtitle}>기획부터 UI 구현, 데이터 처리까지 스스로 해보며 성장한 결과물입니다.</span>
      </div>

      <div className={styles.projectsItemBox}>
        {
          data.slice(0, visibleCount).map((item, i) => 
            <ProjectsItem key={i} data={item}/>
          )
        }
      </div>
      
      {visibleCount < data.length && (
        <BasicButton type={'projects'} onClick={loadMore}/>
      )}
    </section>
  )
}

export default Projects
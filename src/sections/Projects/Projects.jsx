import React, { useState } from 'react';
import ProjectsItem from './ProjectsItem';
import BasicButton from '../../components/BasicButton';
import data from '../../data/projects.json';
import styles from './Projects.module.scss';

function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);   // 화면에 표시할 아이템 수 관리

  // 더보기 버튼 로직
  function loadMore() {
    // 현재 개수에서 4개씩 더 표시
    setVisibleCount(prev => prev + 4);
  }

  return (
    <section id='project' data-aos="fade-up">
      {/* 제목 */}
      <div className={styles.titleBox}>
        <p className={styles.title}>프로젝트</p>
        <span className={styles.subtitle}>기획부터 UI 구현, 데이터 처리까지 스스로 해보며 성장한 결과물입니다.</span>
      </div>

      {/* 프로젝트 박스 */}
      <div className={styles.projectsItemBox}>
        {
          data.slice(0, visibleCount).map((item, i) => 
            <ProjectsItem key={i} data={item}/>
          )
        }
      </div>
      
      {/* 데이터 수보다 표시할 수가 더 커지면 버튼 제거 */}
      {visibleCount < data.length && (
        <BasicButton type={'projects'} onClick={loadMore}/>
      )}
    </section>
  )
}

export default Projects
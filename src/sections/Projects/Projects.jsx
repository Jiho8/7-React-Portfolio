import React, { useState } from 'react';
import ProjectsItem from './ProjectsItem';
import ProjectsDetails from './ProjectsDetails';
import BasicButton from '../../components/BasicButton';
import data from '../../data/projects.json';
import styles from './Projects.module.scss';

function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);   // 화면에 표시할 아이템 수 관리
  const [selected, setSelected] = useState(null);        // 선택된 아이템 관리
  const [openDetails, setOpenDetails] = useState(false); // 상세 팝업 열림 상태 관리

  // 더보기 버튼 로직
  function loadMore() {
    // 현재 개수에서 4개씩 더 표시
    setVisibleCount(prev => prev + 4);
  }

  return (
    <>
      <section id='project' data-aos="fade-up" data-aos-delay="500">
        {/* 제목 */}
        <div className={styles.titleBox}>
          <p className={styles.title}>프로젝트</p>
          <span className={styles.subtitle}>기획부터 UI 구현, 데이터 처리까지 스스로 해보며 성장한 결과물입니다.</span>
        </div>
        {/* 프로젝트 박스 */}
        <div className={styles.projectsItemBox}>
          {data.slice(0, visibleCount).map((item, i) =>
            <ProjectsItem 
              key={i} data={item}
              onClick={() => {
                setSelected(item);
                if (!openDetails) setOpenDetails(true);
              }}
            />
          )}
        </div>
      
        {/* 데이터 수보다 표시할 수가 더 커지면 버튼 제거 */}
        {visibleCount < data.length && (
          <BasicButton type={'projects'} onClick={loadMore}/>
        )}
      </section>

      {/* 상세 내용 팝업. 클릭했을 때만 화면에 출력 */}
      {openDetails && selected && (
        <ProjectsDetails 
          data={selected} 
          onClose={() => {
            setSelected(null);      // 선택 아이템 초기화
            setOpenDetails(false);  // 팝업 닫기
          }}
        />
      )}
    </>
  )
}

export default Projects
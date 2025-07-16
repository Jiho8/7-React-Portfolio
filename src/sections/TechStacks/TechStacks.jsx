import React, { useEffect, useState } from 'react';
import TechStacksItem from './TechStacksItem';
import data from '../../data/techStacks.json';
import styles from './TechStacks.module.scss';

function TechStacks() {
  // 데이터 내 type 중복 제거 -> 버튼에 사용
  const uniqueTypes = ['전체', ...new Set(data.map((item) => item.type))];

  const [fadeKey, setFadeKey] = useState(0);           // 리렌더링 유도
  const [selectedIdx, setSelectedIdx] = useState(0);   // 선택된 버튼 인덱스 관리
  const selectedType = uniqueTypes[selectedIdx];       // 인덱스 이용하여 선택된 타입 가져오기

  // 버튼 클릭 시 보여줄 데이터 필터링
  function filteredData() {
    if ( selectedType === '전체') {
      return data;
    } else {
      return data.filter(item => item.type === selectedType);
    }
  }

  // 버튼을 클릭할 때마다 fadekey 값 조절하여 리렌더링 유도
  useEffect(() => {
    setFadeKey(prev => prev + 1);
  }, [selectedIdx])
  
  return (
    <section id='tech' data-aos="fade-up">
      {/* 제목 */}
      <div className={styles.titleBox}>
        <p className={styles.title}>기술 스택 및 도구</p>
        <span className={styles.subtitle}>사용할 수 있거나 사용해본 경험이 있는 기술들입니다.</span>
      </div>

      {/* 필터 버튼 */}
      <div className={styles.btnBox}>
        {uniqueTypes.map((item, i) =>
          <button
            key={i} 
            className={`${styles.filterBtn} ${selectedIdx === i ? styles.select : ''}`}
            onClick={() => setSelectedIdx(i)}
          >
            {item}
          </button>
        )}
      </div>

      {/* 기술 스택 수 */}
      <p className={styles.techStackLength}>
        {filteredData().length} 개의 기술 스택
      </p>

      {/* 기술 스택 */}
      <div className={styles.techStackBox}>
        {filteredData().map((item, i) => 
          <div 
            key={`${item.name}-${fadeKey}-${i}`} 
            style={{ animationDelay : `${i * 70}ms` }}
            className={styles.animationBox}
          >
            <TechStacksItem 
              imgurl={item.imgurl}
              name={item.name}   // tooltip에 표시할 이름
              tooltipClassName={styles.customTooltip}      // tooltip 클래스명
              arrowClassName={styles.customTooltipArrow}   // tooltip 내 화살표 클래스명
              boxClassName={styles.imgBox}  // 이미지 배경 박스 클래스명
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default TechStacks
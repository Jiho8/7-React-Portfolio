import React, { useState } from 'react';
import TechStacksItem from './TechStacksItem';
import data from '../../data/techStacks.json';
import styles from './TechStacks.module.scss';

function TechStacks() {
  // 버튼 중복 제거
  const uniqueTypes = ['전체', ...new Set(data.map((item) => item.type))];

  const [selectedIdx, setSelectedIdx] = useState(0);

  const selectedType = uniqueTypes[selectedIdx]; // 선택된 타입 가져오기

  // 버튼 클릭 시 보여줄 데이터 필터링
  function filteredData() {
    if ( selectedType === '전체') {
      return data;
    } else {
      return data.filter(item => item.type === selectedType);
    }
  }
  
  return (
    <section id='tech'>
      <div className={styles.titleBox}>
        <p className={styles.title}>기술 스택 및 도구</p>
        <span className={styles.subtitle}>사용할 수 있거나 사용해본 경험이 있는 기술들입니다.</span>
      </div>

      <div className={styles.btnBox}>
        {
          uniqueTypes.map((item, i) =>
            <button
              key={i} 
              className={`${styles.filterBtn} ${selectedIdx === i ? styles.select : ''}`}
              onClick={() => setSelectedIdx(i)}
            >
              {item}
            </button>
          )
        }
      </div>

      <p className={styles.techStackLength}>
        {filteredData().length} 개의 기술 스택
      </p>

      <div className={styles.techStackBox}>
        {
          filteredData().map((item, i) => 
            <TechStacksItem 
              key={i} imgurl={item.imgurl}
              name={item.name}
              tooltipClassName={styles.customTooltip}
              arrowClassName={styles.customTooltipArrow}
              boxClassName={styles.imgBox}
            />
          )
        }
      </div>
    </section>
  )
}

export default TechStacks
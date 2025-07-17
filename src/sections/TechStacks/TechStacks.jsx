import React, { useEffect, useRef, useState } from 'react';
import TechStacksItem from './TechStacksItem';
import data from '../../data/techStacks.json';
import styles from './TechStacks.module.scss';

function TechStacks() {
  // 데이터 내 type 중복 제거 -> 버튼에 사용
  const uniqueTypes = ['전체', ...new Set(data.map((item) => item.type))];

  // AOS 애니메이션 완료 후 스택 아이템을 표시하기 위한 상태
  const [showStacks, setShowStacks] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);           // 리렌더링 유도
  const [selectedIdx, setSelectedIdx] = useState(0);   // 선택된 버튼 인덱스 관리
  const selectedType = uniqueTypes[selectedIdx];       // 인덱스 이용하여 선택된 타입 가져오기

  // Intersection Observer를 위한 ref 생성
  const techSectionRef = useRef(null);

  // 버튼을 클릭할 때마다 fadekey 값 조절하여 리렌더링 유도
  useEffect(() => {
    setFadeKey(prev => prev + 1);
  }, [selectedIdx])

   // Intersection Observer를 사용하여 섹션 진입 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // isIntersecting이 true가 되면 요소가 뷰포트에 들어온 것
          if (entry.isIntersecting) {
            // 이 시점에 showStacks를 true로 설정하여 개별 스택 아이템 애니메이션 시작
            setShowStacks(true);
            // 한 번만 실행되도록 Observer 해제 (옵션)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // 뷰포트를 기준으로 관찰
        rootMargin: '0px 0px -30% 0px', // 화면에 70%가 보여야 진입으로 간주
        threshold: 0.2, // 요소의 20%가 뷰포트에 들어왔을 때 콜백 실행
      }
    );

    if (techSectionRef.current) {
      observer.observe(techSectionRef.current);
    }

    return () => {
      if (techSectionRef.current) {
        observer.unobserve(techSectionRef.current);
      }
    };
  }, []); // 컴포넌트 마운트 시 한 번만 실행
  
  // 버튼 클릭 시 보여줄 데이터 필터링
  function filteredData() {
    if ( selectedType === '전체') {
      return data;
    } else {
      return data.filter(item => item.type === selectedType);
    }
  }

  return (
    <section id='tech' data-aos="fade-up" data-aos-delay="100" ref={techSectionRef}>
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
        {showStacks && filteredData().map((item, i) => 
          <div 
            key={`${item.name}-${fadeKey}-${i}`} 
            style={{ animationDelay : `${i * 80}ms` }}
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
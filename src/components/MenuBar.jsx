import React, { useEffect, useRef, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import '../styles/common.scss';

const sections = ['intro', 'tech', 'project', 'edu'];  // 섹션 배열

function MenuBar() {
  const [isSticky, setIsSticky] = useState(false);        // scroll 위치에 따른 sticky 전환 여부
  const [selectedIdx, setSelectedIdx] = useState(null);   // 현재 선택된 메뉴 인덱스 상태 관리 
  const menuRefs = useRef([]);                            // 각 메뉴 버튼의 DOM 요소 저장 
  const indicatorRef = useRef(null);                      // indicator DOM 요소 참조
  const scrollSpyRef = useRef(true);                      // 스크롤 감지 가능 여부를 저장하는 Ref

  // scroll 이동 함수 -> 해당 섹션으로 부드럽게 스크롤 이동
  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      const offset = 40; // 메뉴바 높이 만큼
      window.scrollTo({ top: top - offset, behavior: 'smooth' });
    }
  }

  // 선택된 메뉴를 표시하는 indicator 관리 함수
  function moveIndicator(idx) {
    const indi = indicatorRef.current;
    if (!indi) return;

    if (idx === null) {
      // 선택된 메뉴가 없으면 indicator 숨김
      indi.classList.remove('visible');
      return;
    }

    const btn = menuRefs.current[idx];
    if (!btn) return;

    const width = btn.offsetWidth;
    const left = btn.offsetLeft;
    
    // 버튼의 크기와 위치를 기반으로 indicator 스타일 설정
    if (width && left >= 0) {
      indi.style.width = `${width}px`;
      indi.style.left = `${left}px`;
      
      indi.classList.add('visible'); // indicator 보이게
    }
  }

  // 메뉴 클릭 시 로직 실행
  function handleMenuClick(idx) {
    scrollSpyRef.current = false; // 클릭 중엔 scroll 감지 off

    setSelectedIdx(idx);  // 선택된 인덱스 갱신
    moveIndicator(idx);   // indicator 이동
    scrollToSection(sections[idx]);  // 해당 섹션으로 스크롤 이동

    // 약간의 딜레이 후 scroll 감지 다시 on
    setTimeout(() => {
      scrollSpyRef.current = true;
      setIsSticky(window.scrollY > 300); // sticky 여부 업데이트
    }, 800); // scrollToSection 애니메이션 감안한 딜레이
  }

  // 스크롤 시 현재 보이는 섹션 감지 로직
  useEffect(() => {
    function handleScroll() {
      if (!scrollSpyRef.current) return; // 클릭 중이면 skip
  
      let closestIdx = -1;
      let minDistance = Infinity;
  
      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        // 섹션이 화면에서 보이는 높이 계산
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const visibleRatio = visibleHeight / rect.height;

        if (visibleRatio < 0.3) return; // 30% 미만이면 해당 섹션은 보이지 않는 것으로 판단

        // 현재 섹션의 중앙 위치와 화면 중앙의 거리 계산
        const elCenter = rect.top + rect.height / 2;
        const distanceToViewportCenter = Math.abs(elCenter - window.innerHeight / 2);

        if (distanceToViewportCenter < minDistance) {
          minDistance = distanceToViewportCenter;
          closestIdx = i;
        }
      });
  
      if (closestIdx === -1) {
        // 아무 섹션도 보이지 않으면 메인으로 감지 후 indicator 안 보이게 설정.
        if (selectedIdx !== null) {
          setSelectedIdx(null);
        }
      } else if (closestIdx !== selectedIdx) {
        // 가장 가까운 섹션을 현재 선택 섹션으로 업데이트
        setSelectedIdx(closestIdx);
      }
  
      // 특정 스크롤 이상이면 메뉴바를 sticky로
      setIsSticky(window.scrollY > 300);
    }

    // 스크롤 이벤트 등록 및 제거
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedIdx]);

  // 선택된 메뉴 인덱스에 따라 indicator 위치 갱신
  useEffect(() => {
    moveIndicator(selectedIdx);
  }, [selectedIdx])

  return (
    <div className={`menuBar ${isSticky ? 'sticky' : ''}`} >
      {/* 맨 위로 이동하는 로고 이미지 버튼 */}
      <Tooltip
        title={'Going to the Top !'}
        // open={true}
        arrow
        placement="top"
        classes={{
          tooltip: 'menuBarTooltip',
          arrow: 'menuBarTooltipArrow'
        }}>
        <button
          className='topBtn'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/imgs/logo-red.svg" alt="TopBtn" />
        </button>
      </Tooltip>

      {/* 메뉴 버튼 영역 */}
      <div className='menuBtnBox'>
        {sections.map((sec, i) => (
          <button
            key={i}
            ref={(el) => (menuRefs.current[i] = el)}  // 버튼 DOM 저장
            className={i === selectedIdx ? 'select' : ''}  // 선택 시 스타일
            onClick={() => handleMenuClick(i)}  // 클릭 시 스크롤 이동
          >
            {sec === 'intro' && '소개'}
            {sec === 'tech' && '기술'}
            {sec === 'project' && '프로젝트'}
            {sec === 'edu' && '교육'}
          </button>
        ))}
        <div className='indicator' ref={indicatorRef}></div>
      </div>
    </div>
  )
}

export default MenuBar
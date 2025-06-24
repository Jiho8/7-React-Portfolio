import React, { useEffect, useRef, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import '../styles/common.scss';

const sections = ['intro', 'tech', 'project', 'edu'];

function MenuBar() {
  const [isSticky, setIsSticky] = useState(false);        // scroll 위치에 따른 menubar 위치 조절 변수
  const [selectedIdx, setSelectedIdx] = useState(null);   // 현재 선택된 메뉴 인덱스 상태 관리
  // const [scrollSpyEnabled, setScrollSpyEnabled] = useState(true);   
  const menuRefs = useRef([]);                            // 메뉴 버튼들 참조
  const indicatorRef = useRef(null);                      // indicator 참조
  const scrollSpyRef = useRef(true);

  // scroll 이동 함수
  function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      // const offset = 100; // 메뉴바 높이 만큼
      window.scrollTo({ top: top, behavior: 'smooth' });
      // target.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // 선택된 메뉴를 표시하는 indicator 관리 함수
  function moveIndicator(idx) {
    const indi = indicatorRef.current;

    if (!indi) return;

    if (idx === null) {
      indi.classList.remove('visible');
      return;
    }

    const btn = menuRefs.current[idx];
    if (!btn) return;

    // 버튼의 크기와 위치를 기반으로 indicator 값 변경
    const width = btn.offsetWidth;
    const left = btn.offsetLeft;
    
    if (width && left >= 0) {
      indi.style.width = `${width}px`;
      indi.style.left = `${left}px`;
      
      indi.classList.add('visible');
    }
  }

  // 메뉴 클릭 시 로직 실행
  function onClick(idx) {
    // setScrollSpyEnabled(false);
    scrollSpyRef.current = false;

    setSelectedIdx(idx);
    moveIndicator(idx);
    scrollToSection(sections[idx]);

    // 1초 후 스크롤 감지 on (스크롤 끝났다고 판단)
    setTimeout(() => {
      // setScrollSpyEnabled(true);
      scrollSpyRef.current = true;

      // 강제로 현재 스크롤 위치 체크
      setIsSticky(window.scrollY > 300);
    }, 800);
  }

  // 스크롤 이벤트 리스너
  useEffect(() => {
    function handleScroll() {
      if (!scrollSpyRef.current) return; // 클릭 중이면 감지 중단
  
      let closestIdx = -1;
      let minDistance = Infinity;
  
      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        // 최소 30% 이상 화면에 표시되어야 보이는 것으로 인식
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const visibleRatio = visibleHeight / rect.height;

        if (visibleRatio < 0.3) return;

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
        setSelectedIdx(closestIdx);
      }
  
      setIsSticky(window.scrollY > 300);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedIdx]);

  // 선택된 메뉴 인덱스에 따라 indicator 위치 조정
  useEffect(() => {
    moveIndicator(selectedIdx);
  }, [selectedIdx])

  return (
    <div className={`menuBar ${isSticky ? 'sticky' : ''}`}>
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

      <div className='menuBtnBox'>
        {
          sections.map((sec, i) => (
            <button
              key={i}
              ref={(el) => (menuRefs.current[i] = el)}
              className={i === selectedIdx ? 'select' : ''}
              onClick={() => onClick(i)}
            >
              {sec === 'intro' && '소개'}
              {sec === 'tech' && '기술'}
              {sec === 'project' && '프로젝트'}
              {sec === 'edu' && '교육'}
            </button>
          ))
        }
        <div className='indicator' ref={indicatorRef}></div>
      </div>
    </div>
  )
}

export default MenuBar
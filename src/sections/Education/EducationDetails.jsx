import React, { useState } from 'react'
import Bottom from '../../assets/imgs/icon-bottom.svg';
import Right from '../../assets/imgs/icon-right.svg';
import styles from './Education.module.scss';

function EducationDetails({ data }) {
  const [isOpen, setIsOpen] = useState(false);   // 아코디언 열림 상태 관리

  // 토글 관리 함수
  function toggleDetail() {
    setIsOpen(prev => !prev);
  }

  return (
    <div 
      className={`${styles.detailBox} ${isOpen ? styles.active : ''}`}
      onClick={toggleDetail}
    >
      <button>
        {/* 열림 상태에 따른 아이콘 및 텍스트 분기 처리 */}
        <p>
          <img 
            src={isOpen ? Bottom : Right} 
            alt={isOpen ? "icon-bottom" : "icon-right"} 
          />
        </p>
        <span>{ isOpen ? '상세 내용 닫기' : '상세 내용 보기'}</span>
      </button>

      {/* 아코디언 UI로 디테일 내용 표시 */}
      {isOpen && (
        <div className={styles.detailList}>
          {
            data.details.map((item, i) => 
              <p key={i}><span>•</span> {item}</p>
            )
          }
        </div>
      )}
    </div>
  )
}

export default EducationDetails
import React from 'react'
import Bottom from '../../assets/imgs/icon-bottom.svg';
import Right from '../../assets/imgs/icon-right.svg';
import styles from './Education.module.scss';

function EducationList({ data, idx, openIdx, setOpenIdx }) {
  const isOpen = openIdx === idx;

  function toggleDetail() {
    setOpenIdx(isOpen ? null : idx);
  }

  return (
    <div 
      className={`${styles.detailBox} ${isOpen ? styles.active : ''}`}
      onClick={toggleDetail}
    >
      <button>
        {
          isOpen 
          ? <p><img src={Bottom} alt="icon-bottom" /></p>
          : <p><img src={Right} alt="icon-right" /></p>
        }
        <span>{ isOpen ? '상세 내용 닫기' : '상세 내용 보기'}</span>
      </button>

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

export default EducationList
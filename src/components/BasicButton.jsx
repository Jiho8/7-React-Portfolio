import React from 'react'
import IconDownload from '../assets/imgs/icon-download.svg';
import { ReactComponent as IconLink } from '../assets/imgs/icon-link.svg';

function BasicButton({ type, onClick }) {
    // 버튼별 데이터
    const btnData = {
        main: [
            {
                txt: '이력서 다운로드',
                isComponent: false,
                link: '/resume.pdf' // 추가 필요
            }, 
            {
                txt: 'Github',
                isComponent: true,
                link: 'https://github.com/Jiho8'
            },
        ],
        projects: [
            { txt: '더보기' }
        ]
    };

  return (
    <div className="btns">
        {btnData[type].map((item, i) => {
            // 링크가 있으면 <a>, 없으면 <button>
            return item.link ? (
                <a href={item.link} key={i} 
                   target="_blank" rel="noopener noreferrer" 
                   aria-label={item.txt}
                >
                    <span className='linkBtnContent'>
                        {item.txt}
                        {
                            // 버튼에 따른 아이콘 변경 (다운로드 아이콘은 컬러 변경 필요하여 컴포넌트로 사용)
                            item.isComponent
                            ? <IconLink/>
                            : <img src={IconDownload} alt="DownloadIcon" />
                        }
                    </span>
                </a>
            ) : (
                <button key={i} onClick={onClick} data-aos="fade-up">
                    {item.txt}
                </button>
            );
        })}
    </div>
  );
}

export default BasicButton;

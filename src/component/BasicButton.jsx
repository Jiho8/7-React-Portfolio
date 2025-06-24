import React from 'react'
import IconDownload from '../assets/imgs/icon-download.svg';
import { ReactComponent as IconLink } from '../assets/imgs/icon-link.svg';

function BasicButton({ type, onClick }) {
    const btnData = {
        main: [
            {
                txt: '이력서 다운로드',
                icon: IconDownload,
                isComponent: false,
                link: '/resume.pdf' // 추가 필요
            }, 
            {
                txt: 'Github',
                icon: IconLink,
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
                <a href={item.link} key={i} target="_blank" rel="noopener noreferrer" aria-label={item.txt}>
                    <span className='linkBtnContent'>
                        {item.txt}
                        {
                            item.isComponent
                            ? <IconLink/>
                            : <img src={item.icon} alt="btnIcon" />
                        }
                    </span>
                </a>
            ) : (
                <button key={i} onClick={onClick}>
                    {item.txt}
                </button>
            );
        })}
    </div>
  );
}

export default BasicButton;

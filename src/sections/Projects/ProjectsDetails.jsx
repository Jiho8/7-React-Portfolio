import React, { useEffect } from 'react'
import close from '../../assets/imgs/icon-close.svg';
import { ReactComponent as IconLink } from '../../assets/imgs/icon-link.svg';
import ProjectsInfoItem from './ProjectsInfoItem';
import styles from './Projects.module.scss';

function ProjectsDetails({ data, onClose }) {    
    useEffect(() => {
        // 팝업 열릴 때 스크롤 막기
        document.body.style.overflow = 'hidden';
    
        // 팝업 닫힐 때 원래대로
        return () => {
            document.body.style.overflow = '';
        };
    }, []);
    
  return (
    <div className={styles.overlay} onClick={onClose}>
        <div className={styles.detail} onClick={(e) => e.stopPropagation()}>
            {/* 닫기 버튼 */}
            <button onClick={onClose}>
                <img src={close} alt="CloseBtn" />
            </button>

            {/* summmary */}
            <div className={styles.mainTitle}>
                <img src={`/imgs/${data.favicon}`} alt="favicon" />
                <span>{data.mainTitle}</span>
            </div>
            <p className={styles.subTitle}>{data.subTitle}</p>
            <span className={styles.description}>{data.description}</span>

            <hr className={styles[data.bgColor]}/>

            {/* 기간, 참여인원 등 info list */}
            <ul className={`${styles.infoList} ${styles[data.bgColor]}`}>
                <ProjectsInfoItem label={'기간'} value={data.duration}/>
                <ProjectsInfoItem label={'참여인원'} value={data.teamSize}/>
                <ProjectsInfoItem label={'주요 기능'} value={data.mainFeatures}/>
                <ProjectsInfoItem label={'주요 기술'} value={data.techStack}/>
                <ProjectsInfoItem 
                    label={'관련 링크'} 
                    value={[
                        <a href={data.gitLink} target="_blank" rel="noreferrer">
                            Github <IconLink/>
                        </a>,
                        <a href={data.webLink} target="_blank" rel="noreferrer">
                            배포 URL <IconLink/>
                        </a>
                    ]}
                />
            </ul>
        </div>
    </div>
  )
}

export default ProjectsDetails
import React from 'react'
import Logo1 from '../assets/imgs/logo-mainLogo-ver1.svg';
import Logo2 from '../assets/imgs/logo-mainLogo-ver2.svg';
import BasicButton from '../component/BasicButton';
import styles from './Main.module.scss';

function Main() {
  return (
    <div className={styles.section_start}>
        <p className={styles.logo}>
            <img src={Logo2} alt="logo" />
        </p>
        <strong className={styles.maintxt}>
            안녕하세요, <br/>
            프론트엔드 개발자 <br/>
            <span>천지호</span> 입니다.
        </strong>
        <p className={styles.subtxt}>
            팀워크와 커뮤니케이션을 중시하는 프론트엔드 개발자입니다.<br/>
            함께 성장하는 팀의 가치를 믿습니다.
        </p>
        
        <BasicButton type={'main'}/>
    </div>
  )
}

export default Main
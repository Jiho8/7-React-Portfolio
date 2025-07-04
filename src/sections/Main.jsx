import React, { useEffect, useRef } from 'react'
// import Logo1 from '../assets/imgs/logo-mainLogo-ver1.svg';
// import Logo2 from '../assets/imgs/logo-mainLogo-ver2.svg';
import grn from '../assets/imgs/logo-green.svg';
import yel from '../assets/imgs/logo-yellow.svg';
import BasicButton from '../components/BasicButton';
import styles from './Main.module.scss';

function Main() {
  const imgUrls = ['/imgs/logo-red.svg', grn, yel];
  const imgRefs = useRef([]); // 여러 개의 ref를 배열로 관리

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay;
          entry.target.style.animationDelay = delay;
          entry.target.classList.add(styles.rollIn);
        }
      });
    }, { threshold: 0.5 });

    imgRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.section}>
      {/* <p className={styles.logo} data-aos="fade-up">
          <img src={Logo2} alt="logo" />
      </p> */}
      <div className={styles.newLogo}>
        {
          imgUrls.map((img, i) =>
            <p key={i} data-aos="fade-left" data-aos-duration="2400">
              <img 
                src={img} 
                alt="logo"
                ref={(el) => (imgRefs.current[i] = el)}
                data-delay={`${i * 0.3}s`}
              />
            </p>
          )
        }
      </div>
      <strong 
        className={styles.maintxt}
      >
          안녕하세요, <br/>
          프론트엔드 개발자 <br/>
          <span className={styles.flicker}>천지호</span> 입니다.
      </strong>
      <p className={styles.subtxt} >
          팀워크와 커뮤니케이션을 중시하는 프론트엔드 개발자입니다.<br/>
          함께 성장하는 팀의 가치를 믿습니다.
      </p>
      
      {/* 이력서 다운로드, 깃허브 링크 버튼 */}
      <BasicButton type={'main'}/>
    </div>
  )
}

export default Main
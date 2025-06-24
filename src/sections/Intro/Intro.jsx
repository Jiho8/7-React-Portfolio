import React from 'react';
import LogoGrn from '../../assets/imgs/logo-green.svg';
import LogoYel from '../../assets/imgs/logo-yellow.svg';
import styles from './Intro.module.scss';
import IntroSkill from './IntroSkill';

function Intro() {
  const skillData = [
    {
      imgurl: '/imgs/logo-red.svg',
      title: '백엔드와의 연결',
      content: 'React.js 기반의 프론트엔드 개발 경험이 있으며, REST API와 비동기 처리에 대한 이해를 바탕으로 백엔드와의 데이터 연동을 구현할 수 있습니다. 요청/응답 흐름을 고려하여 클라이언트와 서버 간의 통신 구조를 설계합니다.'
    },
    {
      imgurl: LogoGrn,
      title: '사용자 중심 UI/UX',
      content: '사용자 관점에서 불편함을 줄이고, 직관적이며 효율적인 웹 화면을 설계하는 데 집중합니다. 사용자 여정을 고려한 UI 흐름과 요소 배치를 통해 사용자가 서비스에 쉽게 몰입할 수 있도록 구현하는 것을 중요하게 생각합니다.'
    },
    {
      imgurl: LogoYel,
      title: '협업 및 커뮤니케이션',
      content: 'Github, Slack 등의 협업 도구를 활용한 팀 프로젝트 경험이 있으며, 책임감을 가지고 원활한 소통 속에서 함께 성장하는 개발 문화를 지향합니다. 하나의 제품을 함께 만들어가는 과정에서 보람을 느낍니다.'
    }
  ];

  return (
    <section id='intro'>
      <div className={styles.titleBox}>
        <p className={styles.title}>핵심 역량</p>
        <span className={styles.subtitle}>사용자 경험을 중심에 두고, 팀과 함께 완성도 있는 웹을 개발합니다.</span>
      </div>

      <div className={styles.contentBox}>
        {
          skillData.map((data, i) =>
            <IntroSkill key={i} idx={i} data={data}/>
          )
        }
      </div>
    </section>
  )
}

export default Intro
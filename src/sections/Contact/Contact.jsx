import React from 'react'
import styles from './Contact.module.scss';
import { ReactComponent as IconLink } from '../../assets/imgs/icon-link.svg';

function Contact() {
    // 정보 클릭 시 클립보드 복사용 함수
    function copyText(text, info){
        navigator.clipboard.writeText(text)
        .then(() => alert(`천지호의 ${info} 정보가 복사되었습니다!`))
        .catch(() => alert(`Error!\n천지호의 ${info} 정보 복사에 실패하였습니다.`));
    }

  return (
    <section id='contact' data-aos="fade-up" data-aos-delay="1500">
        {/* 메인 텍스트 */}
        <p className={styles.mainTxt}>
            <strong>개발자</strong>로서 함께 <strong>성장</strong>할 기회를 기대하며, <br/>
            연락 주시면 <strong>감사한 마음</strong>으로 답변드리겠습니다.
        </p>

        {/* 정보 텍스트 */}
        <div className={styles.contentBox}>
            <ul>
                <li>
                    <p>전화번호</p>
                    <span onClick={(e) => copyText(e.target.innerText, '전화번호')}>
                        010-9519-5733
                    </span>
                </li>
                <li>
                    <p>이메일</p>
                    <span onClick={(e) => copyText(e.target.innerText, '이메일')}>
                        heyziizi@gmail.com
                    </span>
                </li>
                <li>
                    <p className={styles.link}>
                        Github
                        <IconLink/>
                    </p>
                    <a href="https://github.com/Jiho8" target='_blank' rel='noopener noreferrer'>@Jiho8</a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Contact
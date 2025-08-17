import React from 'react';
//import { Container, Row, Col } from 'react-bootstrap';
import '../styles/_Footer.scss';

const Footer = () => {
    return(
       
        <footer className='wrapper mt-5'>
            <pre className='margin body-small'>
                <p><strong>개인정보 취급방침</strong>     |     개인정보 책임관리자: 정민수</p>
                <span>(주)상상유니버스 | 대표자: 정민수 | 서울특별시 마포구 독막로28길 10</span><br/>
                <span>사업자번호: 898-87-00897 | 동물판매업 등록번호: 3130000-045-2018-0050 | 통신판매업 등록번호: 2020-서울마포-0181</span><br/>
                <span>상담센터:<u> [상담문의하기]</u> (10:00~16:00, 토일 휴무) | 이메일: <a href="http://mail.google.com/mail/?view=cm&fs=1&to=master@zooseyo.com" target='blank'>master@zooseyo.com</a></span>
                <p className='fw'>ⓒ 2025 종합유기견보호센터 All Rights Reserved. </p>
            </pre>
        </footer>
        
    )
};

export default Footer;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NoticeBoard from '../components/notice/NoticeBoard';
import noticeBg from '../assets/img/notice/noticebg.png';
import '../styles/NoticePage.scss';



const Notice: React.FC = () => (
  <div className="notice-page">
    <section
      className="banner"
      style={{ backgroundImage: `url(${noticeBg})` }}
    >
      <div className="notice-page__overlay">
        <Container>
          <Row className="align-items-end" style={{ height: '100%' }}>
            <Col lg={3} md={4} sm={6} className="mb-4">
              <h1 className="notice-page__title">공지사항</h1>
              <p className="notice-page__subtitle">
                종합유기견보호센터의 새로운 소식을 알려드립니다!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    <section className="notice-list">
      <NoticeBoard />
    </section>
  </div>
);

export default Notice;

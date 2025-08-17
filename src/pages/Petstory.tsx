import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PostPetstory from '../components/postpetstory/PostPetstory';
import noticeBg from '../assets/img/notice/noticebg.png';
import '../styles/PetStoryPage.scss';

const PetstoryPosts: React.FC = () => (
  <div className="petstory-page">
    {/* 배너 영역 */}
    <section
      className="banner"
      style={{ backgroundImage: `url(${noticeBg})` }}
    >
      <div className="petstory-page__overlay">
        <Container>
          <Row className="align-items-end" style={{ height: '100%' }}>
            <Col lg={3} md={4} sm={6} className="mb-4">
              <h1 className="petstory-page__title">반려동물 이야기</h1>
              <p className="petstory-page__subtitle">
                함께라서 행복한, 일상 속 소중한 순간들
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>

    {/* 게시물 리스트 + 페이지네이션 */}
    <section className="petstory-list">
      <PostPetstory />
    </section>
  </div>
);

export default PetstoryPosts;
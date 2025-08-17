import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalLayout from './ModalLayout'; // 공통 모달
//import { MdStarOutline, MdChatBubbleOutline, MdOutlineShare } from 'react-icons/md';
//import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import '../../styles/_reHome.scss'

import sns from '../../assets/img/community/sns-profile.png';

//data 불러오기
import { ReHomeDataType } from '../../data/reHomeData';

//댓글 입력창 불러오기
//import Comment from '../Comment';

interface ReHomeProps {
  show: boolean;
  onClose: () => void;
  data: ReHomeDataType;
}

const Post: React.FC<ReHomeProps> = ({ show, onClose, data }) => {
  
  return (
  <ModalLayout
    show={show}
    onClose={onClose}
    title={data.title}
    date={data.date}
    footer={
      <>
        <Button variant="link" className="pagination-arrow-btn me-2">
          {/*<IoChevronBackOutline size={24} />*/}
        </Button>
        <Button variant="link" className="pagination-arrow-btn ms-2">
          {/*<IoChevronForwardOutline size={24} />*/}
        </Button>
      </>
    }
  >
    {/* 이 아래가 children으로 전달됨 */}
    <div className="info-wrap mb-4">
      <div className="main-image-wrapper mb-3">
        <img src={data.image} alt="봉사 활동 이미지" className="img-fluid rounded-4" />
      </div>
      
      <div className="info-box">
        <div className="info-title">
          <h4>{data.name}</h4>
          <span className="recruit secondary-bg tab ms-2">입양완료</span>
        </div>
        <div className="info-item">
          <h6>{data.gender} | {data.age} | {data.weight}kg</h6>
        </div>
        <div className="text-light mt-3 mb-2">분양 동물
            <span className='primary-dark'> {data.breed}</span></div>
        <div className="text-light mb-2">분양 지역
            <span className='primary-dark'> {data.location}</span></div>
        <div className="text-light mb-2">책임비
            <span className='primary-dark'> {data.fee}만원</span></div>
        <div className="text-light mb-2">연락처
            <span className='primary-dark'> {data.facilityContact}</span></div>
      </div>
    </div>

    <div className="detail-wrap">
      <div className="detail-btn">기타 정보</div>
      <div className="detail-content mb-4">
        <p className="content-text" style={{ whiteSpace: 'pre-line' }}>{data.content}</p>
      </div>
    </div>

    <div className="author-interaction-section d-flex justify-content-between align-items-center py-3">
      <div className="author-info d-flex align-items-center">
        <img src={sns} alt="프로필" className="profile-img rounded-circle me-2" />
        <h6>{data.authorName}</h6>
      </div>
      <div className="interaction-icons d-flex align-items-center">
        <div className="icon-group me-4"><span>{data.likes}</span></div>
        <div className="icon-group me-4"><span>{data.comments}</span></div>
        <div className="icon-group me-4"><span>{data.shares}</span></div>
      </div>
    </div>
    {/*<Comment /> <-댓글 입력*/}

    <div className="line mb-5"></div>

    <div className="warning-notes-wrap mb-5 ">
      <h6 style={{textAlign:'center'}}>아래 사항을 준수하고 반려동물을 안전하게 입양해요!</h6>
        <div className='warning-notes-box'>
          <p className='tab'>1.무료 분양 계약서를 작성하세요.</p>
          <p className='tab'>2.거래자의 신분을 반드시 공유하여 기억하거나 신분증 사본을 받으세요.</p>
          <p className='tab'>3.책임비가 5만 원을 초과하는 경우, 사이트 이용이 정지되며 게시글이 삭제됩니다.</p>
          <p className='tab'>4.5만 원 초과의 분양을 요구하는 게시글을 발견하면 꼭 신고해 주세요.</p>
          <p className='tab'>5.해당 글의 모든 정보(글, 이미지)의 무단전재 및 재배포를 금지합니다.</p>
        </div>
      {/*{data.warnings.map((warning: string, index: number) => (
        <p key={index} className="warning-text mb-1">※ {warning}</p>
      ))}*/}
    </div>

    <div className="report-button-wrapper text-center mb-4">
      <Button variant="outline-danger" className="report-btn">
        신고하기 <span className="ms-1">&rsaquo;</span>
      </Button>
    </div>
  </ModalLayout>
  );
};

export default Post;
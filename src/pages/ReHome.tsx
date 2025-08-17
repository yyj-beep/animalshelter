import React, {useState} from "react";
import { Col } from "react-bootstrap";

//공용 디자인 레이아웃
import GalleryLayout from "./GalleryLayout";
//공용 카드 레이아웃
import GalleryDetail from "../components/gallery/GalleryDetail";
//모달창 
import ReHomeModal from "../components/modal/ReHomeModal";
//페이지 상단 title 배경 이미지
import bgImg from '../assets/img/search/rehomeheadbg.png';
//데이터 로딩
import { reHomeList, ReHomeDataType } from '../data/reHomeData'; 

const SearchPost: React.FC = () => {

    //모달창 실행
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ReHomeDataType | null>(null);

    const handleCardClick = (item: ReHomeDataType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

    return(
        <GalleryLayout
        pageTitle="유기동물을 분양해요"
        pageSubText={`분양자가 책임비 5만원을 초과하는 금전 거래를 요구한다면,\n해당 게시글을 반드시 신고해 주세요.`}
        pageBgImg={bgImg}
        >
            {reHomeList.map(item => (
                <Col key={item.name} lg={3} md={4} sm={6} className="mb-4">
                    <div onClick={() => handleCardClick(item)} style={{ cursor: 'pointer' }}>
                        <GalleryDetail
                            image={item.image}
                            title={item.title}
                            location={item.location}
                            gender={item.gender}
                            age={item.age}
                            breed={item.breed}
                        />
                    </div>
                </Col>
            ))}
            {/* 모달 컴포넌트 렌더링 */}
                {isModalOpen && selectedItem && (
                    <ReHomeModal
                    show={isModalOpen}
                    onClose={handleCloseModal}
                    data={selectedItem}
                    />
                )}    
        </GalleryLayout>
    );
};

export default SearchPost;
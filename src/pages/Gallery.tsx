import React, {useState} from "react";
import { Col } from "react-bootstrap";

//공용 디자인 레이아웃
import GalleryLayout from "./GalleryLayout";
//공용 카드 레이아웃
import GalleryDetail from "../components/gallery/GalleryDetail";
//모달창 
import SearchModal from "../components/modal/SearchModal";
//페이지 상단 title 배경 이미지
import bgImg from '../assets/img/search/searchheadbg.png';
//데이터 로딩
import { searchList, SearchDataType } from '../data/searchData'; 

const SearchPost: React.FC = () => {

    //모달창 실행
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<SearchDataType | null>(null);

    const handleCardClick = (item: SearchDataType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

    return(
        <GalleryLayout
        pageTitle="실종동물을 찾습니다"
        pageSubText={`공고 등록 후 자동으로 반려동물 찾기 전단지가 생성되며,\n인쇄하여 사용하실 수 있습니다.`}
        pageBgImg={bgImg}
        >
            {searchList.map(item => (
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
                    <SearchModal
                    show={isModalOpen}
                    onClose={handleCloseModal}
                    data={selectedItem}
                    />
                )}    
        </GalleryLayout>
    );
};

export default SearchPost;
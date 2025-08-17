import { useState, useRef } from 'react';
import { Form, Button, Dropdown, InputGroup, Overlay, Popover } from "react-bootstrap";
import styles from './Search.module.css';

const Search = () => {

    type DropdownType = {region: string; detail: string};

    const [formA, setFormA] = useState("");
    const [showPopupA, setShowPopupA] = useState(false);
    const [selectA, setSelectA] = useState<DropdownType>({region:"", detail:""});
    const [regionOpen, setRegionOpen] = useState(false);
    const [detailOpen, setDetailOpen] = useState(false);
    const [tempRegion, setTempRegion] = useState("");
    const [tempDetail, setTempDetail] = useState("");
    const refA = useRef<HTMLInputElement>(null);


    const [formB, setFormB] = useState("");
    const [showPopupB, setShowPopupB] = useState(false);
    const [selectB, setSelectB] = useState("");
    const [typeOpen, setTypeOpen] = useState(false);
    const [tempType, setTempType] = useState("");
    const toggleType = () => {setTypeOpen((prev) => !prev)};
    const refB = useRef<HTMLInputElement>(null);

    const toggleRegion = () => {
        setRegionOpen((prev) => !prev);
        setDetailOpen(false);
    }

    const toggleDetail = () => {
        setDetailOpen((prev) => !prev);
        setRegionOpen(false);
    }




    
    const applyA = () => {
        setSelectA({ region: tempRegion, detail: tempDetail });
        setShowPopupA(false);
        setRegionOpen(false);
        setDetailOpen(false);
    };

    const applyB = () => {
        setSelectB(tempType);
        setShowPopupB(false);
        setTypeOpen(false);
    };
        

    const handleSearch = () => {
        alert(
            `작동확인
            \n드롭다운A: ${selectA}
            \n드롭다운B: ${selectB}
            \n입력창A: ${formA}
            \n입력창B: ${formB}`
        )
    };

    return(
        <>
        <InputGroup className={`d-flex align-items-center col-md-12 ${styles.search}`}>



            {/* ============================
                폼 : 드롭다운 호출
            ================================ */}
            <Form.Control
            ref={refA}
            readOnly
            placeholder="지역 선택"
            className={`${styles.form}`}
            value={selectA.region && selectA.detail
                ? `${selectA.region} / ${selectA.detail}`
                : ''
            }

            onClick={() => {
                setTempRegion(selectA.region);
                setTempDetail(selectA.detail);
                setShowPopupA(prev => !prev);
                setShowPopupB(false);
            }}/>

            <Form.Control
            ref={refB}
            readOnly
            placeholder="동물 분류"
            value={selectB}
            className={`${styles.form}`}

            onClick={() => {
                setShowPopupB(prev => !prev);
                setShowPopupA(false);
                setTempType(selectB);
            }}/>


            {/* ============================
                폼 : 직접 입력
            ================================ */}
            <Form.Control
            type="text" value={formA}
            placeholder="검색어를 입력해 주세요"
            onChange={(e) => setFormA(e.target.value)}
            className={`${styles.form}`}
            />

            <Form.Control
            type="text" value={formB}
            placeholder="키워드 입력"
            onChange={(e) => setFormB(e.target.value)}
            className={`${styles.form}`}
            />

            <Button
                onClick={handleSearch}
                className={`d-flex align-items-center justify-content-center btn-custom primary-bg-btn ${styles.searchBtn}`}
                ><div className={`${styles.icon}`}></div>검색
            </Button>







            {/* ============================
                드롭다운 팝업창
            ================================ */}
            <Overlay
                show={showPopupA}
                target={refA.current}
                placement='bottom'
                rootClose
                onHide={() => setShowPopupA(false)}
                >
                <Popover id="popover-dropdownA" className={`${styles.select}`}>
                    <Popover.Body className={`d-flex flex-column align-items-center ${styles.selectBg}`}>

                        <Dropdown.Header as="h6" className={`d-flex justify-content-between ${styles.header}`}>지역</Dropdown.Header>

                        <div className={`${styles.label} d-flex  align-items-center justify-content-between w-100`}
                            onClick={() => {
                                setRegionOpen(prev => !prev);
                                setDetailOpen(false);
                            }}>

                            <span>{tempRegion || "전국"}</span>
                            <span>{regionOpen ? '▲' : '▼'}</span>
                        </div>

                        {regionOpen && (
                            <div className={`w-100 ${styles.selectBody}`}>
                            <div className={styles.scroll}>
                                <Dropdown.Item className={`align-content-center ${styles.selectItem}`} onClick={() => setTempRegion("전국")}>전국</Dropdown.Item>
                                <Dropdown.Item className={`align-content-center ${styles.selectItem}`} onClick={() => setTempRegion("서울특별시")}>서울특별시</Dropdown.Item>
                                <Dropdown.Item className={`align-content-center ${styles.selectItem}`} onClick={() => setTempRegion("부산광역시")}>부산광역시</Dropdown.Item>
                            </div>
                            </div>
                        )}

                        <Dropdown.Header as="h6" className={`d-flex justify-content-between ${styles.header}`}>상세</Dropdown.Header>

                        <div className={`${styles.label} d-flex  align-items-center justify-content-between w-100`}
                            onClick={() => {
                                setDetailOpen(prev => !prev);
                                setRegionOpen(false);
                            }}>

                            <span>{tempDetail || "전체"}</span>
                            <span>{detailOpen ? '▲' : '▼'}</span>
                        </div>


                        {detailOpen && (
                            <div className={`w-100 ${styles.selectBody}`}>
                            <div className={styles.scroll}>
                                <Dropdown.Item className={`align-content-center ${styles.selectItem}`} onClick={() => setTempDetail("전체")}>전체</Dropdown.Item>
                                <Dropdown.Item className={`align-content-center ${styles.selectItem}`} onClick={() => setTempDetail("종로구")}>종로구</Dropdown.Item>
                                <Dropdown.Item className={`align-content-center ${styles.selectItem}`} onClick={() => setTempDetail("강북구")}>강북구</Dropdown.Item>
                            </div>
                            </div>
                        )}

                        <Button as="h6" className={`primary-bg-btn ${styles.dropBtn}`} onClick={applyA}>적용하기</Button>
                    </Popover.Body>
                </Popover>
            </Overlay>





            <Overlay
                show={showPopupB}
                target={refA.current}
                placement='bottom'
                rootClose
                onHide={() => setShowPopupB(false)}>
                <Popover id="popover-dropdownB" className={`${styles.select}`}>
                    <Popover.Body className={`d-flex flex-column align-items-center ${styles.selectBg}`}>
                        <div
                            className={`${styles.label} d-flex align-items-center justify-content-between w-100`}
                            onClick={() => setTypeOpen(prev => !prev)}
                            >
                           <span>{tempType || "전체"}</span>
                        <span>{typeOpen ? '▲' : '▼'}</span>
                        </div>

                        {typeOpen && (
                        <div className={`w-100 ${styles.selectBody}`}>
                        <div className={styles.scroll}>
                            <Dropdown.Item className={`align-content-center ${styles.selectItem}`} onClick={() => setTempType("전체")}>전체</Dropdown.Item>
                            <Dropdown.Item className={`align-content-center ${styles.selectItem}`} onClick={() => setTempType("강아지")}>강아지</Dropdown.Item>
                            <Dropdown.Item className={`align-content-center ${styles.selectItem}`} onClick={() => setTempType("고양이")}>고양이</Dropdown.Item>
                        </div>
                        </div>
                        )}

                        <Button className={`primary-bg-btn ${styles.dropBtn}`} onClick={applyB}>적용하기</Button>
                    </Popover.Body>
                </Popover>
            </Overlay>
        
        </InputGroup>
        </>
    )
}

export default Search;
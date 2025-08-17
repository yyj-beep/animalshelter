// src/components/notice/NoticeBoard.tsx
import React, { useState, useMemo } from 'react'
import { Table } from 'react-bootstrap'
import styles from './NoticeBoard.module.css'
import EyeIcon from '../../components/icons/EyeIcon'
import SearchIcon from '../icons/searchIcon'
import { IoPawOutline } from 'react-icons/io5'
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight
} from 'react-icons/md'
import { notices } from '../../data/notices'

// 타입 캐스팅
const PawIcon = IoPawOutline as React.FC<React.SVGProps<SVGSVGElement>>
const ArrowLeft = MdOutlineKeyboardArrowLeft as React.FC<React.SVGProps<SVGSVGElement>>
const DoubleArrowLeft = MdOutlineKeyboardDoubleArrowLeft as React.FC<React.SVGProps<SVGSVGElement>>
const ArrowRight = MdOutlineKeyboardArrowRight as React.FC<React.SVGProps<SVGSVGElement>>
const DoubleArrowRight = MdOutlineKeyboardDoubleArrowRight as React.FC<React.SVGProps<SVGSVGElement>>

type Notice = {
  id: number
  title: string
  isNew: boolean
  date: string
  viewCount: number
}

const NoticeBoard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const totalPages = 3 // 고정된 페이지 수

  // 검색어 필터링
  const filteredNotices = useMemo(
    () => notices.filter(n => n.title.includes(searchTerm)),
    [searchTerm]
  )

  // 페이지네이션 적용된 공지 목록
  const paginatedNotices = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredNotices.slice(start, start + itemsPerPage)
  }, [filteredNotices, currentPage])

  return (
    <>
      {/* 컨트롤 영역 */}
      <div className={styles.controls}>
        <span className={styles.newsCount}>
          <PawIcon className={styles.pawCountIcon} />
          <span className={styles.textWrapper}>
            <span className={styles.newsNumber}>{filteredNotices.length}</span>
            <span>&nbsp;개의 소식이 있습니다</span>
          </span>
        </span>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="검색어를 입력해 주세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <SearchIcon />
          </button>
        </div>
      </div>

      {/* 테이블 */}
      <Table responsive="md">
        <thead className={styles.header}>
          <tr>
            <th scope="col" className="text-center text">No</th>
            <th scope="col" className="text-center text">제목</th>
            <th scope="col" className="text-center text">작성일</th>
            <th scope="col" className="text-center text">조회수</th>
          </tr>
        </thead>

        <tbody className={styles.content}>
          {paginatedNotices.map(({ id, title, isNew, date, viewCount }) => (
            <tr key={id}>
              <th scope="row" className="text-center text">{id}</th>
              <th>
                <div className="d-flex align-items-center">
                  <p className={`body-large text ${styles.title}`}>{title}</p>
                  {isNew && (
                    <p className={`tab secondary-bg ${styles.newTag}`}>NEW!</p>
                  )}
                </div>
              </th>
              <th className={`text-center text-dark ${styles.date}`}>{date}</th>
              <th className="text-center">
                <div className={`d-flex justify-content-center align-items-center ${styles.viewCount} text-dark`}>
                  <EyeIcon className={styles.icon} />
                  <span>{viewCount}</span>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* 페이지네이션 */}
      <div className={styles.pagination}>
        {/* 처음 페이지로 이동 */}
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
        >
          <DoubleArrowLeft className={styles.arrowIcon} />
        </button>

        {/* 이전 페이지로 이동 */}
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ArrowLeft className={styles.arrowIcon} />
        </button>

        {/* 페이지 번호 */}
        {Array.from({ length: totalPages }, (_, i) => {
          const page = i + 1
          const isActive = page === currentPage

          return (
            <button
              key={page}
              className={`${styles.pageButton} ${isActive ? styles.active : ''}`}
              onClick={() => setCurrentPage(page)}
            >
              <span className={styles.pageNumber}>{page}</span>
              {isActive && <PawIcon className={styles.pawIcon} />}
            </button>
          )
        })}

        {/* 다음 페이지로 이동 */}
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          <ArrowRight className={styles.arrowIcon} />
        </button>

        {/* 마지막 페이지로 이동 */}
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          <DoubleArrowRight className={styles.arrowIcon} />
        </button>
      </div>
    </>
  )
}

export default NoticeBoard
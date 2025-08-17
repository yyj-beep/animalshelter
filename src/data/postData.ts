import volunteer from '../assets/img/post/volunteer.jpg';

export interface PostDataType {
  title: string;
  date: string;
  image:string;
  organizationName: string;
  organizationUrl: string;
  contactPerson: string;
  activityLocation: string;
  recruitmentPeriod: string;
  volunteerPeriod: string;
  facilityContact: string;
  content: string;
  authorName: string;
  likes: number;
  comments: number;
  shares: number;
  warnings: string[];
}

export const postList: PostDataType[] = [
  {
  title: '봉사자분들 모십니다.',
  date: '2025-07-19',
  image:volunteer,
  organizationName: '코코브라더스',
  organizationUrl: 'https://naver.com',
  contactPerson: '홍길동',
  activityLocation: '강원도 가평군',
  recruitmentPeriod: '2025-07-19 ~ 07-19',
  volunteerPeriod: '2025-08-01 ~ 08-14',
  facilityContact: '033-123-4567',
  content: `봉사 내용입니다`,
  authorName: 'Wade Warren',
  likes: 12,
  comments: 3,
  shares: 2,
  warnings: [
    '자원봉사를 신청하기 전, 반드시 기관 및 단체에 대해 자세히 알아보세요.',
    '중앙 유기견 보호센터에 기입된 정보와 실제 정보가 다를 경우, 혹은 사기로 의심될 경우에는 게시글을 신고해 주세요.',
    '자원봉사모집 글은 기관이 자발적으로 올린 글이며, 중앙 유기견 보호센터는 해당 글에 대한 책임이 없음을 미리 알립니다.',
    ],
  },
];

export default postList;

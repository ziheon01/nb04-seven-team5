// RecordList.tsx

'use client';

import { useCallback, useEffect, useState, useRef } from 'react'; // useRef 추가
import classNames from 'classnames/bind';
import { useInView } from 'react-intersection-observer';
import { Record } from '@/types/entities';
import { PaginationQuery } from '@/types/pagination';
import { getRecordsAction } from '../actions';
import styles from './RecordList.module.css';
import RecordListItem from './RecordListItem';

const cx = classNames.bind(styles);

const RecordList = ({
  groupId,
  paginationQuery,
  initialValues = [],
  total,
}: {
  groupId: number;
  paginationQuery: PaginationQuery;
  initialValues: Record[];
  total: number;
}) => {
  const [records, setRecords] = useState(initialValues);
  const [page, setPage] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  // isInitialMount는 첫 렌더링인지 확인하는 용도입니다.
  const isInitialMount = useRef(true);

  const loadMore = useCallback(async () => {
    // page + 1 이 아니라, 현재 페이지(page) 상태를 기준으로 다음 페이지를 불러옵니다.
    const nextPage = page + 1;
    const { data: next } = await getRecordsAction(groupId, {
      ...paginationQuery,
      page: nextPage,
    });

    if (next && next.length > 0) {
      setRecords((prev) => [...prev, ...next]);
      setPage(nextPage);
    }
  }, [groupId, paginationQuery, page]);

  useEffect(() => {
    // hasNext 조건이 true일 때만 loadMore를 호출하도록 수정
    if (inView && records.length < total) {
      loadMore();
    }
  }, [inView, loadMore, records.length, total]);


  // --- 이 useEffect를 수정하여 무한 루프를 방지합니다 ---
  useEffect(() => {
    // 첫 렌더링 이후에는 이 useEffect가 더 이상 데이터를 초기화하지 않도록 합니다.
    if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
    }
    
    // 검색 조건(search)이 바뀔 때만 데이터를 초기화합니다.
    setRecords(initialValues);
    setPage(1);
  }, [initialValues, paginationQuery.search]); // paginationQuery 전체 대신 search만 의존

  return (
    <div className={cx('recordList')}>
      {records.map((record) => (
        <RecordListItem key={record.id} record={record} />
      ))}
      {records.length < total && <div ref={ref} />}
    </div>
  );
};

export default RecordList;
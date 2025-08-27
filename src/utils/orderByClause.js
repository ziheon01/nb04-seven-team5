import { 
  EXERCISE_RECORD_SORT_FILED,
  GROUP_SORT_FILED
 } from "../const/orderByClause.js";

export function GroupService_orderByClause(orderBy, order){
  const orderByClause = {}
  if (orderBy === GROUP_SORT_FILED.CREATED_AT) {
    orderByClause.createdAt = order;
  } else if (orderBy === GROUP_SORT_FILED.PARTICIPANT_COUNT) {
  // 'participant' 관계의 개수(_count)를 기준으로 정렬
  orderByClause.participant = {
    _count: order,
  };
  } else if (orderBy === GROUP_SORT_FILED.LIKE_COUNT) {
  // likeCount 필드를 기준으로 정렬하도록 수정
    orderByClause.likeCount = order;
  }
}


export function ExerciseRecord_orderByClause(orderBy, order){
  const orderByClause = {};
  if (orderBy === EXERCISE_RECORD_SORT_FILED.CREATED_AT){
    orderByClause.createdAt = order;
  } else if (orderBy === EXERCISE_RECORD_SORT_FILED.TIME) {
    orderByClause.time = order;
  } else if (orderBy === EXERCISE_RECORD_SORT_FILED.RECORD_COUNT) {
    orderByClause.recordCount = order;
  }
};


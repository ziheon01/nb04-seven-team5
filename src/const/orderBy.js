export const GROUP_SORT_FILED  = {
  CREATED_AT : 'createdAt',
  PARTICIPANT_COUNT : 'participantCount',
  LIKE_COUNT : 'likeCount'
}

export const EXERCISE_RECORD_SORT_FILED = {
  CREATED_AT : 'createdAt',
  TIME : 'time',
  RECORD_COUNT : 'recordCount'
}

export function options(page, limit, order, orderBy, search){
  return {
    page: parseInt(page),
    limit: parseInt(limit),
    order: order.toLowerCase(),
    orderBy,
    search
  }
}
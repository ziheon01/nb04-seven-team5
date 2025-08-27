export function pagination(page, limit){
  const skip = (page - 1) * limit;
  const take = limit;
  return { skip, take };
}


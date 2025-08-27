import { ERROR } from "../const/errorMessage.js";

export function checking(nickname, password, groupId){
  if(!nickname || !password){
    throw new Error(ERROR.ALL_FILEDS_ARE_REQUIRED)
  }
  if(isNaN(groupId)){
    throw new Error(ERROR.MUST_BE_INT(groupId))
  }
  if(typeof nickname !== 'string'){
    throw new ERROR(ERROR.INVALID_TYPE(nickname));
  }
  if(typeof password !== 'string'){
    throw new Error(ERROR.INVALID_TYPE(password))
  }
  if(typeof groupId !== 'number'){
    throw new Error(ERROR.INVALID_TYPE(groupId));
  }
  return {nickname, password, groupId}
}


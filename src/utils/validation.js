import { ERROR } from "../const/errorMessage.js";

export function checkGroupId (groupId){
  const parsedGroupId = parseInt(groupId,10);
  if (isNaN(parsedGroupId)){
    throw new Error(ERROR.MUST_BE_INT('groupId'));
  }
  return parsedGroupId;
}

export function checkOwnerPassword(ownerPassword){
  if(!ownerPassword){
    throw new Error(ERROR.OWNER_WRONG_PASSWORD);
  }
  return ownerPassword
}

export function checkParticipantId(participantId){
  const parsedParticipantId = parseInt(participantId,10);
  if (isNaN(parsedParticipantId)){
    throw new Error (ERROR.MUST_BE_INT('participantId'));
  }
  return parsedParticipantId
}


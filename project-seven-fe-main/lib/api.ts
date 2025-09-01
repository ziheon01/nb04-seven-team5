import { AxiosError } from 'axios';
import {
  Group,
  GroupCreate,
  GroupDelete,
  GroupJoin,
  GroupUpdate,
  Rank,
  RankDuration,
  Record,
  RecordCreate,
} from '@/types/entities';
import { PaginationQuery, PaginationResponse } from '@/types/pagination';
import { axios } from './axios';

export const DEFAULT_GROUPS_PAGINATION_QUERY: PaginationQuery = {
  page: 1,
  limit: 6,
  order: 'desc',
  orderBy: 'createdAt',
  search: '',
};

const logError = (error: unknown) => {
  if (error instanceof AxiosError) {
    const response = error.response;
    if (response) {
      console.error(
        `[프론트] ${response.config.method?.toUpperCase()} ${
          response.config.url
        } ${response.status}`
      );
      console.error(response.data);
    }
  }
};

export const getGroups = async (
  query: PaginationQuery
): Promise<PaginationResponse<Group>> => {
  try {
    const response = await axios.get('/groups', {
      params: {
        ...DEFAULT_GROUPS_PAGINATION_QUERY,
        ...query,
      },
    });
    const { data, total } = response.data;
    return { data, total };
  } catch (error) {
    logError(error);
    throw error;
  }
};

export const getGroup = async (groupId: number): Promise<Group> => {
  try {
    const response = await axios.get(`/groups/${groupId}`);
    const group = response.data;
    return group;
  } catch (error) {
    logError(error);
    throw error;
  }
};

export const createGroup = async (
  group: GroupCreate & { photoFile?: File | null }
): Promise<Group> => {
  try {
    const formData = new FormData();
    formData.append('name', group.name);
    if (group.description) formData.append('description', group.description);
    formData.append('goalRep', group.goalRep.toString());
    if (group.discordWebhookUrl)
      formData.append('discordWebhookUrl', group.discordWebhookUrl);
    if (group.discordInviteUrl)
      formData.append('discordInviteUrl', group.discordInviteUrl);
    group.tags.forEach(tag => formData.append('tags', tag)); // Append each tag individually
    formData.append('ownerNickname', group.ownerNickname);
    formData.append('ownerPassword', group.ownerPassword);
    if (group.photoFile) formData.append('groupPhoto', group.photoFile); // Append the file

    const response = await axios.postForm('/groups', formData);
    const createdGroup = response.data;
    return createdGroup;
  } catch (error) {
    logError(error);
    throw error;
  }
};

export const updateGroup = async (
  groupId: number,
  group: GroupUpdate
): Promise<Group> => {
  try {
    const response = await axios.patch(`/groups/${groupId}`, group);
    const updatedGroup = response.data;
    return updatedGroup;
  } catch (error) {
    logError(error);
    throw error;
  }
};

export const deleteGroup = (groupId: number, data: GroupDelete) => {
  return axios.delete(`/groups/${groupId}`, { data }).catch((error) => {
    logError(error);
    throw error;
  });
};

export const joinGroup = async (
  groupId: number,
  data: GroupJoin
): Promise<void> => {
  try {
    await axios.post(`/groups/${groupId}/participants`, data);
  } catch (error) {
    logError(error);
    throw error;
  }
};

export const leaveGroup = async (
  groupId: number,
  data: GroupJoin
): Promise<void> => {
  try {
    await axios.delete(`/groups/${groupId}/participants`, {
      data,
    });
  } catch (error) {
    logError(error);
    throw error;
  }
};

export const likeGroup = async (groupId: number): Promise<void> => { // participantId 파라미터 삭제
  try {
    // 요청 본문(body) 없이, 경로로만 요청을 보냅니다.
    await axios.post(`/groups/${groupId}/like`);
  } catch (error) {
    logError(error);
    throw error;
  }
};

export const unlikeGroup = async (groupId: number): Promise<void> => { // participantId 파라미터 삭제
  try {
    // 요청 본문(body) 없이, 경로로만 요청을 보냅니다.
    await axios.delete(`/groups/${groupId}/like`);
  } catch (error) {
    logError(error);
    throw error;
  }
};

export const DEFAULT_RECORDS_PAGINATION_QUERY: PaginationQuery = {
  page: 1,
  limit: 6,
  order: 'desc',
  orderBy: 'createdAt',
  search: '',
};

// Define a type for the raw record object from the API to avoid using 'any'
interface ApiRecord {
  id: number;
  exerciseType: string;
  description: string;
  time: number;
  distance: number;
  participant: { id: number; nickname: string };
  participantPhoto?: { photoUrl: string }[];
}

export const getRecords = async (
  groupId: number,
  query: PaginationQuery
): Promise<PaginationResponse<Record>> => {
  try {
    const response = await axios.get(`/groups/${groupId}/records`, {
      params: {
        ...DEFAULT_RECORDS_PAGINATION_QUERY,
        ...query,
      },
    });
    const { data: rawData, total } = response.data;

    const data = rawData.map((record: ApiRecord) => ({
      id: record.id,
      exerciseType: record.exerciseType,
      description: record.description,
      time: record.time,
      distance: record.distance,
      author: record.participant, // participant -> author로 변경
      photos: record.participantPhoto
        ? record.participantPhoto.map((p: { photoUrl: string }) => p.photoUrl)
        : [],
    }));

    return { data, total };
  } catch (error) {
    logError(error);
    throw error;
  }
};

export const createRecord = async (
  groupId: number,
  record: RecordCreate
): Promise<Record> => {
  try {
    const response = await axios.post(`/groups/${groupId}/records`, record);
    const createdRecord = response.data;
    return createdRecord;
  } catch (error) {
    logError(error);
    throw error;
  }
};

export const getRanks = async (
  groupId: number,
  duration: RankDuration,
  query: PaginationQuery = DEFAULT_RECORDS_PAGINATION_QUERY
): Promise<PaginationResponse<Rank>> => {
  try {
    const response = await axios.get(`/groups/${groupId}/ranks`, { // Changed to /ranks (plural)
      params: {
        ...query,
        ranking: 'count', // Defaulting to 'count' as per gemini.md's "운동 기록 많은 순"
        duration: duration, // Pass duration for date filtering
        orderBy: 'recordCount', // Set a valid default for ranks
      },
    });
    // The ranks endpoint returns an array directly, not a pagination object.
    const data = response.data;
    return { data, total: data.length }; // Manually construct the pagination response
  } catch (error) {
    logError(error);
    throw error;
  }
};

export const uploadImage = async (
  files: File[]
): Promise<{
  urls: string[];
}> => {
  try {
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));
    const response = await axios.postForm('/images', formData);
    const { urls } = response.data;
    return { urls };
  } catch (error) {
    logError(error);
    throw error;
  }
};
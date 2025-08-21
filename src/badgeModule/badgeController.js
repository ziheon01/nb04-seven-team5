//TODO: 실제 경로 맞게 수정필요
import { badgeTypesStatus, updateBadgeStatus } from '../services/badgeService.js'; 

export async function updateGroupBadges(req, res, next) {
  try {
    const groupId = Number(req.params.groupId);
    if (!groupId || isNaN(groupId)) {
      return res.status(400).json({ error: 'Invalid or missing groupId parameter' });
    }

    // 1. 배지 상태 계산
    const statuses = await badgeTypesStatus(groupId);

    // 2. DB에 상태 업데이트
    await updateBadgeStatus(groupId, statuses);

    // 3. 성공 응답
    res.json({ message: 'Badge status updated successfully', badges: statuses });
  } catch (error) {
    next(error);
  }
}

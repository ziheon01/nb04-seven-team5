export async function checkGroupAndOwner(groupId, ownerPassword) {
    const parsedGroupId = parseInt(groupId);
    if (isNaN(parsedGroupId)) {
        throw new Error(ERROR.MUST_BE_INT('groupId'));
    }

    const group = await prisma.group.findUnique({
        where: { id: parsedGroupId },
    });

    if (!group) {
        throw new Error(ERROR.NOT_FOUND('그룹'));
    }

    if (group.ownerPassword !== ownerPassword) {
        throw new Error(ERROR.OWNER_WRONG_PASSWORD);
    }
    return group;
}
export function isValidCelebrationType(type, freetext) {
    if (type !== 'Other') return true;
    if (freetext.length > 1) return true;
    return false;
}

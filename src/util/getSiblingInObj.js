import getSiblingInArr from './getSiblingInArr';

export default function getSiblingInObj(item, obj, direction = 1) {
    const key = getSiblingInArr(item, obj.keys(), direction);

    return obj[key];
}

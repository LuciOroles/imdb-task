export const mapAString = (s: string): Map<string, number> => {

    const result = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!result.has(s[i])) {
            const regex = new RegExp(s[i], 'g');
            const occurence = (s.match(regex) || []).length;

            result.set(s[i], occurence);
        }
    }

    return result;
};

export const compareMaps = <K, V>(map1: Map<K, V>, map2: Map<K, V>): boolean => {

    if (map1.size !== map2.size) return false;

    for (let [key, val] of map1) {
        if (!map2.has(key)) {
            return false;
        }
        if (map2.get(key) !== val) {
            return false;
        }
    }

    return true;
};


export function findAnagrams(s: string, p: string): number[] {

    const result: number[] = [];
    const mapP = mapAString(p);
    const endIndex = s.length - p.length;

    for (let index = 0; index <= endIndex; index++) {
        const window = s.substring(index, index + p.length);

        if (compareMaps(mapP, mapAString(window))) {
            result.push(index);
        }
    }


    return result;
};



// (() => {
//     const s = "abcacbccb";
//     const p = "abc";
//     const result = findAnagrams(s, p);

//     console.log(result, ' found at indexes');

//     const s1 = "cbaebabacd", p1 = "abc";

//     console.log(findAnagrams(s1, p1));
// })();
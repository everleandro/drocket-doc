
export default function () {
    const isObject = (arg: any): boolean => {
        return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
    }

    return {
        isObject
    };
}
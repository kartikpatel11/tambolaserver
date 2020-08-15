export * from "./route";
import * as RouteUtil from "./util";
export {
    RouteUtil,
};
declare const BigInt : any;
export function tryPolyfillBigIntToJson () {
    try {
        const existing = (BigInt.prototype as any).toJSON;
        if (existing != undefined) {
            return {
                success : false,
                err : undefined,
                message : "BigInt.prototype.toJSON already exists",
            } as const;
        }
        //No existing toJSON() polyfill,
        //We add our own.
        //This toJSON() polyfill should work for any BigInt polyfill
        //that has a `.toString()` method.
        (BigInt.prototype as any).toJSON = function (this : bigint) {
            const str = this.toString();
            const num = Number(str);
            if (num.toString() == str) {
                //Prefer `number`
                return num;
            } else {
                //Fallback to `string`
                //Useful when numbers get too large to represent correctly
                return str;
            }
        };
        return {
            success : true,
        } as const;
    } catch (err) {
        return {
            success : false,
            err : err,
            message : err.message as string,
        } as const;
    }
}
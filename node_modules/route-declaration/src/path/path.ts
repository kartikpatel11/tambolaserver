import {AppendParam, appendParam} from "./operation";

export type UnknownParam<ParamNameT extends string> = {
    [name in ParamNameT] : unknown;
};

export interface ParamPart<NameT extends string> {
    readonly name  : NameT,
    readonly regex : RegExp|undefined,
}

export class Path<ParamNameT extends string> {
    /**
        Each element is a part of the entire path.
    */
    readonly parts : readonly (string|ParamPart<ParamNameT>)[];
    /**
        Meant for use with `express`.
        ```ts
        const app = express();
        app.get(routerPath, (req, res) => {
            //impl
        });
        ```
    */
    readonly routerPath : string;
    constructor (
        parts : readonly (string|ParamPart<ParamNameT>)[],
        routerPath : string
    ) {
        this.parts = parts;
        this.routerPath = routerPath
            .replace(/\/{2,}/g, "/")
            .replace(/\/$/g, "");
    }
    static Create () {
        return new Path<never>([], "");
    }

    append (part : string) : Path<ParamNameT> {
        if (part.length == 0) {
            //No change, return a copy, anyway
            return new Path(
                [...this.parts],
                this.routerPath
            );
        }
        if (part.indexOf(":") >= 0) {
            throw new Error(`":" not allowed in part, ${part}`);
        }
        if (part[0] != "/") {
            throw new Error(`part must start with "/", ${part}`);
        }
        if (part.length > 1 && part[part.length-1] == "/") {
            throw new Error(`part must not end with "/", ${part}`);
        }
        part = part
            .replace(/\/{2,}/g, "/")
            .replace(/\/$/g, "");

        return new Path(
            [...this.parts, part],
            (this.routerPath + part)
        );
    }
    /**
        regex, if provided, ignores modifiers like `g` and `i`
    */
    appendParam<NameT extends string> (name : NameT, regex? : RegExp) : AppendParam<this, NameT> {
        return appendParam(this, name, regex);
    }
    getCallingPath (param : UnknownParam<ParamNameT>) : string {
        let result = "";
        for (const part of this.parts) {
            if (typeof part == "string") {
                result += part;
            } else {
                const raw : unknown = param[part.name];
                const value = (raw instanceof Date) ?
                    raw.toJSON() :
                    String(raw);
                if (part.regex != undefined) {
                    if (!new RegExp(`^${part.regex.source}$`).test(value)) {
                        throw new Error(`Invalid value for ${part.name}, received ${value}; expected /^${part.regex.source}$/`);
                    }
                }
                result += `/${encodeURIComponent(value)}`;
            }
        }
        return result
            .replace(/\/{2,}/g, "/")
            .replace(/\/$/g, "");
    }
    hasParamParts () {
        return this.parts.some(i => (typeof i != "string"));
    }
    getParamParts () : ParamPart<ParamNameT>[] {
        return this.parts.filter((i) : i is ParamPart<ParamNameT> => (typeof i != "string"));
    }
}
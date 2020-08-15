import * as tm from "type-mapping/fluent";
import * as rd from "../../../../../dist";

export const connectSomething = rd.route()
    .setMethod("CONNECT")
    .append("/v1")
    .append("/foo")
    .appendParam("x")
    .append("/bar")
    .appendParam("y")
    .setParam(tm.object({
        x : tm.stringToBigInt(),
        y : tm.stringToBoolean(),
    }))
    .setQuery(tm.object({
        page : tm.mysql.bigIntUnsigned().optional(),
        rowsPerPage : tm.mysql.bigIntUnsigned().pipe(
            tm.bigIntGt(BigInt(0))
        ).optional(),
    }))
    .setBody(tm.object({
        amount : tm.integer()
            .pipe(tm.gt(0)),
        currency : tm.mysql.char(3),
        capture : tm.mysql.boolean().optional(),
    }))
    .setHeader(tm.object({
        "Api-Key" : tm.stringLength({
            min : 32,
        }),
    }))
    .setResponse(tm.object({
        fooBarStatus : tm.mysql.dateTime(3).orNull(),
        optionalField : tm.mysql.blob().optional(),
        fieldOrUndefined : tm.mysql.boolean().orUndefined(),
    }))
    .deepMergeQuery(tm.object({
        latest : tm.mysql.boolean().optional(),
        startingFrom : tm.mysql.dateTime(3).optional(),
    }));
export const someMethod = connectSomething.getMethod();
# `route-declaration`

Declare HTTP routes once.

Use declarations on server and client code.

Uses [`type-mapping`](https://github.com/anyhowstep/type-mapping) for input/output mapping.

-----

On their own, the declarations do not do much.

However, the declarations may be used by networking libraries to make HTTP requests
and map the input/output.

The declarations may also be used by routing libraries to implement API endpoints.

-----

### Installation

```
npm install --save route-declaration
```

-----

### Basic Usage

```ts
import * as tm from "type-mapping/fluent";
import {route} from "route-declaration";

const appFields = tm.fields({
    appId : tm.mysql.bigIntUnsigned(),
    name : tm.mysql.varChar(1, 255),
    description : tm.mysql.varChar(1, 1024),
    enabled : tm.mysql.boolean(),
    secret : tm.mysql.varChar(64, 255),
});

const appResponse = tm.object(appFields);

/**
    We declare the routes of the resource `app`
*/
export const app = {
    /**
        POST /app
        To create an app
    */
    create : route()
        .append("/app")
        //HTTP method is "POST" when method is not set
        //but body is set
        .setBody(tm.object(
            appFields.name,
            appFields.description,
            appFields.enabled.optional(),
        ))
        //You may explicitly set the HTTP method
        .setMethod("POST")
        .setResponse(appResponse),
    /**
        GET /app
        To paginate a list of apps
    */
    //HTTP method is "GET" when method is not set
    //and body is not set
    paginate : route()
        .append("/app")
        .setQuery(tm.object({
            page : tm.stringToUnsignedInteger().optional(),
            rowsPerPage : tm.stringToInteger().pipe(tm.gt(0)).optional(),
        }))
        //You may explicitly set the HTTP method
        .setMethod("GET")
        .setResponse(tm.object({
            rows : appResponse.array(),
            info : tm.object({
                page : tm.unsignedInteger(),
                rowsPerPage : tm.integer().pipe(tm.gt(0)),
                rowsFound : tm.unsignedInteger(),
                pagesFound : tm.unsignedInteger(),
            }),
        })),
    /**
        GET /app/:appId
        To fetch a particular app
    */
    fetch : route()
        .append("/app")
        //Regex to validate the param name is optional
        .appendParam("appId", /\d+/)
        .setParam(tm.object(
            appFields.appId
        ))
        .setResponse(appResponse),
    /**
        PUT /app/:appId
        To update a particular app
        May change the name, description, enabled properties
    */
    update : route()
        //In general, the route builder does not
        //enforce calling the methods in any
        //particular order.
        .setMethod("PUT")
        //However, the order of `.append()` and
        //`.appendParam()` calls is important
        .append("/app")
        .appendParam("appId", /\d+/)
        .setParam(tm.object(
            appFields.appId
        ))
        .setBody(tm.object(
            appFields.name.optional(),
            appFields.description.optional(),
            appFields.enabled.optional(),
        ))
        .setResponse(appResponse),
    /**
        DELETE /app/:appId
        To delete a particular app
    */
    delete : route()
        .setMethod("DELETE")
        .append("/app")
        .appendParam("appId", /\d+/)
        .setParam(tm.object(
            appFields.appId
        )),
};
```

-----

### Contributing

(TODO)

-----

### Tests

```
npm run sanity-check
```

The above command rebuilds this package and runs the compile-time and run-time tests.

-----

# Cookbook

(TODO)
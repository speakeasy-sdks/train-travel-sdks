/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export enum GetStationsAcceptEnum {
    applicationJson = "application/json",
    applicationXml = "application/xml",
}

export class Stations extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Get a list of train stations
     *
     * @remarks
     * Returns a list of all train stations in the system.
     */
    async getStations(
        options?: RequestOptions & { acceptHeaderOverride?: GetStationsAcceptEnum }
    ): Promise<operations.GetStationsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);

        const accept = options?.acceptHeaderOverride || "application/json;q=1, application/xml;q=0";
        headers$.set("Accept", accept);

        const path$ = this.templateURLComponent("/stations")();

        const query$ = "";

        let security$;
        if (typeof this.options$.oAuth2 === "function") {
            security$ = { oAuth2: await this.options$.oAuth2() };
        } else if (this.options$.oAuth2) {
            security$ = { oAuth2: this.options$.oAuth2 };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "get-stations",
            oAuth2Scopes: [],
            securitySource: this.options$.oAuth2,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: ["400", "401", "403", "429", "4XX", "500", "5XX"],
        };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetStationsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Headers: this.unpackHeaders(response.headers),
                        "200_application/json_object": val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchResponse(response, 200, "application/xml")) {
            const responseBody = await response.arrayBuffer();
            const result = schemas$.parse(
                new Uint8Array(responseBody),
                (val$) => {
                    return operations.GetStationsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Headers: this.unpackHeaders(response.headers),
                        Body: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else if (this.matchStatusCode(response, [400, 401, 403, 429, 500])) {
            return schemas$.parse(
                this.unpackHeaders(response.headers),
                (val$) =>
                    operations.GetStationsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        Headers: val$,
                    }),
                "Response validation failed"
            );
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }
}

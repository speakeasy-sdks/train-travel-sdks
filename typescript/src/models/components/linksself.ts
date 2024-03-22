/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type LinksSelf = {
    self?: string | undefined;
};

/** @internal */
export namespace LinksSelf$ {
    export type Inbound = {
        self?: string | undefined;
    };

    export const inboundSchema: z.ZodType<LinksSelf, z.ZodTypeDef, Inbound> = z
        .object({
            self: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.self === undefined ? null : { self: v.self }),
            };
        });

    export type Outbound = {
        self?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LinksSelf> = z
        .object({
            self: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.self === undefined ? null : { self: v.self }),
            };
        });
}

/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as b64$ from "../../lib/base64";
import * as components from "../components";
import * as z from "zod";

export type GetBookingRequest = {
    /**
     * The ID of the booking to retrieve.
     */
    bookingId: string;
};

/**
 * The booking details
 */
export type GetBookingBookingsResponseBody = {
    /**
     * Unique identifier for the booking
     */
    id?: string | undefined;
    /**
     * Identifier of the booked trip
     */
    tripId?: string | undefined;
    /**
     * Name of the passenger
     */
    passengerName?: string | undefined;
    /**
     * Indicates whether the passenger has a bicycle.
     */
    hasBicycle?: boolean | undefined;
    /**
     * Indicates whether the passenger has a dog.
     */
    hasDog?: boolean | undefined;
    links?: components.LinksSelf | undefined;
};

/**
 * The booking details
 */
export type GetBookingResponseBody = {
    /**
     * Unique identifier for the booking
     */
    id?: string | undefined;
    /**
     * Identifier of the booked trip
     */
    tripId?: string | undefined;
    /**
     * Name of the passenger
     */
    passengerName?: string | undefined;
    /**
     * Indicates whether the passenger has a bicycle.
     */
    hasBicycle?: boolean | undefined;
    /**
     * Indicates whether the passenger has a dog.
     */
    hasDog?: boolean | undefined;
    links?: components.LinksSelf | undefined;
};

export type GetBookingResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * The booking details
     */
    twoHundredApplicationJsonObject?: GetBookingResponseBody | undefined;
    body?: Uint8Array | string | undefined;
    headers: Record<string, Array<string>>;
};

/** @internal */
export namespace GetBookingRequest$ {
    export type Inbound = {
        bookingId: string;
    };

    export const inboundSchema: z.ZodType<GetBookingRequest, z.ZodTypeDef, Inbound> = z
        .object({
            bookingId: z.string(),
        })
        .transform((v) => {
            return {
                bookingId: v.bookingId,
            };
        });

    export type Outbound = {
        bookingId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBookingRequest> = z
        .object({
            bookingId: z.string(),
        })
        .transform((v) => {
            return {
                bookingId: v.bookingId,
            };
        });
}

/** @internal */
export namespace GetBookingBookingsResponseBody$ {
    export type Inbound = {
        id?: string | undefined;
        trip_id?: string | undefined;
        passenger_name?: string | undefined;
        has_bicycle?: boolean | undefined;
        has_dog?: boolean | undefined;
        links?: components.LinksSelf$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetBookingBookingsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            trip_id: z.string().optional(),
            passenger_name: z.string().optional(),
            has_bicycle: z.boolean().optional(),
            has_dog: z.boolean().optional(),
            links: components.LinksSelf$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.trip_id === undefined ? null : { tripId: v.trip_id }),
                ...(v.passenger_name === undefined ? null : { passengerName: v.passenger_name }),
                ...(v.has_bicycle === undefined ? null : { hasBicycle: v.has_bicycle }),
                ...(v.has_dog === undefined ? null : { hasDog: v.has_dog }),
                ...(v.links === undefined ? null : { links: v.links }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        trip_id?: string | undefined;
        passenger_name?: string | undefined;
        has_bicycle?: boolean | undefined;
        has_dog?: boolean | undefined;
        links?: components.LinksSelf$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBookingBookingsResponseBody> =
        z
            .object({
                id: z.string().optional(),
                tripId: z.string().optional(),
                passengerName: z.string().optional(),
                hasBicycle: z.boolean().optional(),
                hasDog: z.boolean().optional(),
                links: components.LinksSelf$.outboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    ...(v.id === undefined ? null : { id: v.id }),
                    ...(v.tripId === undefined ? null : { trip_id: v.tripId }),
                    ...(v.passengerName === undefined ? null : { passenger_name: v.passengerName }),
                    ...(v.hasBicycle === undefined ? null : { has_bicycle: v.hasBicycle }),
                    ...(v.hasDog === undefined ? null : { has_dog: v.hasDog }),
                    ...(v.links === undefined ? null : { links: v.links }),
                };
            });
}

/** @internal */
export namespace GetBookingResponseBody$ {
    export type Inbound = {
        id?: string | undefined;
        trip_id?: string | undefined;
        passenger_name?: string | undefined;
        has_bicycle?: boolean | undefined;
        has_dog?: boolean | undefined;
        links?: components.LinksSelf$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetBookingResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            trip_id: z.string().optional(),
            passenger_name: z.string().optional(),
            has_bicycle: z.boolean().optional(),
            has_dog: z.boolean().optional(),
            links: components.LinksSelf$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.trip_id === undefined ? null : { tripId: v.trip_id }),
                ...(v.passenger_name === undefined ? null : { passengerName: v.passenger_name }),
                ...(v.has_bicycle === undefined ? null : { hasBicycle: v.has_bicycle }),
                ...(v.has_dog === undefined ? null : { hasDog: v.has_dog }),
                ...(v.links === undefined ? null : { links: v.links }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        trip_id?: string | undefined;
        passenger_name?: string | undefined;
        has_bicycle?: boolean | undefined;
        has_dog?: boolean | undefined;
        links?: components.LinksSelf$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBookingResponseBody> = z
        .object({
            id: z.string().optional(),
            tripId: z.string().optional(),
            passengerName: z.string().optional(),
            hasBicycle: z.boolean().optional(),
            hasDog: z.boolean().optional(),
            links: components.LinksSelf$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.tripId === undefined ? null : { trip_id: v.tripId }),
                ...(v.passengerName === undefined ? null : { passenger_name: v.passengerName }),
                ...(v.hasBicycle === undefined ? null : { has_bicycle: v.hasBicycle }),
                ...(v.hasDog === undefined ? null : { has_dog: v.hasDog }),
                ...(v.links === undefined ? null : { links: v.links }),
            };
        });
}

/** @internal */
export namespace GetBookingResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        "200_application/json_object"?: GetBookingResponseBody$.Inbound | undefined;
        Body?: Uint8Array | string | undefined;
        Headers: Record<string, Array<string>>;
    };

    export const inboundSchema: z.ZodType<GetBookingResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            "200_application/json_object": z
                .lazy(() => GetBookingResponseBody$.inboundSchema)
                .optional(),
            Body: b64$.zodInbound.optional(),
            Headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v["200_application/json_object"] === undefined
                    ? null
                    : { twoHundredApplicationJsonObject: v["200_application/json_object"] }),
                ...(v.Body === undefined ? null : { body: v.Body }),
                headers: v.Headers,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        "200_application/json_object"?: GetBookingResponseBody$.Outbound | undefined;
        Body?: Uint8Array | undefined;
        Headers: Record<string, Array<string>>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetBookingResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            twoHundredApplicationJsonObject: z
                .lazy(() => GetBookingResponseBody$.outboundSchema)
                .optional(),
            body: b64$.zodOutbound.optional(),
            headers: z.record(z.array(z.string())),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.twoHundredApplicationJsonObject === undefined
                    ? null
                    : { "200_application/json_object": v.twoHundredApplicationJsonObject }),
                ...(v.body === undefined ? null : { Body: v.body }),
                Headers: v.headers,
            };
        });
}

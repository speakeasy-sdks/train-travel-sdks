# Trips
(*trips*)

## Overview

Timetables and routes for train trips between stations, including  pricing and availability.

### Available Operations

* [getTrips](#gettrips) - Get available train trips

## getTrips

Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.

### Example Usage

```typescript
import { Traintravel } from "traintravel";

async function run() {
  const sdk = new Traintravel({
    oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const result = await sdk.trips.getTrips({
    origin: "82024571-aa7c-4ed5-8370-a1e9a710b4ee",
    destination: "16b1ba16-bd9f-4ed0-8a25-5e4245c918d7",
    date: new Date("2024-04-11T08:38:01.738Z"),
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTripsRequest](../../models/operations/gettripsrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetTripsResponse](../../models/operations/gettripsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

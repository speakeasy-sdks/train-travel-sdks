# Trips
(*trips*)

## Overview

Timetables and routes for train trips between stations, including  pricing and availability.

### Available Operations

* [get_trips](#get_trips) - Get available train trips

## get_trips

Returns a list of available train trips between the specified origin and destination stations on the given date, and allows for filtering by bicycle and dog allowances.

### Example Usage

```python
import dateutil.parser
import traintravel
from traintravel.models import operations

s = traintravel.Traintravel(
    o_auth2="Bearer <YOUR_ACCESS_TOKEN_HERE>",
)

req = operations.GetTripsRequest(
    origin='82024571-aa7c-4ed5-8370-a1e9a710b4ee',
    destination='16b1ba16-bd9f-4ed0-8a25-5e4245c918d7',
    date_=dateutil.parser.isoparse('2024-04-11T08:38:01.738Z'),
)

res = s.trips.get_trips(req)

if res.two_hundred_application_json_object is not None:
    # handle response
    pass

```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.GetTripsRequest](../../models/operations/gettripsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |


### Response

**[operations.GetTripsResponse](../../models/operations/gettripsresponse.md)**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4x-5xx          | */*             |

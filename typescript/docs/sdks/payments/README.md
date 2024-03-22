# Payments
(*payments*)

## Overview

Pay for bookings using a card or bank account, and view payment
status and history.

> warn
> Bookings usually expire within 1 hour so you'll need to make your payment before the expiry date 


### Available Operations

* [createBookingPayment](#createbookingpayment) - Pay for a Booking

## createBookingPayment

A payment is an attempt to pay for the booking, which will confirm the booking for the user and enable them to get their tickets.

### Example Usage

```typescript
import { Traintravel } from "traintravel";
import { AccountType } from "traintravel/models/components";

async function run() {
  const sdk = new Traintravel({
    oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
  });

  const bookingId = "63d1e65c-f662-41f5-a1a8-d8793821ab51";
  const bookingPayment = {
    amount: 49.99,
  source:     {
        name: "<value>",
        number: "<value>",
        accountType: AccountType.Company,
        bankName: "Starling Bank",
        country: "Saint Pierre and Miquelon",
      },
  };
  
  const result = await sdk.payments.createBookingPayment(bookingId, bookingPayment);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `bookingId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the booking to pay for.                                                                                                                                              |
| `bookingPayment`                                                                                                                                                               | [components.BookingPayment](../../models/components/bookingpayment.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateBookingPaymentResponse](../../models/operations/createbookingpaymentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

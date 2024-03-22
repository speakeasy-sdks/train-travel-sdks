<!-- Start SDK Example Usage [usage] -->
```typescript
import { Traintravel } from "traintravel";

async function run() {
    const sdk = new Traintravel({
        oAuth2: "Bearer <YOUR_ACCESS_TOKEN_HERE>",
    });

    const result = await sdk.stations.getStations();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->
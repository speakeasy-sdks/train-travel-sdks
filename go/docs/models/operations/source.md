# Source

The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.


## Supported Types

### Card

```go
source := operations.CreateSourceCard(operations.Card{/* values here */})
```

### BankAccount

```go
source := operations.CreateSourceBankAccount(operations.BankAccount{/* values here */})
```


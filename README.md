# Crypto Portfolio

## Database

### MCD
```
//// -- LEVEL 1
//// -- Tables and References

// Creating tables
Table Users {
  id int [pk, increment] // auto-increment
  name string
  email string
  created_at date
  updatedAt date
}

Table Portfolios {
  id int [pk, increment]
  title string
  description string
  idUser int
}

Table Transactions {
  id int [pk, increment]
  idPortfolio int
  idCoin int
  type int
  pricePerCoin int
  currency int
  quantity int
  date datetime
  fees int
  feesCurrency int
  note varchar
}

Table Coins {
  id int [pk, increment]
  slug string
  name string
  
}
Table TransactionTypes {
  id int [pk, increment]
  name string
}

Table Currencies {
  id int [pk, increment]
  name string
}

Ref: Portfolios.idUser > Users.id
Ref: Transactions.idPortfolio > Portfolios.id
Ref: Transactions.idCoin > Coins.id
Ref: Transactions.currency > Currencies.id
Ref: Transactions.feesCurrency > Currencies.id
Ref: Transactions.type > TransactionTypes.id


```

## Prisma command

**Create the tables in database :** 
```
npx prisma db push
```

**Open Prisma Studio:** 
```
npx prisma studio
```

**Update Prisma Schema:**
```
npx prisma generate
```
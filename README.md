
# Toystore

This is an API for a toy store owner.

Contact Info: [rabownick123@gmail.com](rabownick123@gmail.com)

Version: 1.0.0

ISC

## Access

## Methods

\[ Jump to [Models](#__Models) \]

### Table of Contents

#### [Item](#Item)

- [`get /item`](#findToysByName)
- [`delete /item`](#itemDelete)
- [`post /item`](#itemsPost)

# Item

[Up](#__Methods)

    get /item

Find item by name (findToysByName)

Give name of item and ToyItem object will be returned with name and price

### Query parameters

name (required)

Query Parameter — Name value that need to be considered for filter

### Return type

[Item](#Item)

### Example data

Content-Type: application/json

    {
      "toyName" : "Hot Wheelz",
      "toyPrice" : 1.99
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

- `application/json`

### Responses

#### 200

successful pull of toy info [Item](#Item)

#### 400

item does not exist [inline_response_400](#inline_response_400)

#### 401

user not authorized [inline_response_401](#inline_response_401)

---

[Up](#__Methods)

    delete /item

Delete item from DB. (itemDelete)

Deltem item from store DB given a name.

### Query parameters

name (required)

Query Parameter — Name of the item to be deleted from DB.

### Return type

[Item](#Item)

### Example data

Content-Type: application/json

    {
      "toyName" : "Hot Wheelz",
      "toyPrice" : 1.99
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

- `application/json`

### Responses

#### 200

successful delete item [Item](#Item)

#### 400

item does not exist [inline_response_400](#inline_response_400)

#### 401

user not authorized [inline_response_401](#inline_response_401)

---

[Up](#__Methods)

    post /item

Add item (itemsPost)

Adds item to the store inventory DB. Needs to be given a name and a price. Duplicates cannot be added.

### Consumes

This API call consumes the following media types via the Content-Type request header:

- `application/json`

### Request body

body [Item](#Item) (required)

Body Parameter —

### Return type

[Item](#Item)

### Example data

Content-Type: application/json

    {
      "toyName" : "Hot Wheelz",
      "toyPrice" : 1.99
    }

### Produces

This API call produces the following media types according to the Accept request header; the media type will be conveyed by the Content-Type response header.

- `application/json`

### Responses

#### 200

successful add new item [Item](#Item)

#### 400

item already exists [inline_response_400_1](#inline_response_400_1)

#### 401

user not authorized [inline_response_401](#inline_response_401)

---

## Models

\[ Jump to [Methods](#__Methods) \]

### Table of Contents

1.  [`Item`](#Item)
2.  [`inline_response_400`](#inline_response_400)
3.  [`inline_response_400_1`](#inline_response_400_1)
4.  [`inline_response_401`](#inline_response_401)

### `Item` [Up](#__Models)

Model containing item information

toyName (optional)

[String](#string) Name of the toy

example: Hot Wheelz

toyPrice (optional)

[BigDecimal](#BigDecimal) Price of the toy

example: 1.99

### `inline_response_400` [Up](#__Models)

error (optional)

[String](#string)

example: Item does not exist in database

### `inline_response_400_1` [Up](#__Models)

error (optional)

[String](#string)

example: Item is already in database

### `inline_response_401` [Up](#__Models)

error (optional)

[String](#string)

example: Client unauthorized for request

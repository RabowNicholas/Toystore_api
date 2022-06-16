Toystore body { font-family: Trebuchet MS, sans-serif; font-size: 15px; color: #444; margin-right: 24px; } h1 { font-size: 25px; } h2 { font-size: 20px; } h3 { font-size: 16px; font-weight: bold; } hr { height: 1px; border: 0; color: #ddd; background-color: #ddd; } .app-desc { clear: both; margin-left: 20px; } .param-name { width: 100%; } .license-info { margin-left: 20px; } .license-url { margin-left: 20px; } .model { margin: 0 0 0px 20px; } .method { margin-left: 20px; } .method-notes { margin: 10px 0 20px 0; font-size: 90%; color: #555; } pre { padding: 10px; margin-bottom: 2px; } .http-method { text-transform: uppercase; } pre.get { background-color: #0f6ab4; } pre.post { background-color: #10a54a; } pre.put { background-color: #c5862b; } pre.delete { background-color: #a41e22; } .huge { color: #fff; } pre.example { background-color: #f3f3f3; padding: 10px; border: 1px solid #ddd; } code { white-space: pre; } .nickname { font-weight: bold; } .method-path { font-size: 1.5em; background-color: #0f6ab4; } .up { float:right; } .parameter { width: 500px; } .param { width: 500px; padding: 10px 0 0 20px; font-weight: bold; } .param-desc { width: 700px; padding: 0 0 0 20px; color: #777; } .param-type { font-style: italic; } .param-enum-header { width: 700px; padding: 0 0 0 60px; color: #777; font-weight: bold; } .param-enum { width: 700px; padding: 0 0 0 80px; color: #777; font-style: italic; } .field-label { padding: 0; margin: 0; clear: both; } .field-items { padding: 0 0 15px 0; margin-bottom: 15px; } .return-type { clear: both; padding-bottom: 10px; } .param-header { font-weight: bold; } .method-tags { text-align: right; } .method-tag { background: none repeat scroll 0% 0% #24A600; border-radius: 3px; padding: 2px 10px; margin: 2px; color: #FFF; display: inline-block; text-decoration: none; }

# Toystore

This is an API for a toy store owner.

More information: [https://helloreverb.com](https://helloreverb.com)

Contact Info: [rabownick123@gmail.com](rabownick123@gmail.com)

Version: 1.0.0

ISC

http://apache.org/licenses/LICENSE-2.0.html

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

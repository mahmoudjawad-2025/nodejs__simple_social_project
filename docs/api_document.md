# Project: ums
# 📁 Collection: user 
undefined 


## End-point: get_all
### Method: GET
>```
>{{base_url}}/users
>```
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Im1haG1vdWQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzI2NjI3MzF9.XJJ6jLnjhaP3m9PwxUafJHJv7-IVCENzHgeQXvLpPU8|



<br>
<hr>
<br>

## End-point: delete
### Method: DELETE
>```
>{{base_url}}/users/5
>```
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Im1haG1vdWQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzI2NTUzMTV9.qTjBbOzfyS_Ko7wlaFGD30EV1IcVvbIPi9t3x_xX67c|




<br>
<hr>
<br>

## End-point: upload
### Method: PUT
>```
>{{base_url}}/users/upload/1
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|image|postman-cloud:///1f118138-4665-4420-b3c6-7eda3d1af1ea|file|


<br>
<hr>
<br>


# 📁 Collection: auth 
undefined 


## End-point: register
### Method: POST
>```
>{{base_url}}/auth/register
>```
### Body (**raw**)

```json
{
    "userName":"mahmoud2",
    "email":"mahmoodjawad11112@gmail.com",
    "password":"123"

}
```


<br>
<hr>
<br>

## End-point: login
### Method: POST
>```
>{{base_url}}/auth/login
>```
### Body (**raw**)

```json
{
    "email":"mahmoodjawad1111@gmail.com",
    "password":"123"

}
```


<br>
<hr>
<br>


# 📁 Collection: blog 
undefined 


## End-point: get all
### Method: GET
>```
>{{base_url}}/blogs/getAll/
>```
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Im1haG1vdWQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzI2NjI3MzF9.XJJ6jLnjhaP3m9PwxUafJHJv7-IVCENzHgeQXvLpPU8|


### Query Params

|Param|value|
|---|---|
||null|


<br>
<hr>
<br>

## End-point: create
### Method: POST
>```
>{{base_url}}/blogs/create/
>```
### Headers

|Content-Type|Value|
|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Im1haG1vdWQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NzI2NjI3MzF9.XJJ6jLnjhaP3m9PwxUafJHJv7-IVCENzHgeQXvLpPU8|


### Body (**raw**)

```json
{
    "title":"blog 1",
    "description":"desc 1"
}
```


<br>
<hr>
<br>

## End-point: getDetails
### Method: GET
>```
>{{base_url}}/blogs/getDetails/1
>```

<br>
<hr>
<br>
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)

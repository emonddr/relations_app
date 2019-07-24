# relations_app
An application with many hasMany and belongsTo relations

Trying to provoke the Node.js warning described in
`throws MaxListenersExceededWarning` https://github.com/strongloop/loopback-next/issues/2198

There is a hasMany   relationship between Customer1 and Order1.
There is a belongsTo relationship between Order1 and Customer1.

I used a custom program to generate the same relationships (and all required files)
between CustomerN and OrderN ; where N=2 through 35.

# docker
I used a postgres docker image.

https://hub.docker.com/_/postgres

docker pull postgres

docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d  -p 5432:5432 postgres


The datasource 
`/relations_app/src/datasources/my-postgresql.datasource.json`
contains the appropriate connection values as well. 

# Setup 

```sh
npm install
npm start
```
You should see: 

```sh
Server is running at http://[::1]:3000
Try http://[::1]:3000/ping
```


# Steps 
I performed a POST with

{
  "id": 1,
  "name": "Dom1"
}

to all 

http://[::1]:3000/customers1  through http://[::1]:3000/customers35 

without seeing the warning.

I then performed a GET to all 

http://[::1]:3000/customers1  through http://[::1]:3000/customers35 

without seeing the warning.






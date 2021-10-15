# EXPRESS SERVER

## Most important step
run :
```
npm run db-init
```
to initiate database

<br>

## Integration test
run :
```
npm run integration
```
to run integration test

<br>

## Endpoint

### Search Movie
```
http://${server_url}/search?title=&page=
```
Note: "Page" is optional

<br>

### Detail of a Movie
```
http://${server_url}/detail?title=&id=
```
Note: The most important query in this endpoint is title, so if you input both of available query (title & also id), this server will use title (instead of id) in searching

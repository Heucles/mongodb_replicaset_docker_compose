config = {
    "_id" : "my-mongo-set",
    "members" : [
        {
            "_id" : 0,
            "host" : "mongo-master:27017"
        },
        {
            "_id" : 1,
            "host" : "mongo-sec-2:27017"
        },
        {
            "_id" : 2,
            "host" : "mongo-sec-3:27017"
        }
    ]
}

//config = { "_id" : "my-mongo-set", "members" : [ { "_id" : 0, "host" : "mongo-master:27017" }, { "_id" : 1, "host" : "mongo-sec-2:27017" }, { "_id" : 2, "host" : "mongo-sec-3:27017" } ] }
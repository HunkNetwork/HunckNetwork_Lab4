const TableLiteral = {
    "postid" : 1234567890,
    "author" : "pachalo kibombwe",
    "Content" : "image : chalohunck.com",
    "engagement" : "like 10, love 9, haha 12",
    "comments" : "this is lovely",
    "privacy" : "Public",
    "createdAt" : "09-12-2022 9:20",
    "updatedAt" : "19-2-2023 9:20",
    "tags" : "ubergeek", 
}


class Table {
    constructor(postid, author, Content, engagement, comments, privacy, createdAt, updatedAt, tags){
        this.postid = postid;
        this.author = author;
        this.Content = Content;
        this.engagement = engagement;
        this.comments = comments;
        this.privacy = privacy;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.tags = tags;
    }
}

// function constructor missing
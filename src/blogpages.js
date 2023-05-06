numQuery = `
 query {
   user(username: "abhilipsasahoo03") {
     numPosts 
   }
 }
`;



fetchNumBlogs = async() => {
  const res = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({ numQuery }),
  })
  const APIres = await res.json();
  return APIres.data.user.numPosts;
}

(async () => {
   var numOfPosts = await fetchNumBlogs();
   var numOfPages = ((numOfPosts/6) + 1)
})()

export numOfPages;

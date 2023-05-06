export const query = `
    query GetUserArticles {
        user(username: "abhilipsasahoo03") {
            publication {
                posts(page: ${page}) {
                    coverImage
                    title
                    brief
                    slug
                    dateAdded
                }
            }
        }
    }
`;
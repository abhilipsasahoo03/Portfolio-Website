export const query = `
    query {
        user(username: "abhilipsasahoo03") {
            publication {
                posts($page: Int!) {
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
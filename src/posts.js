

export const query = `
    query {
        user(username: "abhilipsasahoo03") {
            publication {
                posts(page: 0) {
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
import { numOfPages } from "./blogpages.js";

var pagecount = numOfPages;

export const query = `
    query {
        user(username: "abhilipsasahoo03") {
            publication {
                posts(page: $pagecount) {
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

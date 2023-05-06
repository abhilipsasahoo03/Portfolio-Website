import { numOfPages } from "./blogpages.js";

var pagecount = numOfPages;
for (let i=0; i<3; i++)
{
 export const query = `
    query {
        user(username: "abhilipsasahoo03") {
            publication {
                posts(page: i) {
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
}
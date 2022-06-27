import { gql,  } from '@apollo/client';

export const GET_TOPICS_BY_NAME = gql`
    query Topic($name: String!) {
        topic(name: $name){
            name
            stargazerCount
            relatedTopics(first: 10) {
                name
            }
        }
    }
`;
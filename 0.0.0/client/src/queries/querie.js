import {gql} from '@apollo/client';

const QUERY = gql`
    query($var: String!) {
        QUERY(var: $var) {
            var
        }
    }
`;

const MUTATION = gql`
    MUTATION($var: String!) {
        MUTATION(var: $var) {
            var
        }
    }
`;

export {QUERY, MUTATION};
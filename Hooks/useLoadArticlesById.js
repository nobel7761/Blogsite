import axios from "axios";
import { useQuery } from "react-query";

const useLoadArticlesById = (id) => {
  const endpoint = "https://outgoing-yeti-60.hasura.app/v1/graphql";
  const headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "jATXg2oxueJpZ23gw3QNIDscVC97dwPnldO0H6sp19dy4Jp7uZDWoife1vhQXj89",
  };
  const graphqlQuery = {
    query: `query articles($id: Int!) {
          articles(where: {sub_category_id: {_eq: $id}}) {
            id
            title
            content
          }
        }
        `,
    variables: { id },
  };

  const { data: queryInfo, isLoading } = useQuery(
    "articles",
    () =>
      axios.post(endpoint, graphqlQuery, {
        headers: headers,
      }),
    { enabled: !!id }
  );

  return [queryInfo, isLoading];
};

export default useLoadArticlesById;

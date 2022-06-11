import axios from "axios";
import { useQuery } from "react-query";

const useLoadAllSubCategories = () => {
  const endpoint = "https://outgoing-yeti-60.hasura.app/v1/graphql";
  const headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "jATXg2oxueJpZ23gw3QNIDscVC97dwPnldO0H6sp19dy4Jp7uZDWoife1vhQXj89",
  };
  const graphqlQuery = {
    operationName: "subCategories",
    query: `query subCategories{
        sub_categories{
          name
          id
        }
      }
        `,
    variables: {},
  };

  const { data: queryInfo, isLoading } = useQuery("subCategories", () =>
    axios({
      url: endpoint,
      method: "post",
      headers: headers,
      data: graphqlQuery,
    })
  );

  return [queryInfo, isLoading];
};

export default useLoadAllSubCategories;

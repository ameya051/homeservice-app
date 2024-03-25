import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/clu3njfxu0dz707upakubzl4e/master";

const getSliders = async () => {
  const query = gql`
    query GetSliders {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const res = await request(MASTER_URL, query);
  return res;
};

const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const res = await request(MASTER_URL, query);
  return res;
};

export default { getSliders, getCategories };

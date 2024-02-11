import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { AuthOptions, AUTH_TYPE, createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import { onError } from "@apollo/client/link/error";
import decode from "jwt-decode";

export type Payload = {
  user: string;
  tokens: number;
  exp: number;
};
const region = process.env.REACT_APP_REGION ?? "";

const url = `https://dev.toomai.org/graphql`;

const getAccessToken = () => {
  return localStorage.getItem("token");
};

const isValidToken = () => {
  const token = getAccessToken();
  if (!token) return false;
  try {
    const { exp }: Payload = decode(token);
    if (exp * 1000 < new Date().getTime()) return false;
    return true;
  } catch (e) {
    return false;
  }
};

const getToken = () => {
  if (isValidToken()) return getAccessToken();
  return "y5A7CaFcHfMhPkSpUrWuZw3z6B8DbGdJfNjQmSqVsXv2x4z7C9";
};

const auth: AuthOptions = {
  type: AUTH_TYPE.AWS_LAMBDA,
  token: () => getToken() ?? "",
};

const authLink = createAuthLink({ url, region, auth });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((err: any) => {
      console.log(`[GraphQL error]: Message:`, err.errorType);

      const statusCode = (networkError as any)?.statusCode;
      const { errorType: code, path } = err;
      if (statusCode === 401 && code === "UnauthorizedException") {
      }

      if (code === "CE0004" && path.includes("getMyRoutes")) {
        localStorage.removeItem("token");
        window.location.reload();
      }

      if (
        code === "CE0001" &&
        !path.includes("loginByEmail") &&
        !path.includes("loginByPin") &&
        !path.includes("loginByCode")
      ) {
        localStorage.removeItem("token");
        window.location.reload();
      }
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLinkWithMiddleware = authLink.concat(errorLink);

const httpLink = createHttpLink({ uri: url });

export const link = ApolloLink.from([
  httpLinkWithMiddleware,
  createSubscriptionHandshakeLink({ url: url, region, auth }, httpLink),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default client;

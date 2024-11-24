import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface QueryClientProviderWrapperProps {
  children: ReactNode;
}

const QueryClientProviderWrapper: React.FC<QueryClientProviderWrapperProps> = ({
  children,
}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryClientProviderWrapper;

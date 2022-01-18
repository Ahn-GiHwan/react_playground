import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Datas from "./components/Datas";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Datas />
    </QueryClientProvider>
  );
};

export default App;

import React from "react";
import { useQuery } from "react-query";

const Datas = () => {
  const getDatas = () =>
    fetch("https://syoon0624.github.io/json/test.json").then((res) =>
      res.json()
    );

  const { isLoading, data, refetch, isRefetching } = useQuery(
    "datas",
    getDatas
  );

  if (isLoading || isRefetching)
    return <span style={{ fontSize: "30px" }}>Loading...</span>;

  return (
    <div>
      <span>{data.bankList.length}</span>
      <br />
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default Datas;

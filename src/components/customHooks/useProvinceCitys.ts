import { useState, useEffect } from "react";

import { City, ProvinceName, PROVINCE_CITY_DATA } from "../../constants/citys";

type DefaultProvince = ProvinceName | "";

export const useProvinceCitys: (
  defaultProvince: DefaultProvince
) => [
  City[],
  (value: ProvinceName) => void
] = defaultProvince => {
  const [province, setProvince] = useState(defaultProvince);
  const [citys, setCitys] = useState([] as City[]);

  useEffect(() => {
    if (province !== "") {
      setCitys(PROVINCE_CITY_DATA[province]);
    } else {
      setCitys([]);
    }
  }, [province]);

  return [citys, setProvince];
};

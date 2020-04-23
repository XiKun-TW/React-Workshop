import { ProvinceName, City, PROVINCE_CITY_DATA } from "../../constants/citys";
import { useState, useEffect } from "react";

type DefaultProvince = ProvinceName | "";

export const useProvinceCitys: (
  defaultProvice: DefaultProvince
) => [City[], (provice: ProvinceName) => void] = (defaultProvince) => {
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

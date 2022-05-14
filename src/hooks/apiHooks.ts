
import { ECurrency } from '../types/apiTypes';
import useSWR from 'swr';
import { fetcherUsingAxios } from '../libs/utils';

export const useCoinsMarkets = (currency: ECurrency) => {
  const { data, error } = useSWR(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`, fetcherUsingAxios);
  return {
    coins: data,
    isLoading: !error && !data,
    isError: error
  }
}
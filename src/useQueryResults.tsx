import useSWR, { useSWRConfig } from "swr";

type TransformationFn = (a: any) => any;

export const useQueryResults = <T,>(
  cacheKey: string | null,
  t: TransformationFn
) => {
  const { cache } = useSWRConfig();

  const existingData = cache.get(cacheKey);

  const { data, error, isValidating } = useSWR<T>(
    existingData ? null : cacheKey,
    (url: string) =>
      fetch(url)
        .then((r) => r.json())
        .then(t),
    {}
  );

  const result: T = existingData || data || [];

  return {
    result,
    error,
    isValidating,
  };
};

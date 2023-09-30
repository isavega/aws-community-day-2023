export const fetcher = async (
  ...args: Parameters<typeof fetch>
): Promise<any> => {
  const res = await fetch(...args);
  return res.json();
};

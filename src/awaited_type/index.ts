type TInfinityPromise = Promise<Promise<Promise<Promise<Promise<string>>>>>;

type TResultPromises = Awaited<TInfinityPromise>;

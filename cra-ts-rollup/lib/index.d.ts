declare const useCount: (initialCount?: number) => {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};

declare const useMap: () => {
    map: Map<string, string>;
    set: (key: string, value: string) => void;
};

export { useCount, useMap };

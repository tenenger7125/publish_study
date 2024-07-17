declare const useCount: (initialCount?: number) => {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
};
export default useCount;

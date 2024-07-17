declare const useMap: () => {
    map: Map<string, string>;
    set: (key: string, value: string) => void;
};
export default useMap;

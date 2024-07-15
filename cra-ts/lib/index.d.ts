export declare const useCount: (initialCount?: number) => {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
};
export declare const useMap: () => {
	map: Map<string, string>;
	setItem: (key: string, value: string) => void;
};

export {};

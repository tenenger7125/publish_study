import { useState, useCallback } from 'react';

var useCount = function (initialCount) {
    if (initialCount === void 0) { initialCount = 0; }
    var _a = useState(initialCount), count = _a[0], setCount = _a[1];
    return {
        count: count,
        increment: useCallback(function () { return setCount(function (prev) { return prev + 1; }); }, []),
        decrement: useCallback(function () { return setCount(function (prev) { return prev - 1; }); }, []),
        reset: useCallback(function () { return setCount(initialCount); }, [initialCount]),
    };
};

var useMap = function () {
    var _a = useState(new Map()), map = _a[0], setMap = _a[1];
    var set = useCallback(function (key, value) {
        setMap(function (prev) {
            var copied = new Map(prev);
            copied.set(key, value);
            return copied;
        });
    }, []);
    return {
        map: map,
        set: set
    };
};

export { useCount, useMap };

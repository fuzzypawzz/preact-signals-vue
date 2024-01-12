export function* createArrayTransitionGenerator<T extends Array<any>>(array: T) {
    let i = 0

    function resetIndex(): void {
        i = 0
    }

    while (true) {
        if (i === array.length) resetIndex()

        yield array[i++]
    }
}

export function formatSubscriber(number: number) {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const tier = Math.log10(Math.abs(number)) / 3 | 0;

    if (tier === 0) return number;

    const suffix = suffixes[tier];
    const scale = Math.pow(10, tier * 3);

    const scaled = number / scale;

    return scaled.toFixed(1) + suffix;
}

export function formatDislikes(number: number) {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const tier = Math.log10(Math.abs(number)) / 3 | 0;

    if (tier === 0) return number;

    const suffix = suffixes[tier];
    const scale = Math.pow(10, tier * 3);

    const scaled = number / scale;

    return scaled.toFixed(1) + suffix;
}

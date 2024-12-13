export default function getBiggestScreenSize(availableSizes) {
    const sortedAvailableSizes = availableSizes.sort((a, b) => b - a);
    return sortedAvailableSizes[0];
}
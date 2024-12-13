
export default function generateScreenSize(bestSellingTv) {
    let availableScreenSizes = "";

    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {
        let currentScreenSize = bestSellingTv.availableSizes[i];
        availableScreenSizes += `${currentScreenSize} inch (${Math.round(currentScreenSize * 2.54)} cm)`;
        if (i !== bestSellingTv.availableSizes.length - 1) {
            availableScreenSizes += ` | `;
        }
    }

    return `${availableScreenSizes}`;
}
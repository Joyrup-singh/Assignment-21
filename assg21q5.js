// You are building a shipping application. Write a program that takes the type of package ("standard",
// "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
// based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
// "overnight" would be delivered the next day.


function getEstimatedDeliveryTime(packageType) {
    let estimatedTime;

    switch (packageType.toLowerCase()) {
        case 'standard':
            estimatedTime = '3-5 days';
            break;
        case 'express':
            estimatedTime = '1-2 days';
            break;
        case 'overnight':
            estimatedTime = 'next day';
            break;
        default:
            estimatedTime = 'unknown package type';
    }

    console.log(`The estimated delivery time for ${packageType} package is: ${estimatedTime}`);
}

// Testing the function with different package types
getEstimatedDeliveryTime('standard');
getEstimatedDeliveryTime('express');
getEstimatedDeliveryTime('overnight');
getEstimatedDeliveryTime('priority');  // Testing with an unknown package type
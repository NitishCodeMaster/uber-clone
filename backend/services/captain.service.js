const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ fullname, email, password, vehicle }) => {

    if (
        !fullname.firstname ||
        !email ||
        !password ||
        !vehicle.color ||
        !vehicle.plate ||
        !vehicle.vehicleType ||
        !vehicle.capacity
    ) {
        throw new Error('All fields are required');
    }

    const captain = await captainModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            vehicleType: vehicle.vehicleType,
            capacity: vehicle.capacity
        }
    });

    return captain;
};

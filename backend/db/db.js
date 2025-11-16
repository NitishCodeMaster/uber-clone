const mongoose = require("mongoose");

function connectionToDb() {
    const dbUri = process.env.DB_CONNECT;

    if (!dbUri) {
        console.error("❌ DB_CONNECT missing in .env");
        process.exit(1);
    }

    mongoose.connect(dbUri)
        .then(() => console.log("✅ Connected to MongoDB"))
        .catch(err => {
            console.error("❌ DB Error:", err.message);
            process.exit(1);
        });
}

module.exports = connectionToDb;

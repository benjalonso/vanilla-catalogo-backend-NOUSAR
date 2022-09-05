const app = require("./express_config.js");
const sequelize = require("./database/database");

async function main() {
    try {
        // await sequelize.sync({force: false});
        app.listen(3500, () => {
            console.log("Server is running on port 3300 bro");
        });
    } catch (error) {
        console.log("Unable to connect bro", error);

    }
}

main()
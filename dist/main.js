"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const cookieParser = require("cookie-parser");
const start = async () => {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const PORT = process.env.PORT || 4000;
        app.use(cookieParser());
        app.setGlobalPrefix('api');
        const config = new swagger_1.DocumentBuilder()
            .setTitle('NestJS TEST')
            .setDescription('REST API')
            .setVersion('1.0.0')
            .addTag('NodeJS, NestJS, Postgres, sequlize')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('/api/docs', app, document);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=main.js.map
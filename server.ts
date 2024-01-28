import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const server = express();

// CORS Configuration
const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
        // Add your frontend origin(s) to the allowedOrigins array
        const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

        // Check if origin is in the allowedOrigins array or if it's undefined
        const isOriginAllowed = origin === undefined || allowedOrigins.includes(origin);

        callback(null, isOriginAllowed);
    },
};

// URL Encoded
server.use(express.urlencoded({ extended: true }));

// Enable CORS
server.use(cors(corsOptions));

// Routes
server.use('/agents', require('./routers/agentRouter'));

// Error handler
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 443;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

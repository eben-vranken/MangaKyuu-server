import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const server = express();

/// Cors Setup ///
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
];

const corsOptions: cors.CorsOptions = {
    origin: (origin: string | undefined, callback: cors.CorsOptions['origin']) => {
        if (allowedOrigins.includes(origin!) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: false,
    methods: 'GET, POST',
};

/// Routes ///
server.use(cors(corsOptions));

server.use('/agents', require('/routers/agentRouter'));

// Example route
server.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// Error handler
server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

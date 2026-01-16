import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
    let token;

    // Check for token in Authorization header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];
            console.log('🔐 Auth middleware: Token received');

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('✅ Token verified for user ID:', decoded.id);

            // Get user from token (exclude password)
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                console.log('❌ User not found for token');
                return res.status(401).json({ message: 'User not found' });
            }

            console.log('✅ Auth successful for user:', req.user.username);
            next();
        } catch (error) {
            console.error('❌ Auth middleware error:');
            console.error('Error message:', error.message);
            console.error('Error name:', error.name);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        console.log('❌ No token provided');
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};

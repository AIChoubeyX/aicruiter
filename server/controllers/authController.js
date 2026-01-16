import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// @desc    Register new user
// @route   POST /api/auth/signup
// @access  Public
export const signup = async (req, res) => {
    try {
        console.log('📝 Signup request received:', {
            username: req.body.username,
            email: req.body.email
        });

        const { username, email, password } = req.body;

        // Validation
        if (!username || !email || !password) {
            console.log('❌ Validation failed: Missing fields');
            return res.status(400).json({ message: 'Please provide all fields' });
        }

        // Check if user already exists
        const userExists = await User.findOne({ $or: [{ email }, { username }] });

        if (userExists) {
            const message = userExists.email === email
                ? 'Email already registered'
                : 'Username already taken';
            console.log('❌ User already exists:', message);
            return res.status(400).json({ message });
        }

        // Create user
        console.log('🔨 Creating new user...');
        const user = await User.create({
            username,
            email,
            password,
        });

        console.log('✅ User created successfully:', user._id);

        if (user) {
            res.status(201).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id),
            });
        }
    } catch (error) {
        console.error('❌ Signup error occurred:');
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        console.error('Full error:', error);
        res.status(500).json({
            message: 'Server error during signup',
            error: error.message
        });
    }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
    try {
        console.log('🔐 Login request received:', { identifier: req.body.identifier });

        const { identifier, password } = req.body;

        // Validation
        if (!identifier || !password) {
            console.log('❌ Validation failed: Missing fields');
            return res.status(400).json({ message: 'Please provide all fields' });
        }

        // Find user by email or username
        console.log('🔍 Searching for user...');
        const user = await User.findOne({
            $or: [{ email: identifier }, { username: identifier }],
        });

        if (!user) {
            console.log('❌ User not found');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log('✅ User found:', user.username);

        // Check password
        console.log('🔑 Verifying password...');
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            console.log('❌ Invalid password');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log('✅ Login successful for user:', user.username);

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (error) {
        console.error('❌ Login error occurred:');
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        console.error('Full error:', error);
        res.status(500).json({
            message: 'Server error during login',
            error: error.message
        });
    }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
export const getProfile = async (req, res) => {
    try {
        console.log('👤 Profile request for user:', req.user._id);

        const user = await User.findById(req.user._id).select('-password');

        if (!user) {
            console.log('❌ User not found');
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('✅ Profile retrieved for:', user.username);
        res.json(user);
    } catch (error) {
        console.error('❌ Get profile error occurred:');
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
        res.status(500).json({
            message: 'Server error',
            error: error.message
        });
    }
};

// @desc    Logout user (client-side token removal)
// @route   POST /api/auth/logout
// @access  Private
export const logout = async (req, res) => {
    try {
        console.log('🚪 Logout request for user:', req.user?.username || 'Unknown');

        // Note: JWT tokens are stateless, so logout is handled client-side
        // This endpoint is mainly for logging purposes and future token blacklisting

        console.log('✅ Logout successful');
        res.json({
            message: 'Logged out successfully',
            success: true
        });
    } catch (error) {
        console.error('❌ Logout error occurred:');
        console.error('Error message:', error.message);
        res.status(500).json({
            message: 'Server error during logout',
            error: error.message
        });
    }
};

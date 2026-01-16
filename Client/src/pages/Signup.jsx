import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff, User, Lock, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const { signup } = useAuth();
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await signup(formData);
            toast({
                title: 'Success!',
                description: 'Account created successfully',
            });
            navigate('/dashboard');
        } catch (error) {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'Signup failed',
                variant: 'destructive',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Signup Card */}
                <div className="glass-card rounded-2xl p-8 shadow-2xl">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-foreground mb-2">Sign Up</h1>
                        <p className="text-muted-foreground">Create your account to get started.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username Input */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                <User size={18} />
                            </div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                minLength={3}
                                className="w-full bg-background/50 border border-border rounded-lg pl-12 pr-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-background/50 border border-border rounded-lg pl-12 pr-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                                <Lock size={18} />
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength={6}
                                className="w-full bg-background/50 border border-border rounded-lg pl-12 pr-12 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Creating account...' : 'Sign Up'}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-muted-foreground">
                            Already have an account?{' '}
                            <Link
                                to="/login"
                                className="text-primary hover:text-primary/80 font-semibold transition-colors"
                            >
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

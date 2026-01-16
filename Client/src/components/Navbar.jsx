import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const profileMenuRef = useRef(null);

  const navLinks = [
    { name: "Interview Review", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "Resources", href: "#faq" },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
    setShowProfileMenu(false);
  };

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-lg text-foreground">RecruitIn AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="relative" ref={profileMenuRef}>
                {/* Profile Avatar Button */}
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                    <User size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{user?.username}</span>
                </button>

                {/* Profile Dropdown Menu */}
                <AnimatePresence>
                  {showProfileMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-64 glass-card rounded-lg shadow-lg border border-border overflow-hidden"
                    >
                      {/* User Info */}
                      <div className="p-4 border-b border-border">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                            <User size={20} className="text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-foreground truncate">
                              {user?.username}
                            </p>
                            <p className="text-xs text-muted-foreground truncate">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-2">
                        <Link
                          to="/dashboard"
                          onClick={() => setShowProfileMenu(false)}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          <User size={16} />
                          Dashboard
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                  Login
                </Link>
                <Link to="/signup">
                  <Button variant="primary" size="sm" className="gap-2">
                    Sign Up
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-border">
                  {isAuthenticated ? (
                    <>
                      {/* Mobile User Info */}
                      <div className="flex items-center gap-3 px-3 py-2 bg-primary/5 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                          <User size={18} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {user?.username}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {user?.email}
                          </p>
                        </div>
                      </div>
                      <Link
                        to="/dashboard"
                        className="text-foreground px-3 py-2 hover:bg-primary/10 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Button
                        variant="primary"
                        size="sm"
                        className="gap-2"
                        onClick={handleLogout}
                      >
                        <LogOut size={16} />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="text-foreground" onClick={() => setIsOpen(false)}>Login</Link>
                      <Link to="/signup" onClick={() => setIsOpen(false)}>
                        <Button variant="primary" size="sm" className="gap-2">
                          Sign Up
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;



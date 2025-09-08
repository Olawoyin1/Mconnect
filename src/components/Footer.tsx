import { Link } from "react-router-dom";
import {  FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-muted border-t py-20 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-foreground">MConnectC</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Connecting UK car owners with verified local mechanics. Get transparent quotes,
              book trusted services, and keep your car running smoothly.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <FaEnvelope className="h-4 w-4" />
                <span>hello@mconnectc.uk</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <FaPhone className="h-4 w-4" />
                <span>0800 123 4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/mechanics"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Find Mechanics
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/mechanic-register"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Join as Mechanic
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 MConnectC UK. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-4 md:mt-0">
            <FaMapMarkerAlt className="h-4 w-4" />
            <span>Serving the United Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-charcoal py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-3 mb-2">
            <Image 
              src="/images/globe_image_cropped.png" 
              alt="Globe Icon" 
              width={32} 
              height={32} 
              className="h-8 w-auto object-contain" 
            />
            <Image 
              src="/images/visaensure_cropped.png" 
              alt="VisaEnsure Logo Text" 
              width={120} 
              height={20} 
              className="h-5 w-auto object-contain" 
            />
          </div>
          <p className="text-sm text-gray-600 font-light max-w-xs">
            Your Trusted Visa Companion for complex immigration cases and mobility transfers.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a href="mailto:harish@visaensure.com" className="text-gray-500 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+919876543210" className="text-gray-500 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} VisaEnsure. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

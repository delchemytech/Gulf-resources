'use client'
import React from 'react';
import { Mail, User ,Phone, MapPin, Clock } from 'lucide-react'; // Using Lucide Icons for simplicity

// --- Office Information Data ---
const officeInfo = [
  {
    icon: Phone,
    title: 'Phone Number & Email',
    content: (
      <>
        <p><a href="tel:+97125176889" className="hover:text-red-600 transition">+971 2 517 6889</a></p>
        <p><a href="tel:+971501344537" className="hover:text-red-600 transition">+971 50 134 4537</a></p>
        <p className="text-red-500"><a href="mailto:info@gulfresources.ae">info@gulfresources.ae</a></p>
      </>
    ),
  },
  {
    icon: MapPin,
    title: 'Our Office Address',
    content: (
      <p>
        Office 4, Musaffah 37, Opp. Gift Action
        <br />
        Abu Dhabi, UAE
      </p>
    ),
  },
  {
    icon: Clock,
    title: 'Official Work Time',
    content: (
      <>
        <p>9:00 AM - 10:00 PM</p>
        <p className="text-red-500">Sunday Closed</p>
      </>
    ),
  },
];

// --- Form State Interface (for TypeScript) ---
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}


// --- Reusable Input Component ---
const InputField: React.FC<{ 
  name: string; 
  type: string; 
  placeholder: string; 
  icon: React.ElementType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({
  name,
  type,
  placeholder,
  icon: Icon,
  value,
  onChange,
}) => (
  <div className="relative ">
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 bg-white py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 placeholder-gray-400 pr-10"
    />
    <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
  </div>
);

const ContactForm = () => {
    const [formData, setFormData] = React.useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        
        try {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              access_key: 'c3ca599d-56bd-4c6f-86e1-4a9165f5eb17',
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
              from_name: 'Gulf Resources Website',
              to_name: 'Gulf Resources Team',
            }),
          });

          if (response.ok) {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
          } else {
            setSubmitStatus('error');
          }
        } catch (error) {
          console.error('Form submission error:', error);
          setSubmitStatus('error');
        } finally {
          setIsSubmitting(false);
        }
      };
    
      return (
        // Outer container with light gray background for the whole section
        <section className="container mx-auto max-w-7xl py-8 md:py-16 px-4 sm:px-6 lg:px-8">

          <div className='text-center font-bold text-black text-2xl md:text-5xl mb-8'>GET IN TOUCH</div>
          
          {/* Main Grid Container: Stacked (flex-col) on mobile, Two-Column (md:grid) on desktop */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
            
            {/* === LEFT COLUMN: CONTACT FORM === */}
            <div className="bg-gray-100 p-6 sm:p-10 rounded-xl md:col-span-3 ">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Leave a Message</h2>
              <p className="text-gray-500 mb-8">
                Fill up the form and message us with your questions
              </p>
    
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name and Email Row */}
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1">
                    <InputField name="name" type="text" placeholder="Your Name" icon={User} value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="flex-1">
                    <InputField name="email" type="email" placeholder="Email Address" icon={Mail} value={formData.email} onChange={handleChange} />
                  </div>
                </div>
    
                {/* Subject Dropdown */}
                <div>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 appearance-none bg-white"
                    >
                      <option value="" disabled>
                        Select Subject
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Gulf Resources Facility Management">Gulf Resources Facility Management</option>
                      <option value="Gulf Track Business Setup & Visa Works">Gulf Track Business Setup & Visa Works</option>
                      <option value="Gulf Track Tours & Travels">Gulf Track Tours & Travels</option>
                    </select>
                    {/* Custom arrow icon to replace default select arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
    
                {/* Message Textarea */}
                <div>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 placeholder-gray-400 resize-y"
                  ></textarea>
                </div>
    
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-3 rounded-lg flex items-center justify-center transition duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-red-600 hover:bg-red-700'
                  } text-white`}
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT MESSAGE'}
                  <Mail className="ml-2 h-4 w-4" />
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <p className="font-semibold">Failed to send message.</p>
                    <p className="text-sm">Please try again or contact us directly.</p>
                  </div>
                )}
              </form>
            </div>
    
            {/* === RIGHT COLUMN: OFFICE INFORMATION === */}
            <div className="p-6 sm:p-10 bg-gray-100 rounded-xl md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Office Information
              </h2>
              <p className="text-gray-500 mb-8">
                Reach out to us for any inquiries or support. We are here to assist you 24/7.
              </p>
    
              <div className="space-y-6">
                
                {officeInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    {/* Icon Container (Red Circle) */}
                    <div className="flex-shrink-0 w-10 h-10 p-2 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-red-600" />
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <div className="text-gray-600 text-sm mt-1">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
};

export default ContactForm;

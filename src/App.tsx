import { useState, useEffect } from 'react';
import { MessageCircle, Home, Sparkles, Building2, Package, Shirt, CheckCircle, Star, Instagram, Mail, Phone } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = '6281234567890';

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Home,
      title: 'Regular Home Cleaning',
      description: 'Basic dusting, mopping, and tidying up',
      duration: '2 Hours',
      price: 'Rp 150.000',
      message: 'Halo BersihBali, saya mau pesan layanan Regular Home Cleaning untuk area [tulis lokasi Anda].'
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Kitchen, bathroom, and furniture deep clean',
      duration: '4 Hours',
      price: 'Rp 300.000',
      message: 'Halo BersihBali, saya mau pesan layanan Deep Cleaning untuk area [tulis lokasi Anda].'
    },
    {
      icon: Building2,
      title: 'Villa / Airbnb Cleaning',
      description: 'Guest-ready preparation for properties',
      duration: '3 Hours',
      price: 'Rp 250.000',
      popular: true,
      message: 'Halo BersihBali, saya mau pesan layanan Villa/Airbnb Cleaning untuk area [tulis lokasi Anda].'
    },
    {
      icon: Package,
      title: 'Move-in / Move-out',
      description: 'Full deep clean and furniture polish',
      duration: '5 Hours',
      price: 'Rp 400.000',
      message: 'Halo BersihBali, saya mau pesan layanan Move-in/Move-out Cleaning untuk area [tulis lokasi Anda].'
    },
    {
      icon: Shirt,
      title: 'Laundry & Linen',
      description: 'Pickup and return within 24 hours',
      duration: 'Per Kg',
      price: 'Rp 20.000',
      message: 'Halo BersihBali, saya mau pesan layanan Laundry & Linen untuk area [tulis lokasi Anda].'
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: 'Verified & Trained Staff',
      description: 'All our cleaners are professionally trained and background-checked'
    },
    {
      icon: Sparkles,
      title: 'Eco-Friendly Products',
      description: 'We use only safe, biodegradable cleaning solutions'
    },
    {
      icon: Star,
      title: 'Transparent Pricing',
      description: 'No hidden fees. What you see is what you pay'
    },
    {
      icon: MessageCircle,
      title: 'Instant WhatsApp Booking',
      description: 'Book directly via WhatsApp in seconds'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Seminyak',
      rating: 5,
      text: 'BersihBali cleaned my villa before guests arrived. The team was professional, punctual, and did an amazing job!'
    },
    {
      name: 'Made Wirawan',
      location: 'Ubud',
      rating: 5,
      text: 'Sangat puas dengan layanan deep cleaning. Rumah jadi bersih dan harum. Highly recommended!'
    },
    {
      name: 'Emma Peterson',
      location: 'Canggu',
      rating: 5,
      text: 'I use BersihBali for my Airbnb every week. Reliable, affordable, and always on time. Thank you!'
    }
  ];

  const defaultWhatsAppMessage = 'Halo BersihBali 👋, saya mau booking jasa cleaning untuk area [tulis area Anda] pada tanggal [tanggal].';

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Sparkles className={`w-8 h-8 ${scrolled ? 'text-turquoise' : 'text-white'}`} />
              <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>BersihBali</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className={`${scrolled ? 'text-gray-700 hover:text-turquoise' : 'text-white hover:text-sand'} transition-colors font-medium`}>Services</button>
              <button onClick={() => scrollToSection('pricing')} className={`${scrolled ? 'text-gray-700 hover:text-turquoise' : 'text-white hover:text-sand'} transition-colors font-medium`}>Pricing</button>
              <button onClick={() => scrollToSection('testimonials')} className={`${scrolled ? 'text-gray-700 hover:text-turquoise' : 'text-white hover:text-sand'} transition-colors font-medium`}>Reviews</button>
            </div>
            <a
              href={createWhatsAppLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-accent text-white px-6 py-2.5 rounded-full font-semibold hover:bg-green-600 transition-all flex items-center space-x-2 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
            alt="Bali tropical villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your trusted cleaning call,<br />
            <span className="text-turquoise">anytime in Paradise</span>
          </h1>
          <p className="text-xl md:text-2xl text-sand mb-10 font-light">
            Fast, safe, and eco-friendly home & villa cleaning across Bali
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={createWhatsAppLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all flex items-center justify-center space-x-3 shadow-2xl"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Book via WhatsApp</span>
            </a>
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              See Prices
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional cleaning solutions tailored for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 relative">
                {service.popular && (
                  <div className="absolute -top-4 right-6 bg-green-accent text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Popular
                  </div>
                )}
                <div className="w-16 h-16 bg-turquoise/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-turquoise" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-6 text-sm">
                  <span className="text-gray-500">{service.duration}</span>
                  <span className="text-2xl font-bold text-turquoise">{service.price}</span>
                </div>
                <a
                  href={createWhatsAppLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-turquoise text-white px-6 py-3 rounded-full font-semibold hover:bg-turquoise/90 transition-all flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Book This Service</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              No hidden fees. What you see is what you pay
            </p>
          </div>

          <div className="overflow-x-auto shadow-2xl rounded-2xl">
            <table className="w-full">
              <thead className="bg-turquoise text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Service Type</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Price (IDR)</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Regular Home Cleaning</td>
                  <td className="px-6 py-4 text-gray-600">2 Hours</td>
                  <td className="px-6 py-4 text-turquoise font-bold text-xl">Rp 150.000</td>
                  <td className="px-6 py-4 text-gray-600">Includes basic dusting & mopping</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Deep Cleaning</td>
                  <td className="px-6 py-4 text-gray-600">4 Hours</td>
                  <td className="px-6 py-4 text-turquoise font-bold text-xl">Rp 300.000</td>
                  <td className="px-6 py-4 text-gray-600">Kitchen, bathroom, furniture</td>
                </tr>
                <tr className="bg-green-accent/5 hover:bg-green-accent/10 transition-colors border-l-4 border-green-accent">
                  <td className="px-6 py-4 font-semibold text-gray-900 flex items-center">
                    Villa / Airbnb Cleaning
                    <span className="ml-3 bg-green-accent text-white px-3 py-1 rounded-full text-xs font-semibold">POPULAR</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">3 Hours</td>
                  <td className="px-6 py-4 text-green-accent font-bold text-xl">Rp 250.000</td>
                  <td className="px-6 py-4 text-gray-600">Guest-ready preparation</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Move-in / Move-out</td>
                  <td className="px-6 py-4 text-gray-600">5 Hours</td>
                  <td className="px-6 py-4 text-turquoise font-bold text-xl">Rp 400.000</td>
                  <td className="px-6 py-4 text-gray-600">Full deep clean, furniture polish</td>
                </tr>
                <tr className="hover:bg-sand/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">Laundry & Linen</td>
                  <td className="px-6 py-4 text-gray-600">Per Kg</td>
                  <td className="px-6 py-4 text-turquoise font-bold text-xl">Rp 20.000</td>
                  <td className="px-6 py-4 text-gray-600">Pickup and return within 24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm italic">
              *Final price may vary based on location and room size. All services available island-wide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-turquoise/10 to-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose BersihBali?</h2>
            <p className="text-xl text-gray-600">
              Your satisfaction is our priority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center transform hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by villa owners and residents across Bali
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-sand rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-turquoise rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-turquoise to-green-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg"
            alt="Clean home"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a spotless home?</h2>
          <p className="text-xl mb-10 text-white/90">
            We're available 7 days a week, island-wide
          </p>
          <a
            href={createWhatsAppLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-white text-turquoise px-10 py-5 rounded-full text-xl font-bold hover:bg-sand transition-all shadow-2xl"
          >
            <MessageCircle className="w-7 h-7" />
            <span>Book Now via WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-8 h-8 text-turquoise" />
                <span className="text-2xl font-bold">BersihBali</span>
              </div>
              <p className="text-gray-400">
                Your trusted cleaning call, anytime in Paradise
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <a href={createWhatsAppLink(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-turquoise transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+62 812-3456-7890</span>
                </a>
                <a href="mailto:support@bersihbali.com" className="flex items-center space-x-3 text-gray-400 hover:text-turquoise transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>support@bersihbali.com</span>
                </a>
                <a href="https://instagram.com/bersihbali" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-turquoise transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span>@bersihbali</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Service Areas</h3>
              <p className="text-gray-400">
                Seminyak, Canggu, Ubud, Sanur, Denpasar, Uluwatu, and all across Bali
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BersihBali. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={createWhatsAppLink(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-accent text-white w-16 h-16 rounded-full shadow-2xl hover:bg-green-600 transition-all flex items-center justify-center z-50 animate-bounce hover:animate-none"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;

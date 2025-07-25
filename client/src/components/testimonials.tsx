import { Star } from "lucide-react";

const testimonials = [
  {
    content: "Sarah's expertise and dedication were instrumental in resolving our complex corporate merger. Her attention to detail and strategic thinking saved us both time and money.",
    author: "Michael Thompson",
    position: "CEO, TechCorp Industries",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
  {
    content: "Outstanding representation in our employment law matter. Sarah's professional approach and deep knowledge of the law led to an excellent outcome for our company.",
    author: "Jennifer Martinez",
    position: "HR Director, Global Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c5cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
  {
    content: "The estate planning services exceeded our expectations. Sarah made complex legal concepts understandable and created a comprehensive plan for our family's future.",
    author: "Robert Chen",
    position: "Private Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client <span className="text-gold">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from clients who have experienced the BestWorth difference in achieving their legal objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.author} testimonial`} 
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h4 className="font-semibold text-navy">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

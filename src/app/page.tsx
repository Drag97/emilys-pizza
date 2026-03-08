import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-50 to-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-red-100 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <span>🪵</span> Wood-Fired Since 1995
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight mb-6">
                Authentic Italian Pizza in{" "}
                <span className="text-primary">New York</span>
              </h1>
              <p className="text-lg text-zinc-600 mb-8 max-w-lg">
                Family-owned and operated for over 25 years. Our wood-fired pizzas and homemade pasta are made with love and the finest ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/menu" 
                  className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors text-center"
                >
                  View Our Menu
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-zinc-300 text-zinc-700 px-8 py-3 rounded-full font-semibold hover:border-primary hover:text-primary transition-colors text-center"
                >
                  Get Directions
                </Link>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-zinc-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-zinc-600 font-medium">4.5</span>
                <span className="text-zinc-400">• 200+ reviews</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-fade-in animation-delay-200">
              <div className="relative aspect-square max-w-lg mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&h=800&fit=crop"
                  alt="Delicious wood-fired pizza"
                  fill
                  className="object-cover rounded-3xl shadow-2xl"
                  priority
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍕</span>
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">500+</p>
                    <p className="text-sm text-zinc-500">Pizzas Daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Why Choose Emily&apos;s Pizza?</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              We take pride in every dish we serve. Here&apos;s what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-zinc-50 rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-in">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">Wood-Fired Excellence</h3>
              <p className="text-zinc-600">
                Our authentic wood-fired oven reaches 900°F, creating that perfect crispy crust with a smoky flavor you can taste in every bite.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-zinc-50 rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-in animation-delay-100">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">Family Recipe</h3>
              <p className="text-zinc-600">
                Our recipes have been passed down through generations. Every sauce, every dough is made from scratch using traditional Italian methods.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-zinc-50 rounded-2xl p-8 hover:shadow-lg transition-shadow animate-fade-in animation-delay-200">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">Fresh Daily</h3>
              <p className="text-zinc-600">
                We prepare our dough fresh every morning and source ingredients from local farmers. Nothing frozen, nothing pre-made.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Specialties</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              These are the dishes our customers can&apos;t get enough of.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Margherita */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <div className="relative h-56">
                <Image
                  src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop"
                  alt="Margherita Pizza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Classic Margherita</h3>
                <p className="text-zinc-600 text-sm mb-4">
                  San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil. Simple, authentic, perfection.
                </p>
                <span className="text-primary font-semibold">From $16.99</span>
              </div>
            </div>

            {/* Buffalo Wings */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in animation-delay-100">
              <div className="relative h-56">
                <Image
                  src="https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&h=400&fit=crop"
                  alt="Buffalo Wings"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Buffalo Wings</h3>
                <p className="text-zinc-600 text-sm mb-4">
                  Crispy fried wings tossed in our signature buffalo sauce. Served with blue cheese dip and celery.
                </p>
                <span className="text-primary font-semibold">From $12.99</span>
              </div>
            </div>

            {/* Garlic Knots */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in animation-delay-200">
              <div className="relative h-56">
                <Image
                  src="https://images.unsplash.com/photo-1573140401552-3fab0b24306b?w=600&h=400&fit=crop"
                  alt="Garlic Knots"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 mb-2">Garlic Knots</h3>
                <p className="text-zinc-600 text-sm mb-4">
                  Fresh baked knots brushed with garlic butter and parmesan. The perfect appetizer (or side).
                </p>
                <span className="text-primary font-semibold">From $6.99</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/menu" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View Full Menu
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Taste the Difference?
          </h2>
          <p className="text-zinc-300 text-lg mb-8">
            Order online or stop by for dine-in. We&apos;d love to serve you!
          </p>
          <div className="flex flex-col sm:flex justify-center">
            <Link 
              href="/contact" 
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Order Online
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-zinc-900 transition-colors"
            >
              Call Us: (555) 123-4567
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

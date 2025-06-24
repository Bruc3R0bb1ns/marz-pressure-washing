import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Droplets,
  Leaf,
  Phone,
  Mail,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Home,
  Building,
  Shield,
  Award,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-slate-800">Marz Pressure Washing</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#services" className="text-slate-600 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="#about" className="text-slate-600 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="#testimonials" className="text-slate-600 hover:text-blue-600 font-medium">
              Reviews
            </Link>
            <Link href="#contact" className="text-slate-600 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <Phone className="h-4 w-4 mr-2" />
            Call Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-green-900/80">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            High-Quality Pressure Washing You Can Count On
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Residential & Commercial Services • Serving with Pride for 3+ Years
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold">
            Request a Quote
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Professional pressure washing services for residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Driveway Cleaning</h3>
                <p className="text-slate-600">
                  Remove oil stains, dirt, and grime to restore your driveway's original appearance
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Deck & Patio Washing</h3>
                <p className="text-slate-600">Gentle yet effective cleaning for wooden decks and stone patios</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Sidewalk Pressure Washing</h3>
                <p className="text-slate-600">Keep walkways safe and clean with professional sidewalk cleaning</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Commercial Exteriors</h3>
                <p className="text-slate-600">
                  Professional building exterior cleaning for businesses and commercial properties
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md lg:col-span-1 md:col-span-2 lg:col-start-2">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Safe Chemical Treatments</h3>
                <p className="text-slate-600">
                  Eco-friendly chemical solutions that are safe for your family and plants
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Why Choose Marz Pressure Washing?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional results with every job
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">3+ Years Experience</h3>
              <p className="text-slate-600">Proven track record of satisfied customers and quality work</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Safe for Plants</h3>
              <p className="text-slate-600">Eco-friendly solutions that protect your landscaping and environment</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Custom Chemical Mix</h3>
              <p className="text-slate-600">Tailored cleaning solutions for different surfaces and stain types</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Residential & Commercial</h3>
              <p className="text-slate-600">Comprehensive services for homes and businesses of all sizes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">See the Difference</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our professional pressure washing delivers dramatic results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative">
              <Image
                src="/images/before-pressure-washing.jpg"
                alt="Before pressure washing - stained concrete patio"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full font-semibold">
                BEFORE
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/after-pressure-washing.jpg"
                alt="After pressure washing - clean restored concrete patio"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full font-semibold">
                AFTER
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-slate-700 mb-6 italic">
                  "Great customer service! Max did an amazing job pressure washing our sidewalk and driveway."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">MP</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Michael P.</p>
                    <p className="text-slate-600">Homeowner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-4">
              <Button variant="outline" size="sm" className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Get Your Free Quote</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to transform your property? Contact us today for a free estimate
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-700 font-medium">
                        Name
                      </Label>
                      <Input id="name" placeholder="Your full name" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-slate-700 font-medium">
                      Service Needed
                    </Label>
                    <Input id="service" placeholder="e.g., Driveway cleaning, Deck washing" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Message
                    </Label>
                    <Textarea id="message" placeholder="Tell us about your project..." className="mt-2 min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Droplets className="h-8 w-8 text-blue-400" />
                <h3 className="text-2xl font-bold">Marz Pressure Washing</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Professional pressure washing services you can trust. Serving residential and commercial properties with
                pride.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>262-506-8477</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>marzpressurewashing@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>Serving Your Local Area</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">We Accept</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-slate-300">💳 Venmo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-slate-300">💰 Zelle</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-slate-300">💵 Cash</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://facebook.com/marzpressurewashing" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-slate-600 text-white hover:bg-slate-700"
                  >
                    Facebook
                  </Button>
                </Link>
                <Link href="https://instagram.com/marzpressurewashing" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-slate-600 text-white hover:bg-slate-700"
                  >
                    Instagram
                  </Button>
                </Link>
                <Link href="https://business.google.com/dashboard" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-slate-600 text-white hover:bg-slate-700"
                  >
                    Google
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">© {new Date().getFullYear()} Marz Pressure Washing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

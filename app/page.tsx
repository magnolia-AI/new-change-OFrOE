'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CheckCircle, Zap, BarChartBig } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Supercharge Your Workflow with <span className="text-primary">SaaSify</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            The ultimate solution for boosting productivity and streamlining your business operations. Experience the future of work, today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">Get Started Free</Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">Learn More</Button>
          </div>
          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNhYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80" 
              alt="SaaS Platform Showcase" 
              className="rounded-lg shadow-xl mx-auto aspect-[16/9] object-cover w-full max-w-4xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose SaaSify?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Discover the powerful features that make SaaSify the leading choice for modern businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold">Blazing Fast Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our platform is optimized for speed, ensuring your tasks are completed in record time without any lag.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold">Intuitive User Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  A clean, modern, and easy-to-navigate interface designed for users of all technical levels.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <BarChartBig className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-semibold">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Gain valuable insights with our comprehensive analytics dashboard to make data-driven decisions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions or want to learn more? Reach out to us!
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <Card className="p-6 sm:p-8 shadow-xl">
              <ContactForm />
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}


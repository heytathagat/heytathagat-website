import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, CheckCircle, GraduationCap, Users, Lightbulb, BookOpen, Target } from "lucide-react"

export default function MentorLabsPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/90"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Link href="/#startups">
              <Button variant="outline" className="mb-4 border-black text-black hover:bg-gray-100 rounded-[20px]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Startups
              </Button>
            </Link>
            <Badge className="mb-2 bg-black text-white hover:bg-gray-800 border-none">Startup</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Mentor Labs</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              A mentorship platform connecting students with industry experts to foster innovation and entrepreneurship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white rounded-[20px]">
                Find a Mentor
                <Users className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-gray-100 rounded-[20px]">
                Become a Mentor
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Mentor Labs was created to bridge the gap between education and industry by connecting ambitious
                students with experienced mentors who can guide them on their entrepreneurial journey. We believe that
                mentorship is the key to unlocking potential and accelerating success.
              </p>
              <p className="text-gray-600 mb-6">
                Our platform facilitates meaningful connections between students and industry experts, providing
                structured mentorship programs that focus on practical skills, real-world experience, and network
                building. By fostering these relationships, we aim to create the next generation of innovative
                entrepreneurs and leaders.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black shrink-0 mt-0.5" />
                  <span className="text-gray-700">Access to a network of 500+ industry experts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black shrink-0 mt-0.5" />
                  <span className="text-gray-700">Personalized mentorship programs tailored to your goals</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black shrink-0 mt-0.5" />
                  <span className="text-gray-700">Practical workshops and skill-building sessions</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-black shrink-0 mt-0.5" />
                  <span className="text-gray-700">Opportunities to work on real-world projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Mentor+Labs"
                  alt="Mentor Labs Platform"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our range of mentorship programs designed to help students and young entrepreneurs succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Startup Accelerator",
                description:
                  "A 12-week intensive program for early-stage startups looking to refine their business model and secure funding.",
                image: "/placeholder.svg?height=300&width=300&text=Accelerator",
                icon: <Lightbulb className="h-6 w-6" />,
              },
              {
                title: "Career Mentorship",
                description:
                  "One-on-one guidance from industry professionals to help students navigate their career path and develop essential skills.",
                image: "/placeholder.svg?height=300&width=300&text=Career",
                icon: <Target className="h-6 w-6" />,
              },
              {
                title: "Innovation Workshop",
                description:
                  "Collaborative sessions focused on problem-solving, design thinking, and developing innovative solutions.",
                image: "/placeholder.svg?height=300&width=300&text=Innovation",
                icon: <BookOpen className="h-6 w-6" />,
              },
            ].map((program, index) => (
              <Card
                key={index}
                className="overflow-hidden border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm"
              >
                <div className="aspect-square relative">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-black">
                      {program.icon}
                    </div>
                    <h3 className="font-bold text-lg">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button variant="outline" className="w-full border-black text-black hover:bg-gray-100 rounded-[20px]">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See how Mentor Labs has helped students and young entrepreneurs achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Priya S.",
                role: "Founder, EcoTech Solutions",
                testimonial:
                  "The mentorship I received through Mentor Labs was instrumental in helping me secure seed funding for my startup. My mentor's guidance on pitching and business strategy made all the difference.",
                image: "/placeholder.svg?height=100&width=100&text=PS",
              },
              {
                name: "Rahul M.",
                role: "Software Engineer, Google",
                testimonial:
                  "The career mentorship program helped me navigate the complex tech industry and land my dream job. The practical advice and mock interviews were invaluable.",
                image: "/placeholder.svg?height=100&width=100&text=RM",
              },
              {
                name: "Aisha K.",
                role: "Co-founder, HealthTech App",
                testimonial:
                  "The innovation workshops sparked the idea for our healthcare app, and the ongoing mentorship helped us turn that idea into a viable business that's now helping thousands.",
                image: "/placeholder.svg?height=100&width=100&text=AK",
              },
              {
                name: "Vikram P.",
                role: "Product Manager, Microsoft",
                testimonial:
                  "My mentor helped me transition from engineering to product management by focusing on the right skills and connecting me with the right people. I couldn't have done it without Mentor Labs.",
                image: "/placeholder.svg?height=100&width=100&text=VP",
              },
            ].map((story, index) => (
              <Card key={index} className="border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{story.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{story.role}</p>
                      <p className="text-gray-700">"{story.testimonial}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Join the Mentor Labs Community</h2>
            <p className="text-gray-300 mb-8">
              Whether you're looking for guidance or want to share your expertise, Mentor Labs is the platform for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-black rounded-[20px]">
                Apply as a Student
                <GraduationCap className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-[20px]">
                Join as a Mentor
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

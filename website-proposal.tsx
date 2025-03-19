"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Layers,
  PenTool,
  Rocket,
  Smartphone,
  Laptop,
  Tablet,
  Search,
  Zap,
  Shield,
  MessageSquare,
  FileCode,
  BarChart,
  Briefcase,
  CheckSquare,
  AlertCircle,
  Wifi,
} from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function WebsiteProposal() {
  const [signed, setSigned] = useState(false)
  const [progress, setProgress] = useState(0)
  const currentDate = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })

  // Simulate progress bar animation on component mount
  useState(() => {
    const timer = setTimeout(() => setProgress(100), 500)
    return () => clearTimeout(timer)
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Website Development Proposal</h1>
              <p className="text-muted-foreground">Prepared on {currentDate}</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-md">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-medium">Proposal #WD-2025-0319</span>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Prepared For:</h3>
                  <p className="font-medium">Briar Albert</p>
                  <p>MAD Accommodation Ltd.</p>
                  <p>Mayfair Motel, Hastings</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Prepared By:</h3>
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://dl.dropbox.com/scl/fi/uc642qsb2l8hw5xgaa18j/KiwiDigitalLogo.png?rlkey=8z968o2q7na1kpmeiz1imzvb4"
                      alt="Kiwi Digital Logo"
                      width={100}
                      height={40}
                      className="mb-1"
                    />
                  </div>
                  <p className="font-medium">Richard Barely</p>
                  <p>Kiwi Digital Ltd.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Executive Summary */}
        <section className="mb-12">
          <Card className="border-primary/20">
            <CardHeader className="bg-primary/5">
              <CardTitle>Executive Summary</CardTitle>
              <CardDescription>A strategic digital solution for Mayfair Motel</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p>
                This proposal outlines a comprehensive website development strategy for MAD Accommodation Ltd's newly
                renovated Mayfair Motel in Hastings. The proposed website will serve as a powerful digital showcase for
                your adult-only 12-room boutique accommodation, designed to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <Card className="bg-background border-l-4 border-l-blue-500">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <BarChart className="h-8 w-8 text-blue-500 mb-2" />
                    <h3 className="font-medium">Increase Direct Bookings</h3>
                    <p className="text-sm text-muted-foreground">
                      Potential 30% increase in direct bookings, reducing OTA commission fees
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-l-4 border-l-purple-500">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <Search className="h-8 w-8 text-purple-500 mb-2" />
                    <h3 className="font-medium">Improve Visibility</h3>
                    <p className="text-sm text-muted-foreground">
                      Enhanced SEO to improve local search rankings for "Hastings accommodation"
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-l-4 border-l-green-500">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <MessageSquare className="h-8 w-8 text-green-500 mb-2" />
                    <h3 className="font-medium">Enhance Guest Experience</h3>
                    <p className="text-sm text-muted-foreground">Streamlined booking process and information access</p>
                  </CardContent>
                </Card>
              </div>

              <p>
                Our approach combines strategic planning, elegant design, and robust development to create a website
                that not only showcases the unique appeal of your adult-only accommodation but also drives measurable
                business results. The website will be fully integrated with your Seekom booking system, optimized for
                search engines, and designed to provide an exceptional user experience across all devices.
              </p>

              <div className="bg-muted p-4 rounded-md mt-4">
                <h4 className="font-medium mb-2">Project Highlights:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Custom WordPress development with Seekom integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Mobile-first, responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Comprehensive SEO strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Content management system training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>4-6 week development timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Ongoing support and maintenance options</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="text-muted-foreground mb-6">
            The following process overview represents the typical milestones, steps, requirements, and timeline
            associated with your project. Our team looks forward to the opportunity to collaborate and build this
            product with you.
          </p>

          <Card>
            <CardHeader>
              <CardTitle>Project Summary</CardTitle>
              <CardDescription>A strategic approach to your digital presence</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This project is intended to strategically plan, design, and develop a modern, user-friendly website for
                the newly renovated Mayfair Motel in Hastings. The website will serve as a digital showcase for your
                adult-only boutique accommodation, providing an intuitive and visually appealing platform for guests to
                explore your rooms, amenities, and local attractions, make bookings through Seekom, and access essential
                information.
              </p>

              <p className="text-muted-foreground">
                The design and functionality will align with your brand's aesthetic and business objectives, ensuring an
                optimized user experience across all devices. We'll highlight the unique selling points of your
                adult-only concept, the quality of your renovated rooms, and the appeal of the Hastings location to
                attract your target demographic.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>Business Objectives</span>
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-primary mt-0.5" />
                      <span>Increase direct bookings by 30%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-primary mt-0.5" />
                      <span>Establish brand identity for the renovated property</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-primary mt-0.5" />
                      <span>Showcase the adult-only concept and renovated rooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-primary mt-0.5" />
                      <span>Improve local search visibility in Hastings area</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-muted p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Target Audience</span>
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-primary mt-0.5" />
                      <span>Adult couples seeking quality accommodation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-primary mt-0.5" />
                      <span>Business travelers requiring comfortable stays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-primary mt-0.5" />
                      <span>Tourists exploring Hastings and surrounding areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckSquare className="h-4 w-4 text-primary mt-0.5" />
                      <span>Domestic travelers seeking weekend getaways</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Timeline Visual */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Timeline</h2>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Project Start</span>
                    <span>Project Completion</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>March 24, 2025</span>
                    <span>May 5, 2025</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Layers className="h-4 w-4 text-blue-500" />
                        <span>Strategy & Planning</span>
                      </CardTitle>
                      <CardDescription>Week 1</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Discovery & requirements</li>
                        <li>• Sitemap creation</li>
                        <li>• Wireframe development</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-purple-500">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <PenTool className="h-4 w-4 text-purple-500" />
                        <span>Design & Prototyping</span>
                      </CardTitle>
                      <CardDescription>Weeks 2-3</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• Visual design concepts</li>
                        <li>• UI/UX refinement</li>
                        <li>• Interactive prototyping</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base flex items-center gap-2">
                        <Rocket className="h-4 w-4 text-green-500" />
                        <span>Development & Launch</span>
                      </CardTitle>
                      <CardDescription>Weeks 4-6</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-1">
                        <li>• WordPress development</li>
                        <li>• Testing & optimization</li>
                        <li>• Launch & training</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Milestones */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Detailed Project Milestones</h2>

          <Tabs defaultValue="milestone1" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="milestone1" className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                <span>Strategy & Layout</span>
              </TabsTrigger>
              <TabsTrigger value="milestone2" className="flex items-center gap-2">
                <PenTool className="h-4 w-4" />
                <span>Screen Design</span>
              </TabsTrigger>
              <TabsTrigger value="milestone3" className="flex items-center gap-2">
                <Rocket className="h-4 w-4" />
                <span>Development & Launch</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="milestone1">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Milestone 1 - Strategy and Layout</CardTitle>
                    <Badge variant="outline" className="ml-2">
                      Week 1
                    </Badge>
                  </div>
                  <CardDescription>Creating the foundation for your digital presence</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <p>
                      Building a website is like building a home—it requires strategic planning, architecture, and a
                      blueprint. Our strategy and layout milestone is intended to create that strategic plan and build
                      visual layouts and the user experience (UX). This milestone will produce specific deliverables
                      that serve as foundational building blocks for the rest of your website development.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Key Activities:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Kickoff meeting to align on goals and vision</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Competitor analysis of other boutique accommodations</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>User journey mapping for booking process</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Information architecture and sitemap creation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Wireframe development for all key pages</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted p-4 rounded-md">
                        <h4 className="font-medium mb-2">Milestone 1 Deliverables:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">UX Page Layouts / Wireframe Prototype</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                Low-fidelity mockups of all key pages showing layout, navigation, and content structure
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Sitemap and Navigation Structure</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                Visual representation of website organization and user flow
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Content Requirements Document</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                Detailed outline of all content needed for each page
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-md overflow-hidden">
                    <div className="bg-muted px-4 py-2 border-b">
                      <h4 className="font-medium">Example Wireframe</h4>
                    </div>
                    <div className="p-4 flex justify-center bg-white">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Example wireframe for hotel homepage"
                        width={500}
                        height={300}
                        className="border border-muted rounded-md"
                      />
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-md border border-muted">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-primary" />
                      <span>Client Involvement:</span>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      During this milestone, we'll need your input on brand preferences, target audience, content
                      requirements, and feedback on wireframes. You'll have two rounds of revisions to ensure the
                      layouts align with your vision before proceeding to design.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="milestone2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Milestone 2 - Screen Design</CardTitle>
                    <Badge variant="outline" className="ml-2">
                      Weeks 2-3
                    </Badge>
                  </div>
                  <CardDescription>Bringing your vision to life with compelling visuals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <p>
                      Your designs are created using the layouts defined by your wireframes. We will start by collecting
                      your branding preferences and inspirations. Our team will then take your wireframe layouts and
                      bring them to life by applying your creative inspirations and branding preferences, focusing on
                      showcasing the premium, adult-only nature of the renovated Mayfair Motel.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Key Activities:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Brand identity integration and mood board creation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Color palette and typography selection</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>High-fidelity mockups of all key pages</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Responsive design for mobile, tablet, and desktop</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Interactive prototype development</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted p-4 rounded-md">
                        <h4 className="font-medium mb-2">Milestone 2 Deliverables:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Custom Screen Designs</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                High-fidelity visual designs for all pages, showcasing your brand identity
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">High-Resolution Website Prototype</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                Interactive prototype demonstrating user flows and functionality
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Style Guide</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                Comprehensive guide defining colors, typography, and UI components
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-muted px-4 py-2 border-b">
                        <h4 className="font-medium text-sm">Desktop View</h4>
                      </div>
                      <div className="p-2 flex justify-center bg-white">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Desktop design mockup"
                          width={300}
                          height={200}
                          className="border border-muted rounded-md"
                        />
                      </div>
                    </div>

                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-muted px-4 py-2 border-b">
                        <h4 className="font-medium text-sm">Tablet View</h4>
                      </div>
                      <div className="p-2 flex justify-center bg-white">
                        <Image
                          src="/placeholder.svg?height=200&width=200"
                          alt="Tablet design mockup"
                          width={200}
                          height={200}
                          className="border border-muted rounded-md"
                        />
                      </div>
                    </div>

                    <div className="border rounded-md overflow-hidden">
                      <div className="bg-muted px-4 py-2 border-b">
                        <h4 className="font-medium text-sm">Mobile View</h4>
                      </div>
                      <div className="p-2 flex justify-center bg-white">
                        <Image
                          src="/placeholder.svg?height=200&width=100"
                          alt="Mobile design mockup"
                          width={100}
                          height={200}
                          className="border border-muted rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-md border border-muted">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-primary" />
                      <span>Client Involvement:</span>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      During this milestone, we'll need your feedback on design concepts, color schemes, and visual
                      elements. You'll have two rounds of revisions to refine the designs before we proceed to
                      development. This is the stage where we ensure the visual identity perfectly captures the premium,
                      adult-only experience of Mayfair Motel.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="milestone3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Milestone 3 - Website Development and Launch</CardTitle>
                    <Badge variant="outline" className="ml-2">
                      Weeks 4-6
                    </Badge>
                  </div>
                  <CardDescription>Transforming designs into a fully functional website</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <p>
                      The development of your website is the culmination of all prior deliverables. This step involves
                      creating an exact replica of your design prototype to create a live website using WordPress. The
                      conclusion of our development process results in a new website that is optimized for both mobile
                      and desktop experiences. The site will include a fully active and live website, which will be
                      connected to your live domain upon approval. The final deliverable will also include two rounds of
                      revision to collaborate with you until all bugs are handled and the site is technically sound
                      based on the approved designs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Key Activities:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>WordPress theme development based on approved designs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Seekom booking system integration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Responsive testing across all devices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>SEO implementation and performance optimization</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Content population and quality assurance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span>Browser compatibility testing</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted p-4 rounded-md">
                        <h4 className="font-medium mb-2">Milestone 3 Deliverables:</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Complete Website Development</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                Fully functional WordPress website with all features implemented
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Automatic Site Backup</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                Regular backup system to protect your website data
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Server Transition</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                Migration of website to your production server
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Domain Transfers & Redirects</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                Configuration of domain settings and any necessary redirects
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">SSL Certificate Installation</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                Secure connection for your website visitors
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-medium">Website Management & Training Tutorials</span>
                              <p className="text-sm text-muted-foreground mt-1">
                                Comprehensive training on WordPress content management
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-md border border-muted">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-primary" />
                      <span>Client Involvement:</span>
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      During this milestone, we'll need your content assets (photos, text, etc.), feedback on
                      development progress, and participation in training sessions. You'll have two rounds of revisions
                      to ensure the final website meets all requirements before launch.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>

          <Card>
            <CardHeader>
              <CardTitle>WordPress Development Platform</CardTitle>
              <CardDescription>
                Industry-leading content management system powering over 40% of all websites
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-background border-l-4 border-l-blue-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <FileCode className="h-4 w-4 text-blue-500" />
                      <span>Core Technologies</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">WordPress CMS</span>
                          <p className="text-xs text-muted-foreground">User-friendly content management system</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">PHP 8+</span>
                          <p className="text-xs text-muted-foreground">Server-side scripting language</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">MySQL Database</span>
                          <p className="text-xs text-muted-foreground">Robust data storage solution</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">HTML5/CSS3/JavaScript</span>
                          <p className="text-xs text-muted-foreground">Frontend development technologies</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background border-l-4 border-l-purple-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Zap className="h-4 w-4 text-purple-500" />
                      <span>Plugins & Extensions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">Seekom Integration</span>
                          <p className="text-xs text-muted-foreground">Booking engine connection</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">Yoast SEO</span>
                          <p className="text-xs text-muted-foreground">Search engine optimization toolkit</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">WP Rocket</span>
                          <p className="text-xs text-muted-foreground">Performance optimization</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">Wordfence Security</span>
                          <p className="text-xs text-muted-foreground">Website protection and firewall</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background border-l-4 border-l-green-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span>Hosting & Infrastructure</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">Cloud Hosting</span>
                          <p className="text-xs text-muted-foreground">Scalable and reliable hosting solution</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">CDN Integration</span>
                          <p className="text-xs text-muted-foreground">Global content delivery network</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">SSL Certificate</span>
                          <p className="text-xs text-muted-foreground">Secure HTTPS connection</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <div>
                          <span className="font-medium">Automated Backups</span>
                          <p className="text-xs text-muted-foreground">Regular data protection</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-medium mb-2">Why WordPress for Your Hotel Website?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      <span className="font-medium">User-Friendly Management:</span> Easy content updates without
                      technical knowledge
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      <span className="font-medium">Scalability:</span> Grows with your business needs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      <span className="font-medium">SEO Advantages:</span> Built-in SEO capabilities for better
                      visibility
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      <span className="font-medium">Integration Capabilities:</span> Seamless connection with Seekom and
                      other tools
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      <span className="font-medium">Security:</span> Regular updates and robust security measures
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mobile Responsiveness */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Mobile Responsiveness</h2>

          <Card>
            <CardHeader>
              <CardTitle>Mobile-First Design Approach</CardTitle>
              <CardDescription>Optimized experience across all devices and screen sizes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                With over 60% of travel bookings now made on mobile devices, your website will be built using a
                mobile-first approach. This ensures that your guests have a seamless experience regardless of the device
                they're using, from smartphones to tablets to desktop computers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="bg-blue-500/10 p-4 rounded-full">
                    <Smartphone className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="font-medium">Mobile</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized for smartphones with touch-friendly navigation and streamlined content
                  </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="bg-purple-500/10 p-4 rounded-full">
                    <Tablet className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="font-medium">Tablet</h3>
                  <p className="text-sm text-muted-foreground">
                    Enhanced layouts for medium-sized screens with optimized touch interactions
                  </p>
                </div>

                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="bg-green-500/10 p-4 rounded-full">
                    <Laptop className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="font-medium">Desktop</h3>
                  <p className="text-sm text-muted-foreground">
                    Full-featured experience with rich visuals and expanded content
                  </p>
                </div>
              </div>

              <div className="border rounded-md overflow-hidden">
                <div className="bg-muted px-4 py-2 border-b">
                  <h4 className="font-medium">Responsive Design Preview</h4>
                </div>
                <div className="p-4 flex flex-wrap justify-center gap-6 bg-white">
                  <div className="text-center">
                    <div className="border border-muted rounded-md p-1 inline-block">
                      <Image
                        src="/placeholder.svg?height=300&width=150"
                        alt="Mobile view"
                        width={150}
                        height={300}
                        className="rounded-md"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Mobile View</p>
                  </div>

                  <div className="text-center">
                    <div className="border border-muted rounded-md p-1 inline-block">
                      <Image
                        src="/placeholder.svg?height=250&width=200"
                        alt="Tablet view"
                        width={200}
                        height={250}
                        className="rounded-md"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Tablet View</p>
                  </div>

                  <div className="text-center">
                    <div className="border border-muted rounded-md p-1 inline-block">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Desktop view"
                        width={300}
                        height={200}
                        className="rounded-md"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Desktop View</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h4 className="font-medium mb-2">Key Responsive Features:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Fluid layouts that adapt to any screen size</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Touch-optimized navigation and booking process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Optimized images for faster loading on mobile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Simplified menus for smaller screens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Click-to-call functionality for mobile users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Mobile-optimized booking widget</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* SEO and Performance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">SEO & Performance Optimization</h2>

          <Card>
            <CardHeader>
              <CardTitle>Search Engine & Performance Strategy</CardTitle>
              <CardDescription>Maximizing visibility and user experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Your website will be built with search engine optimization (SEO) and performance as core considerations.
                This ensures that potential guests can easily find your property when searching for accommodation in
                Hastings, and that they enjoy a fast, seamless experience once they arrive on your site.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-4">SEO Strategy</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Keyword Research & Implementation</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Targeting relevant terms like "Hastings accommodation," "adult-only motel," and "boutique
                          stays"
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Local SEO Optimization</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Google Business Profile optimization and local citation building
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Technical SEO</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Proper site structure, schema markup, and XML sitemap implementation
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Content Strategy</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          SEO-optimized content highlighting your unique selling points
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Performance Optimization</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Image Optimization</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Compression and lazy loading for faster page loading
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Caching Implementation</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Browser and server-side caching for improved speed
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Code Optimization</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Minified CSS/JS and efficient code structure
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Core Web Vitals Optimization</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Meeting Google's performance metrics for better rankings
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-md mt-4">
                <h4 className="font-medium mb-2">Expected Outcomes:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Improved rankings for local accommodation searches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Faster page load times (under 3 seconds)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Higher conversion rates from search traffic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Better user experience leading to longer site visits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>Improved Google PageSpeed scores</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Content Strategy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Content Strategy</h2>

          <Card>
            <CardHeader>
              <CardTitle>Effective Content Planning</CardTitle>
              <CardDescription>Engaging your audience and driving conversions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Content is a crucial element of your website's success. We'll help you develop and implement a content
                strategy that effectively communicates your unique value proposition, engages your target audience, and
                drives bookings for your adult-only accommodation.
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Content Planning & Organization</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      We'll create a comprehensive content plan that outlines all required content for each page,
                      ensuring a cohesive narrative throughout the website.
                    </p>
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Key Content Areas:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Homepage</span>
                            <p className="text-xs text-muted-foreground">
                              Compelling introduction, key selling points, featured rooms, and clear calls-to-action
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">About Us</span>
                            <p className="text-xs text-muted-foreground">
                              Your story, vision for the renovated property, and unique adult-only concept
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Rooms</span>
                            <p className="text-xs text-muted-foreground">
                              Detailed descriptions, high-quality images, amenities, and pricing information
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">FAQs</span>
                            <p className="text-xs text-muted-foreground">
                              Answers to common questions about policies, facilities, and services
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Contact Us</span>
                            <p className="text-xs text-muted-foreground">
                              Clear contact information, location details, and inquiry form
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Visual Content Strategy</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      High-quality visual content is essential for a hotel website. We'll help you plan and implement a
                      visual strategy that showcases your property in the best possible light.
                    </p>
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Visual Content Elements:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Professional Photography</span>
                            <p className="text-xs text-muted-foreground">
                              High-resolution images of rooms, amenities, and property features
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Virtual Tours</span>
                            <p className="text-xs text-muted-foreground">
                              360° room tours to provide an immersive preview experience
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Video Content</span>
                            <p className="text-xs text-muted-foreground">
                              Short promotional videos highlighting the property and experience
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Infographics</span>
                            <p className="text-xs text-muted-foreground">
                              Visual representations of amenities, local attractions, and services
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>SEO Content Optimization</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      All content will be optimized for search engines to improve your visibility for relevant searches.
                    </p>
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">SEO Content Elements:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Keyword-Rich Headlines</span>
                            <p className="text-xs text-muted-foreground">
                              Strategic placement of target keywords in page titles and headings
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Meta Descriptions</span>
                            <p className="text-xs text-muted-foreground">
                              Compelling snippets that encourage clicks from search results
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Alt Text for Images</span>
                            <p className="text-xs text-muted-foreground">
                              Descriptive text for all images to improve accessibility and SEO
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Local Content</span>
                            <p className="text-xs text-muted-foreground">
                              Information about Hastings and nearby attractions to attract local search traffic
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Content Creation Services</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      We offer professional content creation services to help you develop compelling, on-brand content
                      for your website.
                    </p>
                    <div className="bg-muted p-4 rounded-md">
                      <h4 className="font-medium mb-2">Available Services:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Copywriting</span>
                            <p className="text-xs text-muted-foreground">
                              Professional writing for all website pages and descriptions
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Photography Coordination</span>
                            <p className="text-xs text-muted-foreground">
                              Arrangement of professional photography services
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Content Editing</span>
                            <p className="text-xs text-muted-foreground">
                              Refinement of existing content to improve quality and effectiveness
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          <div>
                            <span className="font-medium">Content Calendar</span>
                            <p className="text-xs text-muted-foreground">
                              Planning for ongoing content updates and blog posts
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Note: Content creation services are available as an additional option and can be added to the
                      project scope based on your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Project Management */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Management & Communication</h2>

          <Card>
            <CardHeader>
              <CardTitle>Collaborative Project Approach</CardTitle>
              <CardDescription>Clear communication and efficient project management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Effective communication and project management are essential for the success of your website development
                project. We implement a structured approach to ensure transparency, collaboration, and timely delivery.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-4">Communication Channels</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <MessageSquare className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Weekly Progress Meetings</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Regular video calls to discuss progress, address questions, and gather feedback
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <MessageSquare className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Project Management Platform</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Dedicated online workspace for task tracking, file sharing, and communication
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <MessageSquare className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Email Updates</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Regular written updates summarizing progress and next steps
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <MessageSquare className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Dedicated Project Manager</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Single point of contact for all project-related questions and concerns
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Project Management Approach</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Agile Methodology</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Iterative approach allowing for flexibility and adaptation throughout the project
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Milestone-Based Delivery</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Clear deliverables at each project stage with formal approval processes
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Transparent Reporting</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Regular status updates and progress reports throughout the project
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Structured Feedback Process</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Clear procedures for providing, documenting, and implementing feedback
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-md mt-4">
                <h4 className="font-medium mb-2">Revision Process:</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Each milestone includes two rounds of revisions to ensure your complete satisfaction:
                </p>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium shrink-0">
                      1
                    </div>
                    <span>
                      <span className="font-medium">Initial Delivery:</span> We'll present the completed milestone
                      deliverables for your review
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium shrink-0">
                      2
                    </div>
                    <span>
                      <span className="font-medium">First Revision:</span> Based on your feedback, we'll make initial
                      adjustments
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium shrink-0">
                      3
                    </div>
                    <span>
                      <span className="font-medium">Second Revision:</span> Final refinements to perfect the
                      deliverables
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-primary/20 text-primary rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium shrink-0">
                      4
                    </div>
                    <span>
                      <span className="font-medium">Milestone Approval:</span> Formal sign-off before proceeding to the
                      next phase
                    </span>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Legal and Security */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Legal & Security Considerations</h2>

          <Card>
            <CardHeader>
              <CardTitle>Protecting Your Business & Customers</CardTitle>
              <CardDescription>Ensuring compliance and security for your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Your website will be built with legal compliance and security as key priorities, protecting both your
                business and your customers' data.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-4">Legal Documentation</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Privacy Policy</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Transparent disclosure of data collection and usage practices
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Terms of Service</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Clear guidelines for website usage and booking conditions
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Cookie Policy</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Information about cookie usage and user consent options
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Booking Terms & Conditions</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Specific terms related to reservations, cancellations, and refunds
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Security Measures</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">SSL Encryption</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Secure connection for all website visitors and data transmission
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">WordPress Security</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Regular updates, security plugins, and hardening measures
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Data Protection</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Secure handling of customer information and booking details
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <span className="font-medium">Backup Systems</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Regular automated backups to prevent data loss
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-md mt-4">
                <h4 className="font-medium mb-2">Compliance Considerations:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      <span className="font-medium">GDPR Compliance:</span> Ensuring proper data handling and user
                      consent
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      <span className="font-medium">Accessibility Standards:</span> WCAG 2.1 compliance for users with
                      disabilities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      <span className="font-medium">PCI DSS:</span> Secure handling of payment information through
                      Seekom
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                    <span>
                      <span className="font-medium">Local Regulations:</span> Compliance with New Zealand-specific
                      requirements
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Project Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  <span>Website Pages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Homepage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>About Us</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Rooms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>FAQs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Booking Widget (linked with Seekom)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Contact Us</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Local Attractions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Legal Pages (Privacy Policy, Terms)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Project Timeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Estimated Duration:</span>
                    <span className="font-medium">4-6 Weeks</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Milestones Count:</span>
                    <span className="font-medium">3</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Expected Start Date:</span>
                    <span className="font-medium">March 24, 2025</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Estimated Completion Date:</span>
                    <span className="font-medium">May 5, 2025</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Screen Count:</span>
                    <span className="font-medium">6-8 Pages</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Global Project Timeline</h2>

          <Card>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Milestone</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Key Deliverables</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Milestone 1 - Strategy</TableCell>
                    <TableCell>Week 1</TableCell>
                    <TableCell>Wireframes, Sitemap, Content Plan</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Milestone 2 - Screen Design</TableCell>
                    <TableCell>Weeks 2-3</TableCell>
                    <TableCell>Visual Designs, Interactive Prototype</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Milestone 3 - Development</TableCell>
                    <TableCell>Weeks 4-5</TableCell>
                    <TableCell>WordPress Development, Seekom Integration</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Final QA, Optimization, & Launch</TableCell>
                    <TableCell>Week 6</TableCell>
                    <TableCell>Testing, Training, Site Launch</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Responsibilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Responsibilities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Client Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Provide all existing branding materials and guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Collaborate on feedback rounds within agreed timeframes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Purchase any required third-party apps/licenses (e.g., Seekom)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Provide and approve all content and assets (text, images, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Provide domain registrar and hosting access if required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Participate in training sessions for website management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Review and approve milestone deliverables</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Initial discovery & intake process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>UX (User Experience) Design and wireframing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>UI (User Interface) Design and prototyping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>WordPress development and Seekom integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Internal testing, QA, and performance optimizations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Implementation of all finalized assets and content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>SEO implementation and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Final transition, domain configuration & redirects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1" />
                    <span>Website management training and documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cost & Payment */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Cost & Payment Terms</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  <span>Project Investment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-4 border-b">
                  <span className="text-lg font-medium">Total Investment:</span>
                  <span className="text-2xl font-bold">$7,500</span>
                </div>
                <div className="mt-4 text-sm text-muted-foreground space-y-2">
                  <p>This investment covers all deliverables outlined in this proposal, including:</p>
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Complete website design and development</li>
                    <li>Seekom booking system integration</li>
                    <li>Mobile-responsive implementation</li>
                    <li>SEO optimization</li>
                    <li>Two rounds of revisions per milestone</li>
                    <li>Training and documentation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Milestone</TableHead>
                      <TableHead className="text-right">Payment Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Project Deposit (Upon Signing)</TableCell>
                      <TableCell className="text-right">$3,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Milestone 2 Sign-Off</TableCell>
                      <TableCell className="text-right">$3,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Milestone 3 Sign-Off</TableCell>
                      <TableCell className="text-right">$1,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Total:</TableCell>
                      <TableCell className="text-right font-bold">$7,500</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <div className="mt-4 space-y-2">
                  <h4 className="font-medium text-sm">Payment Terms:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• All payments are due within 14 days of invoice date</li>
                    <li>• Accepted payment methods: Bank transfer, credit card</li>
                    <li>• Late payments subject to 1.5% monthly interest</li>
                    <li>• Project work begins upon receipt of initial deposit</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Additional Services & Options</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  The following services are available as optional add-ons to enhance your website:
                </p>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Service</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="text-right">Investment</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Professional Copywriting</TableCell>
                      <TableCell>Complete website content creation by professional writers</TableCell>
                      <TableCell className="text-right">$1,200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Photography Services</TableCell>
                      <TableCell>Professional photography of property and rooms</TableCell>
                      <TableCell className="text-right">$1,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Monthly Maintenance</TableCell>
                      <TableCell>Ongoing updates, security, and support</TableCell>
                      <TableCell className="text-right">$250/month</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Advanced SEO Package</TableCell>
                      <TableCell>Comprehensive SEO strategy and implementation</TableCell>
                      <TableCell className="text-right">$1,800</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <p className="text-sm text-muted-foreground">
                  These services can be added at any time during or after the project. Please inquire for more details.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Terms and Conditions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Terms & Conditions</h2>

          <Card>
            <CardHeader>
              <CardTitle>Project Agreement Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Project Scope</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      This proposal outlines the agreed-upon deliverables for the MAD Accommodation Ltd. website
                      project. Any requests for additional features, pages, or functionality not explicitly outlined in
                      this proposal may be subject to additional costs and timeline adjustments.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Changes to project scope must be agreed upon in writing by both parties.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Revisions & Changes</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Each milestone includes two rounds of revisions. Additional revision requests beyond the included
                      rounds will be billed at our standard hourly rate of $125 per hour.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Major changes to approved deliverables that require significant rework may impact the project
                      timeline and cost.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Intellectual Property Rights</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Upon receipt of final payment, MAD Accommodation Ltd. will own all rights to the completed website
                      design and content, except for third-party elements such as stock photos, plugins, or themes which
                      remain subject to their respective licenses.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We reserve the right to include the completed website in our portfolio and promotional materials.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Project Timeline</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      The estimated timeline assumes prompt client feedback and approval at each milestone. Delays in
                      providing feedback or required materials may extend the project timeline.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We will make reasonable efforts to meet all deadlines but cannot be held responsible for delays
                      caused by factors outside our control.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Termination</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Either party may terminate this agreement with 14 days written notice. In the event of
                      termination:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 pl-5 list-disc">
                      <li>Client will be invoiced for all work completed up to the termination date</li>
                      <li>Any prepaid amounts for work not completed will be refunded</li>
                      <li>All materials and deliverables completed and paid for will be provided to the client</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Warranty &amp; Support</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      We provide a 30-day warranty period after website launch to address any bugs or issues related to
                      the original scope of work at no additional cost.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      After the warranty period, support and maintenance are available through our monthly maintenance
                      package or at our standard hourly rate.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>Confidentiality</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Both parties agree to maintain the confidentiality of any proprietary information shared during
                      the course of the project. This includes business strategies, customer data, and any other
                      sensitive information.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <div className="bg-muted p-4 rounded-md">
                  <p className="text-sm text-muted-foreground">
                    By signing this proposal, you agree to all terms and conditions outlined above. This proposal is valid
                    for 30 days from the date of issue.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="mb-12">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle>Ready to Transform Your Online Presence?</CardTitle>
                <CardDescription>
                  Take the first step toward a website that drives bookings and showcases your renovated property
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>
                  Your newly renovated Mayfair Motel deserves a website that reflects its quality and appeal. By accepting
                  this proposal, you're investing in a digital presence that will:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-background border-l-4 border-l-blue-500 p-4 rounded-md flex flex-col items-center text-center">
                    <BarChart className="h-8 w-8 text-blue-500 mb-2" />
                    <h3 className="font-medium">Drive Direct Bookings</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduce OTA commissions and increase your profit margin
                    </p>
                  </div>

                  <div className="bg-background border-l-4 border-l-purple-500 p-4 rounded-md flex flex-col items-center text-center">
                    <Wifi className="h-8 w-8 text-purple-500 mb-2" />
                    <h3 className="font-medium">Expand Your Reach</h3>
                    <p className="text-sm text-muted-foreground">Attract new guests through improved online visibility</p>
                  </div>

                  <div className="bg-background border-l-4 border-l-green-500 p-4 rounded-md flex flex-col items-center text-center">
                    <Smartphone className="h-8 w-8 text-green-500 mb-2" />
                    <h3 className="font-medium">Enhance User Experience</h3>
                    <p className="text-sm text-muted-foreground">Provide a seamless booking journey on any device</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                  <Button size="lg" className="w-full md:w-auto bg-blue-500 hover:bg-blue-600">
                    Accept Proposal
                  </Button>
                  <Button variant="outline" size="lg" className="w-full md:w-auto border-purple-500 text-purple-500 hover:bg-purple-50">
                    Schedule a Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Signature */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Acceptance</h2>

            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-medium">Client Signature</h3>
                    <Separator />
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Name:</p>
                      <p className="h-6">Briar Albert</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Title:</p>
                      <p className="h-6">MAD Accommodation Ltd.</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Signature:</p>
                      <div className={`h-16 border rounded-md ${signed ? "bg-muted/50" : ""}`}>
                        {signed && <div className="italic p-4 text-muted-foreground">Signed electronically</div>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Date:</p>
                      <p className="h-6">{currentDate}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Developer Signature</h3>
                    <Separator />
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Name:</p>
                      <p className="h-6">Richard Barely</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Title:</p>
                      <p className="h-6">Kiwi Digital Ltd.</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Signature:</p>
                      <div className="h-16 border rounded-md bg-muted/50">
                        <div className="italic p-4 text-muted-foreground">Signed electronically</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Date:</p>
                      <p className="h-6">{currentDate}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-4 border-t p-6">
                <Button variant="outline">Download as PDF</Button>
                <Button onClick={() => setSigned(true)} disabled={signed}>
                  {signed ? "Proposal Accepted" : "Accept Proposal"}
                </Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      </div>
    )
  }


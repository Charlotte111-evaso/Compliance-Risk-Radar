import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Shield, BarChart3, MapPin, Users, AlertTriangle, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-red-600" />
          <h1 className="text-lg font-semibold">Compliance Risk Radar</h1>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Hi, I'm Charlotte Evason</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Welcome to the documentation for <strong>Compliance Risk Radar</strong> — a comprehensive fraud
                detection dashboard I built for visualizing risk scores, identifying anomalies, and monitoring high-risk
                users across global markets.
              </p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link
                  href="https://compliance-risk-radar-charlotte-evason.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch Dashboard
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/dashboard">
                  Explore Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Project Overview */}
          <Card className="border-red-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
                Project Overview
              </CardTitle>
              <CardDescription>A sophisticated fraud detection and compliance monitoring system</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Compliance Risk Radar is an interactive dashboard designed to help compliance teams identify and monitor
                potential fraud risks across user bases. The system processes user data to generate risk scores, detect
                anomalies, and provide geographic insights into suspicious activities.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Key Capabilities</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Real-time risk score calculation</li>
                    <li>• Anomaly detection and flagging</li>
                    <li>• Geographic risk visualization</li>
                    <li>• Interactive filtering and analysis</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Technologies Used</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Python & Pandas for data processing</li>
                    <li>• Streamlit for dashboard interface</li>
                    <li>• Plotly for interactive visualizations</li>
                    <li>• Machine learning for risk scoring</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center">Dashboard Features</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    Risk Score Analytics
                  </CardTitle>
                  <CardDescription>Comprehensive risk assessment and scoring system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Advanced algorithms analyze user behavior patterns, transaction history, and account characteristics
                    to generate accurate risk scores.
                  </p>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/dashboard">
                      Learn More
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Anomaly Detection
                  </CardTitle>
                  <CardDescription>Intelligent identification of suspicious patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Machine learning models detect unusual user behaviors and flag potential fraud cases for manual
                    review.
                  </p>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/filtering">
                      View Filtering Options
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    Geographic Insights
                  </CardTitle>
                  <CardDescription>Global risk visualization and mapping</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Interactive heatmaps show risk distribution across countries and regions, helping identify
                    geographic fraud patterns.
                  </p>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/dashboard">
                      Explore Heatmaps
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    User Monitoring
                  </CardTitle>
                  <CardDescription>Comprehensive user profile analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Track KYC status, account age, transaction patterns, and other key indicators for each user in the
                    system.
                  </p>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/schema">
                      View Data Schema
                      <ArrowRight className="ml-auto h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Start */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Start Guide</CardTitle>
              <CardDescription>Get started with the Compliance Risk Radar dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-medium">
                    1
                  </div>
                  <h3 className="font-medium">Launch Dashboard</h3>
                  <p className="text-sm text-muted-foreground">
                    Click the "Launch Dashboard" button to open the interactive Streamlit application.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-medium">
                    2
                  </div>
                  <h3 className="font-medium">Explore Risk Scores</h3>
                  <p className="text-sm text-muted-foreground">
                    Review the risk score distribution and identify high-risk users requiring attention.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-medium">
                    3
                  </div>
                  <h3 className="font-medium">Apply Filters</h3>
                  <p className="text-sm text-muted-foreground">
                    Use the filtering options to focus on specific countries, risk thresholds, or anomaly flags.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Highlights */}
          <Card className="bg-slate-50">
            <CardHeader>
              <CardTitle>Technical Highlights</CardTitle>
              <CardDescription>Key technical achievements and implementation details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium">Data Processing</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Processed and cleaned large-scale user datasets</li>
                    <li>• Implemented feature engineering for risk scoring</li>
                    <li>• Built automated data validation pipelines</li>
                    <li>• Optimized performance for real-time analysis</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Visualization & UX</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Created interactive geographic heatmaps</li>
                    <li>• Designed intuitive filtering interfaces</li>
                    <li>• Built responsive dashboard layouts</li>
                    <li>• Implemented real-time data updates</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarInset>
  )
}

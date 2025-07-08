import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Shield, Users, AlertTriangle, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-blue-600" />
          <h1 className="text-lg font-semibold">Home</h1>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-4xl px-4 py-8 space-y-12">
          {/* Home Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Charlotte Evason</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data Scientist specializing in fraud detection and compliance risk assessment. This project demonstrates
              advanced anomaly detection techniques for financial compliance monitoring.
            </p>
          </div>

          {/* Project Summary */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Shield className="h-5 w-5 text-blue-600" />
                Project Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Compliance Risk Radar simulates Binance-style compliance risk detection using Python, pandas, and
                scikit-learn. The system processes user transaction data to identify potential fraud patterns through
                machine learning algorithms, providing real-time risk assessment and anomaly detection capabilities for
                financial compliance teams. The dashboard is built with Python and deployed on Render.
              </p>
            </CardContent>
          </Card>

          {/* Key Stats */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">Key Statistics</CardTitle>
              <CardDescription className="text-gray-600">Project metrics and technical achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">1,000</div>
                  <div className="text-sm text-gray-600">Simulated Users</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50</div>
                  <div className="text-sm text-gray-600">
                    Anomalies Detected
                    <br />
                    using Isolation Forest
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center">
                    <BarChart3 className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">4</div>
                  <div className="text-sm text-gray-600">
                    Key Features
                    <br />
                    Monitored
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">ML</div>
                  <div className="text-sm text-gray-600">
                    Risk Assessment
                    <br />
                    Algorithm
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-3">Features Monitored:</h4>
                <div className="grid gap-2 md:grid-cols-2">
                  <div className="text-sm text-gray-600">• IP risk score analysis</div>
                  <div className="text-sm text-gray-600">• Transaction count patterns</div>
                  <div className="text-sm text-gray-600">• Average transaction value</div>
                  <div className="text-sm text-gray-600">• Geographic spread monitoring</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-blue-200 bg-blue-50/30 hover:bg-blue-50/50 transition-colors">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Interactive Dashboard</h3>
                  </div>
                  <p className="text-gray-600">
                    Explore the live Python dashboard with real-time data visualization and filtering capabilities.
                  </p>
                  <Button variant="outline" className="w-full justify-between bg-transparent" asChild>
                    <Link href="/dashboard">
                      View Dashboard
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:bg-gray-50/50 transition-colors">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">Insights Report</h3>
                  </div>
                  <p className="text-gray-600">
                    Detailed analysis of anomaly detection findings and geographic risk distribution patterns.
                  </p>
                  <Button variant="outline" className="w-full justify-between bg-transparent" asChild>
                    <Link href="/insights">
                      View Insights
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </SidebarInset>
  )
}

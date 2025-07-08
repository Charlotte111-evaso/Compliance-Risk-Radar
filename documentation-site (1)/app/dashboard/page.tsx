import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { BarChart3, ExternalLink, Play, Shield, Users, AlertTriangle, MapPin } from "lucide-react"

export default function DashboardPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-blue-600" />
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-4xl px-4 py-8 space-y-12">
          {/* Dashboard Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Interactive Dashboard</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the live Compliance Risk Radar dashboard with comprehensive fraud detection and risk analysis
              capabilities.
            </p>
          </div>

          {/* Launch Dashboard */}
          <Card className="border-blue-200 bg-blue-50/30">
            <CardContent className="text-center py-12">
              <div className="space-y-6">
                <div className="flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Play className="h-8 w-8" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900">Launch Compliance Risk Radar</h3>
                  <p className="text-gray-600 max-w-lg mx-auto">
                    Access the interactive Streamlit dashboard for real-time fraud detection, anomaly analysis, and
                    geographic risk visualization.
                  </p>
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
                  <a href="https://compliance-risk-radar2.onrender.com" target="_blank" rel="noopener noreferrer">
                    Compliance Risk Radar Dashboard
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <p className="text-sm text-gray-500">Opens in a new tab • Ensure pop-ups are enabled</p>
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 text-center">Dashboard Features</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Risk Score Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600">
                    Comprehensive risk assessment with machine learning-powered scoring algorithms.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Risk score distribution visualization</li>
                    <li>• High-risk user identification</li>
                    <li>• Statistical summary metrics</li>
                    <li>• Interactive filtering controls</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-blue-600" />
                    Anomaly Detection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600">
                    Advanced machine learning algorithms identify suspicious user behavior patterns.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Isolation Forest algorithm</li>
                    <li>• Anomaly flag filtering</li>
                    <li>• Detailed user profiles</li>
                    <li>• Investigation workflows</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    Geographic Heatmap
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600">
                    Interactive world map showing risk distribution across countries and regions.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Country-level risk visualization</li>
                    <li>• Interactive hover tooltips</li>
                    <li>• Geographic filtering options</li>
                    <li>• High-risk jurisdiction alerts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    User Data Explorer
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600">
                    Comprehensive user data table with advanced search and filtering capabilities.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Sortable data columns</li>
                    <li>• Advanced search functionality</li>
                    <li>• Export capabilities</li>
                    <li>• Real-time data updates</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Usage Guide */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-900">How to Use the Dashboard</CardTitle>
              <CardDescription className="text-gray-600">
                Step-by-step guide to maximize your analysis workflow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
                    1
                  </div>
                  <h3 className="font-medium text-gray-900">Review Overview</h3>
                  <p className="text-sm text-gray-600">
                    Start with the KPI metrics and risk score distribution to understand the current landscape.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
                    2
                  </div>
                  <h3 className="font-medium text-gray-900">Apply Filters</h3>
                  <p className="text-sm text-gray-600">
                    Use sidebar controls to filter by anomaly flags, countries, or risk score thresholds.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-medium">
                    3
                  </div>
                  <h3 className="font-medium text-gray-900">Investigate</h3>
                  <p className="text-sm text-gray-600">
                    Drill down into specific users and geographic regions for detailed compliance analysis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </SidebarInset>
  )
}

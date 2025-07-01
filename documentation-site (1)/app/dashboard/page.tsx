import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { BarChart3, AlertTriangle, MapPin, Users, TrendingUp, Flag, Globe, Activity } from "lucide-react"

export default function DashboardPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          <h1 className="text-lg font-semibold">Dashboard Overview</h1>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive guide to the Compliance Risk Radar dashboard features and visualizations.
            </p>
          </div>

          {/* Dashboard Components */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Dashboard Components</h2>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Risk Score Summaries
                  <Badge variant="secondary">Core Feature</Badge>
                </CardTitle>
                <CardDescription>Comprehensive risk assessment and scoring visualization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The risk score summary section provides an overview of user risk distribution across your entire user
                  base. This includes statistical summaries, distribution charts, and trend analysis.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Metrics Displayed</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Average risk score across all users</li>
                      <li>• Risk score distribution histogram</li>
                      <li>• High-risk user count and percentage</li>
                      <li>• Risk score trends over time</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Visual Components</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Interactive bar charts and histograms</li>
                      <li>• Color-coded risk level indicators</li>
                      <li>• Statistical summary cards</li>
                      <li>• Trend line visualizations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                  Anomalies and Anomaly Filtering
                  <Badge variant="destructive">Critical</Badge>
                </CardTitle>
                <CardDescription>Advanced anomaly detection and filtering capabilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The anomaly detection system identifies users with unusual patterns or behaviors that deviate from
                  normal user profiles. These anomalies are flagged for manual review and investigation.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-medium">Anomaly Types Detected</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Unusual transaction patterns</li>
                      <li>• Suspicious IP address activity</li>
                      <li>• Inconsistent geographic locations</li>
                      <li>• Abnormal account behavior</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Filtering Options</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Filter by anomaly flag (Yes/No)</li>
                      <li>• Sort by anomaly severity</li>
                      <li>• Filter by anomaly type</li>
                      <li>• Date range filtering for anomalies</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-orange-800">Anomaly Alert System</h5>
                      <p className="text-sm text-orange-700 mt-1">
                        Users flagged as anomalies require immediate attention and manual review by compliance teams.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Geolocation Heatmap
                  <Badge variant="outline">Interactive</Badge>
                </CardTitle>
                <CardDescription>Global risk visualization and geographic analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The geolocation heatmap provides a visual representation of risk distribution across different
                  countries and regions, helping identify geographic patterns in fraudulent activities.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="font-medium">Heatmap Features</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Color-coded risk intensity by country</li>
                      <li>• Interactive country selection</li>
                      <li>• Zoom and pan capabilities</li>
                      <li>• Hover tooltips with detailed stats</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Geographic Insights</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Risk concentration by region</li>
                      <li>• Country-specific user counts</li>
                      <li>• Cross-border activity patterns</li>
                      <li>• High-risk jurisdiction identification</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-green-800">Geographic Risk Analysis</h5>
                      <p className="text-sm text-green-700 mt-1">
                        The heatmap helps identify countries with higher fraud rates and enables targeted compliance
                        strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-purple-600" />
                  KPI Metrics Dashboard
                  <Badge variant="secondary">Overview</Badge>
                </CardTitle>
                <CardDescription>Key performance indicators and summary statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The KPI metrics section provides high-level summary statistics and key performance indicators that
                  give stakeholders a quick overview of the current compliance status.
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <h4 className="font-medium">Total Users</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Total registered users</li>
                      <li>• Active user count</li>
                      <li>• New user registrations</li>
                      <li>• User growth trends</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Flag className="h-4 w-4 text-red-600" />
                      <h4 className="font-medium">Flagged Users</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• High-risk user count</li>
                      <li>• Anomaly-flagged users</li>
                      <li>• Users under investigation</li>
                      <li>• Flagged user percentage</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-green-600" />
                      <h4 className="font-medium">Countries</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Total countries represented</li>
                      <li>• High-risk countries</li>
                      <li>• Countries with most users</li>
                      <li>• Geographic distribution</li>
                    </ul>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 mt-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-medium text-blue-800 mb-2">Real-time Updates</h5>
                    <p className="text-sm text-blue-700">
                      All KPI metrics are updated in real-time as new data is processed and analyzed.
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h5 className="font-medium text-purple-800 mb-2">Customizable Views</h5>
                    <p className="text-sm text-purple-700">
                      KPI cards can be customized to show different time periods and comparison metrics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dashboard Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Navigation</CardTitle>
              <CardDescription>How to navigate and interact with the dashboard interface</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium text-green-600">Interactive Elements</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Click on chart elements to drill down into details
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Use sidebar filters to refine data views
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Hover over visualizations for detailed tooltips
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Export charts and data for reporting
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-blue-600">Best Practices</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      Start with the overview before diving into details
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      Use filters to focus on specific risk segments
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      Review anomalies regularly for timely action
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      Monitor geographic patterns for emerging risks
                    </li>
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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play, Shield, BarChart3, MapPin, AlertTriangle, Users, Settings } from "lucide-react"

export default function LaunchPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          <h1 className="text-lg font-semibold">Launch Dashboard</h1>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Launch Compliance Risk Radar</h1>
            <p className="text-muted-foreground mt-2">
              Access the interactive Streamlit dashboard for comprehensive fraud detection and risk analysis.
            </p>
          </div>

          {/* Launch Section */}
          <Card className="border-2 border-red-100 bg-red-50/30">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Shield className="h-6 w-6 text-red-600" />
                Compliance Risk Radar Dashboard
              </CardTitle>
              <CardDescription>Interactive fraud detection and compliance monitoring system</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Click the button below to launch the full interactive dashboard. The application will open in a new
                  tab.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> Please ensure pop-ups are enabled for this site.
                </p>
              </div>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700"
                href="https://compliance-risk-radar-charlotte-evason.streamlit.app/"
              >
                <Play className="mr-2 h-5 w-5" />
                Launch Dashboard
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-muted-foreground">
                Dashboard URL:{" "}
                <code className="bg-muted px-2 py-1 rounded">
                  https://compliance-risk-radar-charlotte-evason.streamlit.app/
                </code>
              </p>
            </CardContent>
          </Card>

          {/* Dashboard Guide */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">How to Use the Dashboard</h2>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-blue-600" />
                  Getting Started
                </CardTitle>
                <CardDescription>First steps when accessing the Compliance Risk Radar dashboard</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-medium">
                      1
                    </div>
                    <h3 className="font-medium">Dashboard Overview</h3>
                    <p className="text-sm text-muted-foreground">
                      Start by reviewing the main KPI metrics at the top of the dashboard to understand the current risk
                      landscape.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-medium">
                      2
                    </div>
                    <h3 className="font-medium">Risk Score Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      Examine the risk score distribution chart to identify patterns and concentrations of high-risk
                      users.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-medium">
                      3
                    </div>
                    <h3 className="font-medium">Apply Filters</h3>
                    <p className="text-sm text-muted-foreground">
                      Use the sidebar filters to focus on specific user segments, countries, or risk thresholds.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features to Explore */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    Risk Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Explore comprehensive risk score visualizations and statistical summaries.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Risk score distribution histogram</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">High-risk user identification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Statistical summary cards</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Anomaly Detection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Review users flagged by machine learning algorithms for suspicious behavior.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive" className="text-xs">
                        Alert
                      </Badge>
                      <span className="text-sm">Anomaly-flagged user list</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Anomaly filtering options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Detailed user profiles</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    Geographic Heatmap
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Visualize risk distribution across countries and identify geographic patterns.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Interactive
                      </Badge>
                      <span className="text-sm">Country-level risk heatmap</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Hover tooltips with statistics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Country-specific filtering</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    User Data Table
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Browse detailed user information with sorting and filtering capabilities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Sortable data columns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Search and filter functionality</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Export capabilities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dashboard Navigation Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Dashboard Navigation Tips
              </CardTitle>
              <CardDescription>Maximize your efficiency with these dashboard usage tips</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium text-green-600">Efficient Workflows</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Start with anomaly filter for daily compliance reviews
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Use geographic heatmap to identify regional risks
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Combine multiple filters for targeted investigations
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Export filtered data for detailed analysis
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-blue-600">Interactive Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      Click on chart elements for detailed views
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      Hover over visualizations for additional information
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      Use sidebar controls to adjust risk thresholds
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      Refresh data using the update button
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Requirements</CardTitle>
              <CardDescription>System requirements and browser compatibility for optimal performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium">Recommended Browsers</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Chrome 90+ (Recommended for best performance)</li>
                    <li>• Firefox 88+ (Full feature support)</li>
                    <li>• Safari 14+ (macOS compatibility)</li>
                    <li>• Edge 90+ (Windows integration)</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">System Requirements</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Minimum 4GB RAM for smooth operation</li>
                    <li>• Stable internet connection (broadband recommended)</li>
                    <li>• JavaScript enabled in browser settings</li>
                    <li>• Pop-up blocker disabled for this domain</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Information */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Support resources and troubleshooting information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Common Issues</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Dashboard not loading: Check browser compatibility</li>
                    <li>• Slow performance: Ensure sufficient system resources</li>
                    <li>• Missing data: Verify internet connection</li>
                    <li>• Filter not working: Clear browser cache and reload</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Contact Information</h4>
                  <p className="text-sm text-muted-foreground">
                    For technical support or questions about the Compliance Risk Radar dashboard, please contact
                    Charlotte Evason.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This dashboard is part of a technical portfolio demonstrating fraud detection and compliance
                    monitoring capabilities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarInset>
  )
}

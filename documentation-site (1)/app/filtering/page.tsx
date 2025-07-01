import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Filter, AlertTriangle, MapPin, TrendingUp, Flag, Sliders } from "lucide-react"

export default function FilteringPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5" />
          <h1 className="text-lg font-semibold">Filtering Options</h1>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Interactive Filtering Options</h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive guide to filtering capabilities in the Compliance Risk Radar dashboard for targeted risk
              analysis.
            </p>
          </div>

          {/* Primary Filters */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Primary Filter Categories</h2>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  Anomaly Flag Filter
                  <Badge variant="destructive">Critical</Badge>
                </CardTitle>
                <CardDescription>Filter users based on machine learning anomaly detection results</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The anomaly flag filter allows you to focus on users who have been flagged by the machine learning
                  system as exhibiting unusual or suspicious behavior patterns.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-medium">Filter Options</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <Flag className="h-4 w-4 text-red-600" />
                        <span className="text-sm">Show Anomalies Only</span>
                        <Badge variant="destructive" className="ml-auto">
                          High Priority
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <Flag className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Show Normal Users Only</span>
                        <Badge variant="outline" className="ml-auto">
                          Standard
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <Flag className="h-4 w-4 text-gray-600" />
                        <span className="text-sm">Show All Users</span>
                        <Badge variant="secondary" className="ml-auto">
                          Default
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">Use Cases</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Daily anomaly review workflows</li>
                      <li>• Compliance team investigations</li>
                      <li>• Risk assessment prioritization</li>
                      <li>• Fraud pattern analysis</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-red-800">Anomaly Review Protocol</h5>
                      <p className="text-sm text-red-700 mt-1">
                        Users flagged as anomalies should be reviewed within 24 hours and require manual investigation
                        by compliance teams.
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
                  Country Filter
                  <Badge variant="outline">Geographic</Badge>
                </CardTitle>
                <CardDescription>Filter users by country or region for geographic risk analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The country filter enables geographic analysis by allowing you to focus on users from specific
                  countries or regions, helping identify location-based risk patterns.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-medium">Filter Capabilities</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span className="text-sm">Single Country Selection</span>
                        <Badge variant="outline" className="ml-auto">
                          Basic
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <MapPin className="h-4 w-4 text-purple-600" />
                        <span className="text-sm">Multiple Country Selection</span>
                        <Badge variant="secondary" className="ml-auto">
                          Advanced
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <MapPin className="h-4 w-4 text-orange-600" />
                        <span className="text-sm">High-Risk Countries Only</span>
                        <Badge variant="destructive" className="ml-auto">
                          Risk-Based
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">Common Country Groups</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• High-risk jurisdictions</li>
                      <li>• EU member countries</li>
                      <li>• FATF blacklisted countries</li>
                      <li>• Major user base countries</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-green-600 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-green-800">Geographic Risk Insights</h5>
                      <p className="text-sm text-green-700 mt-1">
                        Use country filtering to identify regional fraud patterns and implement targeted compliance
                        strategies for high-risk jurisdictions.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Risk Score Threshold Filter
                  <Badge variant="secondary">Quantitative</Badge>
                </CardTitle>
                <CardDescription>Set minimum and maximum risk score thresholds for targeted analysis</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The risk score threshold filter allows you to focus on users within specific risk ranges, enabling
                  targeted analysis of high-risk, medium-risk, or low-risk user segments.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-medium">Threshold Options</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <TrendingUp className="h-4 w-4 text-red-600" />
                        <span className="text-sm">High Risk (0.7 - 1.0)</span>
                        <Badge variant="destructive" className="ml-auto">
                          Critical
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <TrendingUp className="h-4 w-4 text-orange-600" />
                        <span className="text-sm">Medium Risk (0.4 - 0.7)</span>
                        <Badge variant="outline" className="ml-auto">
                          Monitor
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 p-2 border rounded">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Low Risk (0.0 - 0.4)</span>
                        <Badge variant="secondary" className="ml-auto">
                          Standard
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-medium">Custom Range Settings</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Minimum threshold slider (0.0 - 1.0)</li>
                      <li>• Maximum threshold slider (0.0 - 1.0)</li>
                      <li>• Preset risk level buttons</li>
                      <li>• Real-time result count updates</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <Sliders className="h-4 w-4 text-blue-600 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-blue-800">Dynamic Threshold Adjustment</h5>
                      <p className="text-sm text-blue-700 mt-1">
                        Risk thresholds can be adjusted in real-time using interactive sliders, with immediate updates
                        to dashboard visualizations and user counts.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Filtering */}
          <Card>
            <CardHeader>
              <CardTitle>Advanced Filtering Combinations</CardTitle>
              <CardDescription>Combine multiple filters for sophisticated risk analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Multi-Filter Scenarios</h4>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-red-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-red-700">High-Priority Investigation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive" className="text-xs">
                            Anomaly
                          </Badge>
                          <span className="text-sm">Show Anomalies Only</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive" className="text-xs">
                            Risk Score
                          </Badge>
                          <span className="text-sm">&gt; 0.8 (Very High Risk)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Country
                          </Badge>
                          <span className="text-sm">High-risk jurisdictions</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Apply High-Priority Filter
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-blue-700">Regional Risk Analysis</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Country
                          </Badge>
                          <span className="text-sm">Specific Region/Country</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            Risk Score
                          </Badge>
                          <span className="text-sm">0.5 - 0.8 (Medium-High)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            Anomaly
                          </Badge>
                          <span className="text-sm">All Users</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Apply Regional Filter
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Filter Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle>Filtering Best Practices</CardTitle>
              <CardDescription>Optimize your risk analysis workflow with these filtering strategies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium text-green-600">Recommended Approaches</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Start with anomaly filter for daily reviews
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Use country filters for regional compliance checks
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Combine filters for targeted investigations
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Save frequently used filter combinations
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-orange-600">Common Pitfalls</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-2" />
                      Over-filtering and missing important cases
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-2" />
                      Ignoring medium-risk users entirely
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-2" />
                      Not reviewing filter results regularly
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-2" />
                      Relying solely on automated flags
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Filter Guide */}
          <Card>
            <CardHeader>
              <CardTitle>Interactive Filter Usage</CardTitle>
              <CardDescription>Step-by-step guide to using filters effectively in the dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-medium">
                    1
                  </div>
                  <h3 className="font-medium">Select Filter Type</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose from anomaly flag, country, or risk score threshold filters based on your analysis needs.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-medium">
                    2
                  </div>
                  <h3 className="font-medium">Apply Filter Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Configure filter parameters using dropdowns, sliders, or checkboxes in the dashboard sidebar.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-medium">
                    3
                  </div>
                  <h3 className="font-medium">Review Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyze the filtered results in charts, tables, and heatmaps that update automatically.
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

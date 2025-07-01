import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play, BarChart3, Database, Settings, Zap } from "lucide-react"

export default function StreamlitPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          <h1 className="text-lg font-semibold">Streamlit App</h1>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Interactive Streamlit Application</h1>
            <p className="text-muted-foreground mt-2">
              Access our powerful Streamlit application for hands-on data exploration, visualization, and analysis.
            </p>
          </div>

          {/* App Launch Section */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Play className="h-6 w-6 text-primary" />
                Launch Streamlit App
              </CardTitle>
              <CardDescription>
                Click the button below to open the interactive data analysis application
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <Button size="lg" className="text-lg px-8 py-6">
                <ExternalLink className="mr-2 h-5 w-5" />
                Open Streamlit App
              </Button>
              <p className="text-sm text-muted-foreground">
                The app will open in a new tab. Make sure pop-ups are enabled for this site.
              </p>
            </CardContent>
          </Card>

          {/* App Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">App Features</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    Interactive Visualizations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Create dynamic charts and graphs with real-time data updates and interactive controls.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Real-time chart updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Multiple chart types</span>
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

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-green-600" />
                    Data Exploration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Browse and analyze your datasets with powerful filtering and search capabilities.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Data table browser</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Advanced filtering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Statistical summaries</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-purple-600" />
                    Customizable Parameters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Adjust analysis parameters and settings to customize your data exploration experience.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Interactive widgets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Parameter sliders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Configuration panels</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-600" />
                    Real-time Processing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    Experience fast, real-time data processing and instant feedback on your analysis.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Instant calculations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Live data updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        Feature
                      </Badge>
                      <span className="text-sm">Responsive interface</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Getting Started */}
          <Card>
            <CardHeader>
              <CardTitle>Getting Started with the App</CardTitle>
              <CardDescription>Follow these steps to make the most of your Streamlit experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    1
                  </div>
                  <h3 className="font-medium">Launch the App</h3>
                  <p className="text-sm text-muted-foreground">
                    Click the launch button above to open the Streamlit application in a new tab.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    2
                  </div>
                  <h3 className="font-medium">Select Your Data</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose from available datasets or upload your own data files for analysis.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    3
                  </div>
                  <h3 className="font-medium">Explore & Analyze</h3>
                  <p className="text-sm text-muted-foreground">
                    Use the interactive widgets and controls to explore your data and generate insights.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Requirements</CardTitle>
              <CardDescription>System requirements and browser compatibility</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium">Supported Browsers</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Chrome 90+ (Recommended)</li>
                    <li>• Firefox 88+</li>
                    <li>• Safari 14+</li>
                    <li>• Edge 90+</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">System Requirements</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Minimum 4GB RAM</li>
                    <li>• Stable internet connection</li>
                    <li>• JavaScript enabled</li>
                    <li>• Pop-ups allowed for this domain</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Resources and support for using the Streamlit application</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-medium">Documentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive guides and tutorials for all app features.
                  </p>
                  <Button variant="outline" size="sm">
                    View Documentation
                  </Button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Support</h4>
                  <p className="text-sm text-muted-foreground">Get help from our support team for technical issues.</p>
                  <Button variant="outline" size="sm">
                    Contact Support
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarInset>
  )
}

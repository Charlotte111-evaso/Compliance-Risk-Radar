import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Settings, Database, Shield, Zap } from "lucide-react"

export default function ConfigPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          <h1 className="text-lg font-semibold">Configuration</h1>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Configuration Guide</h1>
            <p className="text-muted-foreground mt-2">
              Learn how to configure and customize your data platform for optimal performance.
            </p>
          </div>

          {/* Configuration Categories */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-blue-600" />
                  Database Configuration
                </CardTitle>
                <CardDescription>Set up and optimize your database connections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Connection pooling</span>
                    <Badge variant="outline">Performance</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Query optimization</span>
                    <Badge variant="secondary">Advanced</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Backup settings</span>
                    <Badge variant="outline">Essential</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Security Settings
                </CardTitle>
                <CardDescription>Configure authentication and access controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">API key management</span>
                    <Badge variant="destructive">Critical</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">User permissions</span>
                    <Badge variant="outline">Required</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SSL certificates</span>
                    <Badge variant="secondary">Security</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Environment Variables */}
          <Card>
            <CardHeader>
              <CardTitle>Environment Variables</CardTitle>
              <CardDescription>Essential environment variables for platform configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    Database Configuration
                  </h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="bg-muted p-2 rounded">DATABASE_URL=postgresql://user:pass@host:port/db</div>
                    <div className="bg-muted p-2 rounded">DB_POOL_SIZE=20</div>
                    <div className="bg-muted p-2 rounded">DB_TIMEOUT=30000</div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Security Settings
                  </h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="bg-muted p-2 rounded">JWT_SECRET=your-secret-key</div>
                    <div className="bg-muted p-2 rounded">API_KEY_SALT=random-salt-string</div>
                    <div className="bg-muted p-2 rounded">CORS_ORIGIN=https://yourdomain.com</div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Performance Tuning
                  </h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="bg-muted p-2 rounded">CACHE_TTL=3600</div>
                    <div className="bg-muted p-2 rounded">MAX_REQUEST_SIZE=10mb</div>
                    <div className="bg-muted p-2 rounded">RATE_LIMIT=1000</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Configuration Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle>Configuration Best Practices</CardTitle>
              <CardDescription>Follow these guidelines for optimal platform setup</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium text-green-600">Recommended Practices</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Use environment variables for sensitive data
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Enable SSL/TLS for all connections
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Set up automated backups
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Monitor system performance regularly
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-red-600">Common Pitfalls</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600 mt-2" />
                      Hardcoding secrets in configuration files
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600 mt-2" />
                      Using default passwords and keys
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600 mt-2" />
                      Ignoring resource limits
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-600 mt-2" />
                      Skipping security updates
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

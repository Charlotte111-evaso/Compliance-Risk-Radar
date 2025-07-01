import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { FileText, Code, Key, Globe } from "lucide-react"

export default function ApiPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          <h1 className="text-lg font-semibold">API Reference</h1>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">API Reference</h1>
            <p className="text-muted-foreground mt-2">
              Complete reference for our REST API endpoints and authentication methods.
            </p>
          </div>

          {/* API Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                API Overview
              </CardTitle>
              <CardDescription>Our REST API provides programmatic access to all platform features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-blue-600">REST</div>
                  <div className="text-sm text-muted-foreground">API Architecture</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-green-600">JSON</div>
                  <div className="text-sm text-muted-foreground">Response Format</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-purple-600">HTTPS</div>
                  <div className="text-sm text-muted-foreground">Secure Protocol</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Authentication */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Authentication
              </CardTitle>
              <CardDescription>Secure your API requests with proper authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">API Key Authentication</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Include your API key in the Authorization header of each request.
                  </p>
                  <div className="bg-muted p-3 rounded font-mono text-sm">Authorization: Bearer YOUR_API_KEY</div>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Base URL</h4>
                  <div className="bg-muted p-3 rounded font-mono text-sm">https://api.yourplatform.com/v1</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Endpoints */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">API Endpoints</h2>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Users Endpoint
                  <Badge variant="secondary">GET</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-3 rounded font-mono text-sm">GET /users</div>
                <p className="text-muted-foreground">
                  Retrieve a list of all users with optional filtering parameters.
                </p>
                <div className="space-y-2">
                  <h5 className="font-medium">Query Parameters</h5>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded">limit</code>
                      <span className="text-muted-foreground">Number of results to return (default: 50)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded">offset</code>
                      <span className="text-muted-foreground">Number of results to skip (default: 0)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded">status</code>
                      <span className="text-muted-foreground">Filter by user status (active, inactive)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Orders Endpoint
                  <Badge variant="secondary">GET</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-3 rounded font-mono text-sm">GET /orders</div>
                <p className="text-muted-foreground">Retrieve order data with comprehensive filtering options.</p>
                <div className="space-y-2">
                  <h5 className="font-medium">Query Parameters</h5>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded">user_id</code>
                      <span className="text-muted-foreground">Filter orders by specific user ID</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded">date_from</code>
                      <span className="text-muted-foreground">Start date for date range filter (YYYY-MM-DD)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="bg-muted px-2 py-1 rounded">date_to</code>
                      <span className="text-muted-foreground">End date for date range filter (YYYY-MM-DD)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Response Format */}
          <Card>
            <CardHeader>
              <CardTitle>Response Format</CardTitle>
              <CardDescription>Standard response structure for all API endpoints</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded">
                <pre className="text-sm overflow-x-auto">
                  {`{
  "success": true,
  "data": [
    {
      "id": "uuid-string",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "total": 100,
    "limit": 50,
    "offset": 0,
    "has_more": true
  }
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarInset>
  )
}

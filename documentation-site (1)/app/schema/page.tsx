import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Database, Key, Hash, MapPin, Calendar, Shield, Activity, DollarSign } from "lucide-react"

export default function SchemaPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          <h1 className="text-lg font-semibold">Data Schema</h1>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="mx-auto max-w-4xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Data Schema</h1>
            <p className="text-muted-foreground mt-2">
              Complete field reference for the processed_users.csv dataset used in the Compliance Risk Radar dashboard.
            </p>
          </div>

          {/* Dataset Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-blue-600" />
                Dataset: processed_users.csv
              </CardTitle>
              <CardDescription>
                Processed user data with risk scores, anomaly flags, and compliance indicators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-blue-600">15</div>
                  <div className="text-sm text-muted-foreground">Total Columns</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-green-600">~10K</div>
                  <div className="text-sm text-muted-foreground">User Records</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-red-600">CSV</div>
                  <div className="text-sm text-muted-foreground">File Format</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Identifier Fields */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Data Fields</h2>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-yellow-600" />
                  Core Identifiers
                </CardTitle>
                <CardDescription>Primary keys and unique identifiers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Hash className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">user_id</code>
                        <Badge variant="secondary">String</Badge>
                        <Badge variant="outline">Primary Key</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Unique user identifier used to track individual users across the system. Format: alphanumeric
                        string (e.g., "USER_12345").
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Geographic Fields */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  Geographic Information
                </CardTitle>
                <CardDescription>Location and regional data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">country</code>
                        <Badge variant="secondary">String</Badge>
                        <Badge variant="outline">ISO Code</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Two-letter ISO country code representing the user's registered country (e.g., "US", "GB", "DE").
                        Used for geographic risk analysis and heatmap visualization.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Fields */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  Compliance & Verification
                </CardTitle>
                <CardDescription>KYC status and compliance indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Shield className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">kyc_status</code>
                        <Badge variant="secondary">Boolean</Badge>
                        <Badge variant="destructive">Critical</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Indicates whether the user has successfully completed Know Your Customer (KYC) verification.
                        Values: True (passed) or False (not passed/pending).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Account Metrics
                </CardTitle>
                <CardDescription>Account age and activity indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">account_age_days</code>
                        <Badge variant="secondary">Integer</Badge>
                        <Badge variant="outline">Calculated</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Number of days since account creation. Used to assess account maturity and identify potentially
                        suspicious new accounts.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment Fields */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-red-600" />
                  Risk Assessment
                </CardTitle>
                <CardDescription>Risk scores and security indicators</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Activity className="h-5 w-5 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">ip_risk_score</code>
                        <Badge variant="secondary">Float</Badge>
                        <Badge variant="destructive">High Priority</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Risk score based on IP address analysis (0.0 - 1.0). Higher scores indicate higher risk.
                        Considers factors like VPN usage, known malicious IPs, and geographic inconsistencies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Hash className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">risk_score</code>
                        <Badge variant="secondary">Float</Badge>
                        <Badge variant="destructive">Primary Metric</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Overall composite risk score (0.0 - 1.0) calculated from multiple risk factors. This is the
                        primary metric used for user risk assessment and dashboard visualizations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transaction Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  Transaction Metrics
                </CardTitle>
                <CardDescription>Transaction history and patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Hash className="h-5 w-5 text-green-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">transaction_count</code>
                        <Badge variant="secondary">Integer</Badge>
                        <Badge variant="outline">Activity Metric</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Total number of transactions performed by the user. Used to assess user activity levels and
                        identify unusual transaction patterns.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <DollarSign className="h-5 w-5 text-green-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">avg_transaction_amount</code>
                        <Badge variant="secondary">Float</Badge>
                        <Badge variant="outline">Financial</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Average transaction amount in USD. Helps identify users with unusually high or low transaction
                        values that may indicate suspicious activity.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Risk Factors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-orange-600" />
                  Additional Risk Factors
                </CardTitle>
                <CardDescription>Supplementary risk indicators and flags</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Activity className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">device_risk_score</code>
                        <Badge variant="secondary">Float</Badge>
                        <Badge variant="outline">Security</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Risk score based on device fingerprinting and analysis (0.0 - 1.0). Considers factors like
                        device reputation, browser characteristics, and usage patterns.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Hash className="h-5 w-5 text-purple-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">login_frequency</code>
                        <Badge variant="secondary">Float</Badge>
                        <Badge variant="outline">Behavioral</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Average number of logins per day. Used to identify accounts with unusual access patterns that
                        may indicate account compromise or automated activity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 border rounded-lg">
                    <Shield className="h-5 w-5 text-red-600 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono bg-muted px-2 py-1 rounded">is_anomaly</code>
                        <Badge variant="secondary">Boolean</Badge>
                        <Badge variant="destructive">Alert Flag</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Machine learning-generated flag indicating whether the user exhibits anomalous behavior
                        patterns. True indicates the user requires manual review.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Quality Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Data Quality & Processing Notes</CardTitle>
              <CardDescription>Important information about data processing and quality</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium text-green-600">Data Processing</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      All risk scores normalized to 0.0-1.0 range
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Missing values handled with appropriate defaults
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Outliers identified and flagged for review
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2" />
                      Data validated for consistency and accuracy
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-blue-600">Usage Guidelines</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      Risk scores above 0.7 require immediate attention
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      Anomaly flags should be reviewed within 24 hours
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      Country codes follow ISO 3166-1 alpha-2 standard
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2" />
                      All timestamps in UTC format
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

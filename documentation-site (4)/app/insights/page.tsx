import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Lightbulb, Users, AlertTriangle, Globe, Target, CheckCircle } from "lucide-react"

export default function InsightsPage() {
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-blue-600" />
          <h1 className="text-lg font-semibold">Insights</h1>
        </div>
      </header>
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto max-w-4xl px-4 py-8 space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              🛡️ Compliance Risk Radar – Insights Report
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key findings from the simulated compliance risk monitoring system designed for crypto-like transactional
              data.
            </p>
          </div>

          {/* User & Transaction Overview */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Users className="h-5 w-5 text-blue-600" />
                User & Transaction Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Dataset Size:</span>
                        <br />
                        <span className="text-gray-700">1,000 synthetic users across ~20 countries</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Transaction Range:</span>
                        <br />
                        <span className="text-gray-700">5 to 99 transactions per user</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Average Transaction Value:</span>
                        <br />
                        <span className="text-gray-700">~$1,900 per user</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <span className="font-medium text-gray-900">Total Transaction Range:</span>
                        <br />
                        <span className="text-gray-700">$5,000 – $240,000 per user</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Anomaly Detection Findings */}
          <Card className="border-orange-200 bg-orange-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Anomaly Detection Findings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-orange-200">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-2xl font-bold text-orange-600">50</div>
                    <div className="text-sm text-gray-600">users flagged (5% of total)</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Key Patterns Identified:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="flex-shrink-0 w-4 h-4 text-orange-600 mt-1" />
                      <span className="text-gray-700">
                        <strong>Higher Transaction Values:</strong> Anomalous users averaged &gt;$2,500 per transaction
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="flex-shrink-0 w-4 h-4 text-orange-600 mt-1" />
                      <span className="text-gray-700">
                        <strong>Greater Variability:</strong> Inconsistent transaction patterns and amounts
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="flex-shrink-0 w-4 h-4 text-orange-600 mt-1" />
                      <span className="text-gray-700">
                        <strong>Geographic Correlation:</strong> Most anomalies from high IP risk regions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Geographic Distribution */}
          <Card className="border-green-200 bg-green-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Globe className="h-5 w-5 text-green-600" />
                Geographic Distribution of Risk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Risk analysis revealed clear geographic clustering patterns, with most anomalies concentrated in
                  high-risk jurisdictions.
                </p>

                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-medium text-gray-900 mb-3">High-Risk Countries (IP Risk &gt; 70):</h4>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇷🇺</span>
                      <div>
                        <div className="font-medium text-gray-900">Russia</div>
                        <div className="text-sm text-gray-600">Highest anomaly cluster</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇮🇷</span>
                      <div>
                        <div className="font-medium text-gray-900">Iran</div>
                        <div className="text-sm text-gray-600">Significant risk concentration</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🇧🇷</span>
                      <div>
                        <div className="font-medium text-gray-900">Brazil</div>
                        <div className="text-sm text-gray-600">Notable anomaly presence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Operational Insight */}
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Target className="h-5 w-5 text-blue-600" />
                Operational Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The hybrid approach combining machine learning with rule-based indicators proved highly effective for
                  compliance monitoring.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Benefits Achieved
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Reduced false positive rates</li>
                      <li>• Proactive risk identification</li>
                      <li>• Automated compliance monitoring</li>
                      <li>• Geographic risk mapping</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-600" />
                      Key Techniques
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Isolation Forest algorithm</li>
                      <li>• IP risk scoring</li>
                      <li>• Transaction pattern analysis</li>
                      <li>• Geographic correlation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Project Conclusion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  This project successfully demonstrates how data science and machine learning can significantly enhance
                  compliance systems in cryptocurrency and financial platforms.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Impact Summary:</h4>
                  <div className="grid gap-2 md:grid-cols-2 text-sm text-gray-700">
                    <div>• 5% anomaly detection rate achieved</div>
                    <div>• Geographic risk patterns identified</div>
                    <div>• Automated compliance workflows</div>
                    <div>• Scalable monitoring framework</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </SidebarInset>
  )
}

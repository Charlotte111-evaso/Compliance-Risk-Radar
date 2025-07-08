from flask import Flask, render_template
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os
import io
import base64
import plotly.express as px

app = Flask(__name__)

# Load your CSV data
DATA_PATH = os.path.join(os.path.dirname(__file__), 'processed_users.csv')
df = pd.read_csv(DATA_PATH)# Load your CSV data

# Compute metrics
total_users = len(df)
anomalies_detected = df['is_anomaly'].sum()
unique_countries = df['country'].nunique() if 'country' in df.columns else "N/A"

# Plot: IP Risk Score Distribution
fig1, ax1 = plt.subplots()
sns.histplot(df['ip_risk_score'], bins=30, kde=True, ax=ax1)
ax1.set_xlabel("IP Risk Score")
ax1.set_ylabel("Number of Users")
buffer1 = io.BytesIO()
plt.savefig(buffer1, format='png')
buffer1.seek(0)
plot_ip_risk = base64.b64encode(buffer1.getvalue()).decode()
plt.close(fig1)

# Plot: Avg Transaction Amount vs Transaction Count
fig2, ax2 = plt.subplots()
sns.scatterplot(data=df, x='transaction_count', y='avg_transaction_amount', hue='is_anomaly', palette={True: "red", False: "blue"}, alpha=0.6, ax=ax2)
ax2.set_xlabel("Transaction Count")
ax2.set_ylabel("Average Transaction Amount (USD)")
buffer2 = io.BytesIO()
plt.savefig(buffer2, format='png')
buffer2.seek(0)
plot_tx_scatter = base64.b64encode(buffer2.getvalue()).decode()
plt.close(fig2)

# Enhanced Geographic Heatmap using Plotly
country_coords_dict = {
    'US': {'latitude': 37.0902, 'longitude': -95.7129},
    'GB': {'latitude': 55.3781, 'longitude': -3.4360},
    'IR': {'latitude': 32.4279, 'longitude': 53.6880},
    'RU': {'latitude': 61.5240, 'longitude': 105.3188},
    'BR': {'latitude': -14.2350, 'longitude': -51.9253},
    'IN': {'latitude': 20.5937, 'longitude': 78.9629},
    'CN': {'latitude': 35.8617, 'longitude': 104.1954},
    'FR': {'latitude': 46.6034, 'longitude': 1.8883},
    'DE': {'latitude': 51.1657, 'longitude': 10.4515},
    'JP': {'latitude': 36.2048, 'longitude': 138.2529},
}
df['latitude'] = df['country'].map(lambda x: country_coords_dict.get(x, {}).get('latitude'))
df['longitude'] = df['country'].map(lambda x: country_coords_dict.get(x, {}).get('longitude'))

anomaly_points = df[df['is_anomaly'] == True].dropna(subset=['latitude', 'longitude'])
fig3 = px.scatter_geo(
    anomaly_points,
    lat='latitude',
    lon='longitude',
    hover_name='country',
    color='ip_risk_score',
    size='ip_risk_score',
    projection="natural earth",
    title="Geographic Distribution of Anomalies",
    color_continuous_scale="Reds"
)
plot_geo_html = fig3.to_html(full_html=False, include_plotlyjs='cdn')

# Filtered anomalies and full raw data
anomaly_df = df[df['is_anomaly'] == True]
raw_df = df.copy()

@app.route("/")
def dashboard():
    return render_template(
        "dashboard.html",
        total_users=total_users,
        anomalies_detected=anomalies_detected,
        unique_countries=unique_countries,
        plot_ip_risk=plot_ip_risk,
        plot_tx_scatter=plot_tx_scatter,
        plot_geo_html=plot_geo_html,
        anomaly_df=anomaly_df,
        raw_df=raw_df,
    )

#if __name__ == "__main__":
   # app.run(debug=True)
    
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)


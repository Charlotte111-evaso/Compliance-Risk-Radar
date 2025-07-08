from flask import Flask, jsonify, render_template, send_file
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import io
import base64
import os

app = Flask(__name__)

# Load your CSV data
DATA_PATH = os.path.join(os.path.dirname(__file__), 'processed_users.csv')
df = pd.read_csv(DATA_PATH)

# Add latitude and longitude columns for geo heatmap
country_coords_dict = {
    'AF': {'latitude': 33.9391, 'longitude': 67.7100},
    'AL': {'latitude': 41.1533, 'longitude': 20.1683},
    'DZ': {'latitude': 28.0339, 'longitude': 1.6596},
    'AR': {'latitude': -38.4161, 'longitude': -63.6167},
    'AM': {'latitude': 40.0691, 'longitude': 45.0382},
    'AU': {'latitude': -25.2744, 'longitude': 133.7751},
    'AT': {'latitude': 47.5162, 'longitude': 14.5501},
    'AZ': {'latitude': 40.1431, 'longitude': 47.5769},
    'BD': {'latitude': 23.6850, 'longitude': 90.3563},
    'BE': {'latitude': 50.5039, 'longitude': 4.4699},
    'BR': {'latitude': -14.2350, 'longitude': -51.9253},
    'CA': {'latitude': 56.1304, 'longitude': -106.3468},
    'CH': {'latitude': 46.8182, 'longitude': 8.2275},
    'CL': {'latitude': -35.6751, 'longitude': -71.5430},
    'CN': {'latitude': 35.8617, 'longitude': 104.1954},
    'CO': {'latitude': 4.5709, 'longitude': -74.2973},
    'CU': {'latitude': 21.5218, 'longitude': -77.7812},
    'CZ': {'latitude': 49.8175, 'longitude': 15.4730},
    'DE': {'latitude': 51.1657, 'longitude': 10.4515},
    'DK': {'latitude': 56.2639, 'longitude': 9.5018},
    'EG': {'latitude': 26.8206, 'longitude': 30.8025},
    'ES': {'latitude': 40.4637, 'longitude': -3.7492},
    'FR': {'latitude': 46.6034, 'longitude': 1.8883},
    'GB': {'latitude': 55.3781, 'longitude': -3.4360},
    'GR': {'latitude': 39.0742, 'longitude': 21.8243},
    'IN': {'latitude': 20.5937, 'longitude': 78.9629},
    'IR': {'latitude': 32.4279, 'longitude': 53.6880},
    'IT': {'latitude': 41.8719, 'longitude': 12.5674},
    'JP': {'latitude': 36.2048, 'longitude': 138.2529},
    'KR': {'latitude': 35.9078, 'longitude': 127.7669},
    'MX': {'latitude': 23.6345, 'longitude': -102.5528},
    'NL': {'latitude': 52.1326, 'longitude': 5.2913},
    'NO': {'latitude': 60.4720, 'longitude': 8.4689},
    'PK': {'latitude': 30.3753, 'longitude': 69.3451},
    'PL': {'latitude': 51.9194, 'longitude': 19.1451},
    'PT': {'latitude': 39.3999, 'longitude': -8.2245},
    'RO': {'latitude': 45.9432, 'longitude': 24.9668},
    'RU': {'latitude': 61.5240, 'longitude': 105.3188},
    'SA': {'latitude': 23.8859, 'longitude': 45.0792},
    'SE': {'latitude': 60.1282, 'longitude': 18.6435},
    'TR': {'latitude': 38.9637, 'longitude': 35.2433},
    'UA': {'latitude': 48.3794, 'longitude': 31.1656},
    'US': {'latitude': 37.0902, 'longitude': -95.7129},
    'ZA': {'latitude': -30.5595, 'longitude': 22.9375},
}
df['latitude'] = df['country'].map(lambda x: country_coords_dict.get(x, {}).get('latitude'))
df['longitude'] = df['country'].map(lambda x: country_coords_dict.get(x, {}).get('longitude'))

@app.route("/")
def home():
    total_users = len(df)
    anomalies_detected = int(df['is_anomaly'].sum())
    unique_countries = int(df['country'].nunique())

    # Plot 1: IP Risk Score Distribution
    fig1, ax1 = plt.subplots()
    df['ip_risk_score'].hist(bins=30, ax=ax1)
    ax1.set_title("IP Risk Score Distribution")
    ax1.set_xlabel("IP Risk Score")
    ax1.set_ylabel("Number of Users")
    buf1 = io.BytesIO()
    fig1.savefig(buf1, format='png')
    buf1.seek(0)
    encoded1 = base64.b64encode(buf1.read()).decode('utf-8')
    plt.close(fig1)

    # Plot 2: Avg Transaction Amount vs Transaction Count
    fig2, ax2 = plt.subplots()
    sns.scatterplot(
        data=df,
        x='transaction_count',
        y='avg_transaction_amount',
        hue='is_anomaly',
        palette={True: "red", False: "blue"},
        alpha=0.6,
        ax=ax2
    )
    ax2.set_title("Avg Transaction Amount vs Transaction Count")
    ax2.set_xlabel("Transaction Count")
    ax2.set_ylabel("Avg Transaction Amount")
    buf2 = io.BytesIO()
    fig2.savefig(buf2, format='png')
    buf2.seek(0)
    encoded2 = base64.b64encode(buf2.read()).decode('utf-8')
    plt.close(fig2)

    return render_template("dashboard.html",
                           total_users=total_users,
                           anomalies_detected=anomalies_detected,
                           unique_countries=unique_countries,
                           plot_ip_risk=encoded1,
                           plot_tx_scatter=encoded2)

@app.route("/api/summary")
def get_summary():
    return jsonify({
        "total_users": len(df),
        "anomalies_detected": int(df['is_anomaly'].sum()),
        "unique_countries": int(df['country'].nunique())
    })

@app.route("/api/ip-risk-plot")
def ip_risk_plot():
    fig, ax = plt.subplots()
    df['ip_risk_score'].hist(bins=30, ax=ax)
    ax.set_title("IP Risk Score Distribution")
    ax.set_xlabel("IP Risk Score")
    ax.set_ylabel("Number of Users")

    buf = io.BytesIO()
    fig.savefig(buf, format='png')
    buf.seek(0)
    encoded = base64.b64encode(buf.read()).decode('utf-8')
    plt.close(fig)
    return jsonify({"image": f"data:image/png;base64,{encoded}"})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)

from flask import Flask, jsonify, render_template, send_file
import pandas as pd
import matplotlib.pyplot as plt
import io
import base64
import os

app = Flask(__name__)

# Load your CSV data
DATA_PATH = os.path.join(os.path.dirname(__file__), 'processed_users.csv')
df = pd.read_csv(DATA_PATH)

@app.route("/")
def home():
    total_users = len(df)
    anomalies_detected = int(df['is_anomaly'].sum())
    unique_countries = int(df['country'].nunique())

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

    return render_template("dashboard.html",
                           total_users=total_users,
                           anomalies_detected=anomalies_detected,
                           unique_countries=unique_countries,
                           plot_image=encoded)

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

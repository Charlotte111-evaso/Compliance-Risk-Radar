import streamlit as st
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import pydeck as pdk
import os

st.set_page_config(layout="wide")

# === Data Loading ===
@st.cache_data
def load_data():
    csv_path = os.path.join(os.path.dirname(__file__), 'processed_users.csv')
    return pd.read_csv(csv_path)

df = load_data()

# === Title + Intro ===
st.title("🛡️ Compliance Risk Radar Dashboard")
st.markdown("Simulated compliance monitoring: risk scores, anomalies, and transaction patterns.")

# === Summary Metrics ===
st.subheader("Summary Statistics")
col1, col2, col3 = st.columns(3)
col1.metric("Total Users", len(df))
col2.metric("Anomalies Detected", int(df['is_anomaly'].sum()))
col3.metric("Unique Countries", df['country'].nunique())

# === IP Risk Score Distribution ===
st.subheader("📊 IP Risk Score Distribution")
fig1, ax1 = plt.subplots()
sns.histplot(df['ip_risk_score'], bins=30, kde=True, ax=ax1)
ax1.set_xlabel("IP Risk Score")
ax1.set_ylabel("Number of Users")
st.pyplot(fig1)

# === Transaction Scatterplot ===
st.subheader("📈 Avg Transaction Amount vs Transaction Count")
fig2, ax2 = plt.subplots()
sns.scatterplot(
    data=df,
    x='transaction_count',
    y='avg_transaction_amount',
    hue='is_anomaly',
    palette={True: "red", False: "blue"},
    alpha=0.6
)
ax2.set_xlabel("Transaction Count")
ax2.set_ylabel("Average Transaction Amount (USD)")
st.pyplot(fig2)

# === IP Risk Filter + Conditional Table ===
st.subheader("🔎 Filter by IP Risk Score (%)")
ip_threshold_percent = st.slider(
    "Minimum IP Risk Score (%)",
    min_value=0,
    max_value=100,
    value=50,
    step=1
)

# Convert slider percent to 0-1 scale
ip_threshold = ip_threshold_percent / 100

filtered_df = df[df['ip_risk_score'] >= ip_threshold]

if not filtered_df.empty:
    st.dataframe(filtered_df)
else:
    st.info("No users meet the selected IP risk score threshold.")

# === Geo Heatmap ===
st.subheader("🌍 Geographic Heatmap of Risky Users")
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
    # Add more as needed
}

df['latitude'] = df['country'].map(lambda x: country_coords_dict.get(x, {}).get('latitude'))
df['longitude'] = df['country'].map(lambda x: country_coords_dict.get(x, {}).get('longitude'))

if df[['latitude', 'longitude']].notnull().all(axis=1).any():
    st.pydeck_chart(pdk.Deck(
        initial_view_state=pdk.ViewState(
            latitude=20,
            longitude=0,
            zoom=1,
            pitch=0,
        ),
        layers=[
            pdk.Layer(
                'ScatterplotLayer',
                data=df[df['is_anomaly'] == True],
                get_position='[longitude, latitude]',
                get_radius=500000,
                get_fill_color='[255, 0, 0, 160]',
                pickable=True,
            ),
        ],
        tooltip={"text": "Country: {country}\nIP Risk Score: {ip_risk_score}"}
    ))
else:
    st.warning("Geographic data (latitude/longitude) not available.")

# === Raw Data Viewer ===
st.subheader("🗂️ Full Raw User Data")
with st.expander("Show full raw data"):
    st.dataframe(df)

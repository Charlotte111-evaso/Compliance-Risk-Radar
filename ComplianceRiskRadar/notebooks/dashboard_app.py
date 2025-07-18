# notebooks/dashboard_app.py

import streamlit as st
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import pydeck as pdk

st.set_page_config(layout="wide")

@st.cache_data
def load_data():
    return pd.read_csv("../Data/processed_users.csv")  # adjust path if needed

df = load_data()

st.title("🛡️ Compliance Risk Radar Dashboard")
st.markdown("Visualize compliance risk scores, anomalies, and transaction patterns for proactive risk management.")

# === KEY COMPLIANCE METRICS ===
st.subheader("📌 Key Compliance Metrics")
col1, col2, col3 = st.columns(3)
col1.metric("Flagged Users (%)", f"{(df['is_anomaly'].mean() * 100):.1f}%")
col2.metric("Max Transaction Flagged", f"${df.loc[df['is_anomaly'], 'total_transaction_amount'].max():,.0f}")
if df[df['is_anomaly']]['country'].nunique() > 0:
    col3.metric("Top Risk Region", df.loc[df['is_anomaly'], 'country'].mode()[0])
else:
    col3.metric("Top Risk Region", "N/A")

# === RISK SCORE DISTRIBUTION ===
st.subheader("📊 Risk Score Distribution")
st.bar_chart(df['compliance_risk_score'])

# === TIME SERIES: TRANSACTION VOLUME ===
st.subheader("📈 Transaction Volume Over Time")
if 'days_since_last_tx' in df.columns:
    time_df = df.groupby('days_since_last_tx')['total_transaction_amount'].sum().sort_index()
    st.line_chart(time_df)
else:
    st.warning("No 'days_since_last_tx' column found for time series chart.")

# === TOP FLAGGED USERS ===
st.subheader("👥 Top Flagged Users")
top_users = df[df['is_anomaly']].sort_values(by='total_transaction_amount', ascending=False).head(10)
st.dataframe(top_users[['user_id', 'country', 'total_transaction_amount', 'compliance_risk_score']])

# === TRANSACTION AMOUNT DISTRIBUTION ===
st.subheader("Transaction Amount Distribution")
fig1, ax1 = plt.subplots()
sns.histplot(df['total_transaction_amount'], bins=30, kde=True, ax=ax1)
ax1.set_xlabel("Total Transaction Amount")
ax1.set_ylabel("Number of Users")
st.pyplot(fig1)

# === ANOMALY FILTERING ===
st.subheader("Anomaly Filtering")
filter_anomaly = st.checkbox("Show only anomalies", False)
filtered_df = df[df['is_anomaly']] if filter_anomaly else df
st.dataframe(filtered_df)

# === GEOGRAPHIC HEATMAP ===
st.subheader("Geographic Heatmap of Risky Users")
country_coords_dict = {
    'AF': {'latitude': 33.9391, 'longitude': 67.7100}, 'AL': {'latitude': 41.1533, 'longitude': 20.1683},
    'DZ': {'latitude': 28.0339, 'longitude': 1.6596}, 'AR': {'latitude': -38.4161, 'longitude': -63.6167},
    'AM': {'latitude': 40.0691, 'longitude': 45.0382}, 'AU': {'latitude': -25.2744, 'longitude': 133.7751},
    'AT': {'latitude': 47.5162, 'longitude': 14.5501}, 'AZ': {'latitude': 40.1431, 'longitude': 47.5769},
    'BD': {'latitude': 23.6850, 'longitude': 90.3563}, 'BE': {'latitude': 50.5039, 'longitude': 4.4699},
    'BR': {'latitude': -14.2350, 'longitude': -51.9253}, 'CA': {'latitude': 56.1304, 'longitude': -106.3468},
    'CH': {'latitude': 46.8182, 'longitude': 8.2275}, 'CL': {'latitude': -35.6751, 'longitude': -71.5430},
    'CN': {'latitude': 35.8617, 'longitude': 104.1954}, 'CO': {'latitude': 4.5709, 'longitude': -74.2973},
    'CU': {'latitude': 21.5218, 'longitude': -77.7812}, 'CZ': {'latitude': 49.8175, 'longitude': 15.4730},
    'DE': {'latitude': 51.1657, 'longitude': 10.4515}, 'DK': {'latitude': 56.2639, 'longitude': 9.5018},
    'EG': {'latitude': 26.8206, 'longitude': 30.8025}, 'ES': {'latitude': 40.4637, 'longitude': -3.7492},
    'FR': {'latitude': 46.6034, 'longitude': 1.8883}, 'GB': {'latitude': 55.3781, 'longitude': -3.4360},
    'GR': {'latitude': 39.0742, 'longitude': 21.8243}, 'IN': {'latitude': 20.5937, 'longitude': 78.9629},
    'IR': {'latitude': 32.4279, 'longitude': 53.6880}, 'IT': {'latitude': 41.8719, 'longitude': 12.5674},
    'JP': {'latitude': 36.2048, 'longitude': 138.2529}, 'KR': {'latitude': 35.9078, 'longitude': 127.7669},
    'MX': {'latitude': 23.6345, 'longitude': -102.5528}, 'NL': {'latitude': 52.1326, 'longitude': 5.2913},
    'NO': {'latitude': 60.4720, 'longitude': 8.4689}, 'PK': {'latitude': 30.3753, 'longitude': 69.3451},
    'PL': {'latitude': 51.9194, 'longitude': 19.1451}, 'PT': {'latitude': 39.3999, 'longitude': -8.2245},
    'RO': {'latitude': 45.9432, 'longitude': 24.9668}, 'RU': {'latitude': 61.5240, 'longitude': 105.3188},
    'SA': {'latitude': 23.8859, 'longitude': 45.0792}, 'SE': {'latitude': 60.1282, 'longitude': 18.6435},
    'TR': {'latitude': 38.9637, 'longitude': 35.2433}, 'UA': {'latitude': 48.3794, 'longitude': 31.1656},
    'US': {'latitude': 37.0902, 'longitude': -95.7129}, 'ZA': {'latitude': -30.5595, 'longitude': 22.9375}
}

df['latitude'] = df['country'].map(lambda x: country_coords_dict.get(x, {}).get('latitude'))
df['longitude'] = df['country'].map(lambda x: country_coords_dict.get(x, {}).get('longitude'))

if df['latitude'].notnull().any() and df['longitude'].notnull().any():
    st.pydeck_chart(pdk.Deck(
        initial_view_state=pdk.ViewState(
            latitude=20, longitude=0, zoom=1.2, pitch=0,
        ),
        layers=[
            pdk.Layer(
                'ScatterplotLayer',
                data=df[df['is_anomaly']],
                get_position='[longitude, latitude]',
                get_radius=500000,
                get_fill_color='[255, 0, 0, 160]',
                pickable=True,
            )
        ],
        tooltip={"text": "Country: {country}\nAnomaly Score: {anomaly_score}"}
    ))
else:
    st.warning("Geographic data (latitude/longitude) not available.")


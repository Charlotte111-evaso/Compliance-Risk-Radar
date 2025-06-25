# -*- coding: utf-8 -*-
"""
Created on Tue Jun 24 15:20:04 2025

@author: LENOVO
"""

from sklearn.ensemble import IsolationForest

def detect_anomalies(users_df, features=None, contamination=0.05, random_state=42):
    """
    Detect anomalies in user data using Isolation Forest.
    
    Args:
        users_df (pd.DataFrame): User dataframe with engineered features.
        features (list): List of column names to use for anomaly detection.
                         If None, will use a default set.
        contamination (float): Proportion of anomalies expected in data.
        random_state (int): For reproducibility.
    
    Returns:
        pd.DataFrame: users_df with two new columns:
                      'anomaly_score' (float) and 'is_anomaly' (bool).
    """
    df = users_df.copy()
    
    # Default features to use if none specified
    if features is None:
        features = [
            'total_transaction_amount',
            'transaction_count',
            'avg_transaction_amount',
            'std_transaction_amount',
            'unique_counterparty_countries',
            'days_since_last_tx',
            'ip_risk_score',
            'account_age_days'
        ]
    
    # Fill any NaNs with 0 (or could consider median)
    X = df[features].fillna(0)
    
    model = IsolationForest(contamination=contamination, random_state=random_state)
    model.fit(X)
    
    # Anomaly score: the lower, the more anomalous
    df['anomaly_score'] = model.decision_function(X)
    
    # Label anomalies (-1 means anomaly)
    df['is_anomaly'] = model.predict(X) == -1
    
    return df

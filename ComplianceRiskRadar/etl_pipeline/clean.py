# -*- coding: utf-8 -*-
"""
Created on Tue Jun 24 11:32:58 2025

@author: LENOVO
"""
import pandas as pd

def clean_users(df):
    df = df.copy()

    # Ensure correct dtypes
    df['user_id'] = df['user_id'].astype(str)
    df['country'] = df['country'].astype(str)
    df['kyc_status'] = df['kyc_status'].astype('category')
    df['account_age_days'] = pd.to_numeric(df['account_age_days'], errors='coerce')
    df['device_count'] = pd.to_numeric(df['device_count'], errors='coerce')
    df['ip_risk_score'] = pd.to_numeric(df['ip_risk_score'], errors='coerce')

    # Drop rows with missing critical info
    df = df.dropna(subset=['user_id', 'account_age_days', 'ip_risk_score'])

    return df

def clean_transactions(df):
    df = df.copy()

    # Ensure correct dtypes
    df['tx_id'] = df['tx_id'].astype(str)
    df['user_id'] = df['user_id'].astype(str)
    df['timestamp'] = pd.to_datetime(df['timestamp'], errors='coerce')
    df['tx_type'] = df['tx_type'].astype(str)
    df['amount_usd'] = pd.to_numeric(df['amount_usd'], errors='coerce')
    df['counterparty_country'] = df['counterparty_country'].astype(str)

    # Drop rows with missing critical info
    df = df.dropna(subset=['tx_id', 'user_id', 'timestamp', 'amount_usd'])

    # Optional: rename tx_id to transaction_id for consistency
    df = df.rename(columns={'tx_id': 'transaction_id'})

    return df


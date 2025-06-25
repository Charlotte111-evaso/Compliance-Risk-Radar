# -*- coding: utf-8 -*-
"""
Created on Tue Jun 24 11:46:51 2025

@author: LENOVO
"""
import pandas as pd

def add_features(users_df, transactions_df):
    df_users = users_df.copy()
    df_tx = transactions_df.copy()

    # Ensure timestamp is datetime
    df_tx['timestamp'] = pd.to_datetime(df_tx['timestamp'])

    # === Transactional Aggregates ===
    total_tx = df_tx.groupby('user_id')['amount_usd'].sum().reset_index()
    total_tx.rename(columns={'amount_usd': 'total_transaction_amount'}, inplace=True)

    tx_count = df_tx.groupby('user_id').size().reset_index(name='transaction_count')

    avg_tx = df_tx.groupby('user_id')['amount_usd'].mean().reset_index()
    avg_tx.rename(columns={'amount_usd': 'avg_transaction_amount'}, inplace=True)

    std_tx = df_tx.groupby('user_id')['amount_usd'].std().reset_index()
    std_tx.rename(columns={'amount_usd': 'std_transaction_amount'}, inplace=True)

    unique_countries = df_tx.groupby('user_id')['counterparty_country'].nunique().reset_index()
    unique_countries.rename(columns={'counterparty_country': 'unique_counterparty_countries'}, inplace=True)

    # === Time-Based Feature ===
    last_tx = df_tx.groupby('user_id')['timestamp'].max().reset_index()
    last_tx.rename(columns={'timestamp': 'last_transaction_time'}, inplace=True)

    current_time = df_tx['timestamp'].max()
    last_tx['days_since_last_tx'] = (current_time - last_tx['last_transaction_time']).dt.days

    # === Merge Features ===
    df_users = df_users.merge(total_tx, on='user_id', how='left')
    df_users = df_users.merge(tx_count, on='user_id', how='left')
    df_users = df_users.merge(avg_tx, on='user_id', how='left')
    df_users = df_users.merge(std_tx, on='user_id', how='left')
    df_users = df_users.merge(unique_countries, on='user_id', how='left')
    df_users = df_users.merge(last_tx[['user_id', 'days_since_last_tx']], on='user_id', how='left')

    # Fill NaNs for users with no transactions
    df_users['total_transaction_amount'] = df_users['total_transaction_amount'].fillna(0)
    df_users['transaction_count'] = df_users['transaction_count'].fillna(0).astype(int)
    df_users['avg_transaction_amount'] = df_users['avg_transaction_amount'].fillna(0)
    df_users['std_transaction_amount'] = df_users['std_transaction_amount'].fillna(0)
    df_users['unique_counterparty_countries'] = df_users['unique_counterparty_countries'].fillna(0).astype(int)
    df_users['days_since_last_tx'] = df_users['days_since_last_tx'].fillna(-1)

    # === Return with all new features ===
    return df_users

# -*- coding: utf-8 -*-
"""
Created on Tue Jun 24 11:49:22 2025

@author: LENOVO
"""

from etl_pipeline.ingest import load_users, load_transactions
from etl_pipeline.clean import clean_users, clean_transactions
from etl_pipeline.feature_engineering import add_features

def run_pipeline():
    users = clean_users(load_users('data/users.csv'))
    transactions = clean_transactions(load_transactions('data/transactions.csv'))
    
    features = add_features(transactions, users)

    print("✅ Pipeline completed")
    print("🔍 Features shape:", features.shape)
    print("📊 Feature preview:\n", features.head())

    features.to_csv('data/processed/features.csv', index=False)

if __name__ == "__main__":
    run_pipeline()

# -*- coding: utf-8 -*-
"""
Created on Mon Jun 23 19:38:26 2025

@author: LENOVO
"""
import pandas as pd

def load_users(filepath):
    return pd.read_csv(filepath)

def load_transactions(filepath):
    return pd.read_csv(filepath)


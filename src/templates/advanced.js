import pandas as pd
import numpy as np
df=pd.read_csv(r"Z:\\Navneeta\\Postman-Assignment\\employee.csv",
               sep=',',engine='python')
print(df)
df.head(5)

for col in df.columns:
    print(col)
 
df['Date of Birth']=pd.to_datetime(df['Date of Birth'])
df['Date of Joining']=pd.to_datetime(df['Date of Joining'])
display(df[['Date of Birth','Date of Joining']])

df['Emp Name']=df['First Name'].map(str)+' '+df['Last Name'].map(str)
print(df.head(5))

grouped_data=df.groupby(['Quarter of Joining','Emp Name'])['Quarter of Joining'].agg({'Date of Birth':'count'})
grouped_data.sort_values('Date of Birth',ascending=False,inplace=True)

print(grouped_data)

Print_data = {k:list(grouped_data.loc[k].index) for k in grouped_data.index.levels[0]}
print(Print_data)
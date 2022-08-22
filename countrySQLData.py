from  google.cloud import bigquery
import pandas

client = bigquery.Client()

datasetRef = client.dataset('broadstreet_adi', project='bigquery-public-data')

dataset = client.get_dataset(datasetRef)

tables = [t.table_id for t in list(client.list_tables(dataset))]

print(tables)

table_ref = datasetRef.table('area_deprivation_index_by_zipcode')

table = client.get_table(table_ref)

for x in table.schema:
        print(x)

print(client.list_rows(table, max_results=5).to_dataframe())


query = """
SELECT zipcode, area_deprivation_index_percent AS areaDeprivation
FROM `bigquery-public-data.broadstreet_adi.area_deprivation_index_by_zipcode`    
"""
"""

query_config = bigquery.QueryJobConfig(maximum_bytes_billed=10**10)

query = client.query(query, job_config=query_config)

queryData = query.to_dataframe()

queryData.to_csv("./Data/areaDeprivation.csv", index=False)

print(queryData.head())
"""
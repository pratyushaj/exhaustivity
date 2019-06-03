import json
import pandas as pd

def fn(inputFilename, outputFilename):

	with open(inputFilename,'r') as f:
		jsonString = json.load(f)

	jsonObject = json.loads(jsonString)

	probs = jsonObject['probs']
	alphas = jsonObject['support']

	result = []
	for prob,alphaObj in zip(probs,alphas):
		result.append([alphaObj['alpha'],prob])

	df = pd.DataFrame(result)
	df.to_csv(outputFilename, header = ['alpha','probability'])

ifname = './alpha-exh-trials-within-1.json'
ofname = '../results/data/models/alpha-exh-trials-within-1.csv'

fn(ifname,ofname)


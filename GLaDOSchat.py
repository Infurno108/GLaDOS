import keras as kr
import numpy as np
import tensorflow as tf

raw = "hello GLaDOS!"
inputs = []
outputs = []


with open('data/chats.txt') as f:
    contents = f.read()
    raw = contents

raw = raw.split('\n')
for line in raw:
    temp = line.split('\t')
    print(temp[1])

print(inputs)

#OK hello GLaDOS
#Here is the plan. We are going to build a basic language model, one that is simply trained on communication data. I think I will pull a masssssive conversation training data list and train a deep lstm network on it.

#from here I have two experiments I would like to do. Fitting given that I am trying to build GLaDOS. I will first try and add new layers to the model and then train langauge to be simmilar to GLaDOS. I might ask Chat GPT to make GLaDOS conversation data. 

#The much easier experiment is I take the output of both of these hypothetical models and feed them to chat GPT with the request of translating them into GLaDOS speak.

#I would also like to be able to speak to GLaDOS really anywhere. So I think I will probably try and build her into an App. <3




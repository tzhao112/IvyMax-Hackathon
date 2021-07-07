import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.layers import Dense, Reshape, Input
from tensorflow.keras.models import Sequential, Model
import numpy as np
import matplotlib.pyplot as plt
import random
from random import randrange

n = random.randint(25, 32)
voxel_grid = np.random.rand(n,n,n)
size = n*n*n

velocity=np.random.rand(1, 6)
pose=np.random.rand(1, 6)
control = np.random.rand(1, 4)
thrust = np.random.rand(n+16)
Y_train = thrust

test_velocity=np.random.rand(1, 6)
test_pose=np.random.rand(1, 6)
test_control = np.random.rand(1, 4)
test_voxel_grid = np.random.rand(n,n,n)
Y_test=np.random.rand(n+16)


X_tr=np.reshape(voxel_grid,(1,size))

X_valid=np.reshape(voxel_grid,(1,size))

encoder = keras.models.Sequential([
    keras.layers.Dense(20, input_shape=[1,size], activation='relu'),
    keras.layers.Dense(15, activation='selu'),
    keras.layers.Dense(10, activation='selu'),
    keras.layers.Dense(n, activation='selu'),
])

decoder = keras.models.Sequential([
    keras.layers.Dense(10, input_shape=[1,n], activation='selu'),
    keras.layers.Dense(15, activation='selu'),
    keras.layers.Dense(20, activation='selu'),
    keras.layers.Dense(size, activation='relu'),
])

autoencoder = keras.models.Sequential([encoder, decoder])

autoencoder.compile(loss='mse', optimizer = keras.optimizers.SGD(lr=1, decay=1e-4))
print(autoencoder.summary())

autoencoder.fit(X_tr,X_tr, epochs=20,validation_data=(X_valid,X_valid),
                callbacks=[keras.callbacks.EarlyStopping(patience=10)],verbose=1)

new_grid=encoder.predict(X_tr)
X_train=np.concatenate((velocity, pose, control,new_grid), axis=None)

print(X_train)
print(new_grid)
print(Y_train.shape)

model=Sequential(); 
model.add(Dense(units = 1, activation = "relu", input_dim=1))
model.add(Dense(units = 1, activation = "sigmoid"))
model.compile(optimizer="rmsprop", loss = "binary_crossentropy", metrics=['accuracy'])

history = model.fit(X_train, Y_train, batch_size=1, epochs=100)
predict=model.predict(X_train)
print(predict)

accuracy = history.history['accuracy']
loss = history.history['loss']

plt.figure(figsize=(10, 10))
plt.subplot(1, 2, 2)
plt.plot(range(100), accuracy, label='Training Accuracy')
plt.legend(loc='upper right')
plt.title('Training Accuracy')

plt.subplot(1, 2, 1)
plt.plot(range(100), loss, label='Training Loss')
plt.legend(loc='upper right')
plt.title('Training Loss')

plt.show()


import os
path = '/Users/hust-hwashin621m/Desktop/ThanhEro/maison-de-parfum/textures/JPG'
if os.path.exists(path):
    print(f"Directory exists: {path}")
    print(f"Contents: {os.listdir(path)}")
else:
    print(f"Directory DOES NOT exist: {path}")

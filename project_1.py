import random
import requests

url = 'https://71ee79e85c66.ngrok.io/users'

def login_system(): 
    name_input = input('Enter your name: ')
    response = requests.get(url = url)
    data = response.json()
    for name in data['users']:
        #print('input_name =', name_input, 'user_name', name)
        if(name_input == name['name']):
            pass_input = input('Enter your pass: ')
            for password in data['users']:
                if(pass_input == password['password']):
                    print('success')
                else: 
                    print('Invalid Password,try again!')
                break
        else: 
            print('invalid name')
        break

login_system()

##############################Python Random Walk Algorithym##############################################

# import random

# def random_walk(n):
#     x,y = 0,0
#     for i in range(n):
#         (dx,dy) = random.choice([(0,1), (0,-1), (1,0), (-1,0)])
#         y += dy
#         x += dx
#     return (x,y)

# number_of_walks = 20000

# for walk_length in range(1,31):
#     no_transport = 0
#     for i in range(number_of_walks):
#         (x,y) = random_walk(walk_length)
#         distance = abs(x) + abs(y)
#         if distance <= 4:
#             no_transport += 1 
#     no_transport_percentage = float(no_transport) / number_of_walks
#     print("Walk size =", walk_length, "/% of no transport = ", 100 * no_transport_percentage)


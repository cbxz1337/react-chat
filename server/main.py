import eventlet
import socketio
import json

PORT = 2070
HOST = 'localhost'

sio = socketio.Server(cors_allowed_origins=[])
app = socketio.WSGIApp(sio)

chatData = []

chatUsers = []

@sio.on('msg_from_front')
def on_message(sid, data):
    chatData.append(data)
    sio.emit('data_chat_back_one', chatData)
    print("I asd")
    print(chatData)
    with open('data.json', 'a') as f:
        json.dump(chatData[len(chatData)-1], f, indent=5)



@sio.on('new_user_connected')
def new_user_connected(sid, data):
    chatUsers.append({'id': sid, 'name': data})
    sio.emit('online_users', chatUsers)
    print(chatUsers[len(chatUsers)-1])
    print(chatUsers)
    print(data)

@sio.on('disconnect')
def disconnect(sid):
    a = list(filter(lambda user: user['id'] == sid, chatUsers))
    chatUsers.remove(a[0])
    sio.emit('online_users', chatUsers)
    print(sid)





if __name__ == '__main__':
    try:
        eventlet.wsgi.server(eventlet.listen(('localhost', 2070)), app)
        print("Server started")
    except(Exception):
            print("Server error")














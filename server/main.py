import eventlet
import socketio
import json
import os

PORT = 2070
HOST = 'localhost'

sio = socketio.Server(cors_allowed_origins=[])
app = socketio.WSGIApp(sio)

chatData = []

chatUsers = []


@sio.on('msg_from_front')
def on_message(sid, data):
    chatData.append(data)
    sio.emit('data_chat_back_one', data)
    print(data)
    print(chatData)
    with open('data.json', 'w+') as file:
        json.dump(chatData, file, indent=5)


def check_user(data):
    for dc in chatUsers:
        if list(dc.values()).__contains__(data):
            return True


@sio.on('new_user_connected')
def new_user_connected(sid, data):
    if check_user(data):
        sio.emit("check_username", True)
        sio.emit('online_users', chatUsers)
    else:
        chatUsers.append({'id': sid, 'name': data})
        with open('user_data.json', 'w+') as file:
            json.dump(chatUsers, file, indent=5)
        sio.emit('allData', chatData)
        sio.emit('online_users', chatUsers)
        sio.emit('chat_new_user_msg', data)
        print(f"User {data} Connected")


@sio.on('disconnect')
def disconnect(sid):
    a = list(filter(lambda user: user['id'] == sid, chatUsers))
    if chatUsers.__contains__(a[0]):
        chatUsers.remove(a[0])
    name = dict(a[0])['name']
    sio.emit('online_users', chatUsers)
    sio.emit('chat_disconnect_user_msg', name)
    print(sid)
    print(name)


if __name__ == '__main__':
    try:
        if os.stat("data.json").st_size == 0:
            eventlet.wsgi.server(eventlet.listen(('localhost', 2070)), app)
            print("Server started")
        else:
            with open('data.json', 'r') as f:
                a = json.load(f)
            chatData = a
            eventlet.wsgi.server(eventlet.listen(('localhost', 2070)), app)
            print("Server started")
    except BaseException:
        print(Exception)

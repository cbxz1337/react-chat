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
    a = list({v['name']: v for v in chatData}.values())
    sio.emit('data_chat_back_one', data)
    print(data)
    print(chatData)
    with open('data.json', 'w+') as f:
        json.dump(chatData, f, indent=5)


def checkUser(data):
    for dict in chatUsers:
        if list(dict.values()).__contains__(data):
            return True



@sio.on('new_user_connected')
def new_user_connected(sid, data):
    if checkUser(data):
        sio.emit("check_username", True)
        print("asd")
    else:
        chatUsers.append({'id': sid, 'name': data})
        with open('user_data.json', 'w+') as f:
            json.dump(chatUsers, f, indent=5)
        sio.emit('allData', chatData)
        sio.emit('online_users', chatUsers)
        print("Connected")


@sio.on('disconnect')
def disconnect(sid):
    a = list(filter(lambda user: user['id'] == sid, chatUsers))
    if chatUsers.__contains__(a[0]):
        chatUsers.remove(a[0])
    sio.emit('online_users', chatUsers)
    print(sid)


if __name__ == '__main__':
    try:
        with open('data.json', 'r') as f:
            a = json.load(f)
        chatData = a
        eventlet.wsgi.server(eventlet.listen(('localhost', 2070)), app)
        print("Server started")
    except(Exception):
            print("Server error")













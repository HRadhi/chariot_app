import signal
import sys
import socketio


sio = socketio.Client()

@sio.event
def connect():
    print('Connection established')

@sio.event
def disconnect():
    print('Connection disconnected')


@sio.on('direction')
def response(*args):
    print(args[0])

def signal_handler():
    # close the socket here
    sys.exit(0)


sio.connect('http://localhost:3001')
sio.wait()

# Closing client an free the used port
signal.signal(signal.SIGINT, signal_handler)

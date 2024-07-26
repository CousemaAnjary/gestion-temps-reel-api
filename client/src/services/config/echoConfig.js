import Echo from 'laravel-echo'
// import Pusher from 'pusher-js'

// window.Pusher = Pusher;

// const echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

// export default echo

const echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
});

export default echo
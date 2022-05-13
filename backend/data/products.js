const products = [
    {
        _id:'1',
        name:'Apple AirPods Pro',
        description:'AirPods are lightweight and offer a contoured design. They sit at just the right angle for comfort and to better direct audio to your ear. The stem is 33percent shorter than AirPods (2ndgeneration) and includes a force sensor to easily control music and calls',
        brand:'Apple',
        category:'Electronics',
        price:17990,
        countInStock:10,
        rating:4.5,
        numReviews:12,
        image:'/images/bud.jpg'
    },
    {
        _id:'5',
        name:'Lenovo IdeaPad 3 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home)',
        description:'One of the best student laptop money can buy, been using it for over a month now. Its fast and responsive and does not have heat issues.',
        brand:'Lenova',
        category:'Electronics',
        price:41990,
        countInStock:50,
        rating:4.7,
        numReviews:9,
        image:'/images/lenova-laptop.jpg'
    },
    {
        _id:'6',
        name:'acer 23.8 inch Full HD LED Backlit VA Panel Monitor ',
        description:'AirPods are lightweight and offer a contoured design. They sit at just the right angle for comfort and to better direct audio to your ear. The stem is 33percent shorter than AirPods (2ndgeneration) and includes a force sensor to easily control music and calls',
        brand:'acer',
        category:'Electronics',
        price:10699,
        countInStock:16,
        rating:4.8,
        numReviews:22,
        image:'/images/monitor.jpg'
    },
    {
        _id:'2',
        name:'Micromax IN 1b (Purple, 32 GB)  (2 GB RAM)',
        description:'Say hello to the Micromax IN 1b smartphone whose powerful MediaTek Helio G35 gaming processor and a 5000 mAh battery will pave the way for effortless multitasking and usage. Oh, and it also comes with the Face Unlock feature and a fingerprint sensor so that you can access your phone in a safe and secure manner.',
        brand:'Micromax',
        category:'Electronics',
        price:7499,
        countInStock:8,
        rating:4.8,
        numReviews:7,
        image:'/images/micromax.jpg'
    },
    {
        _id:'3',
        name:'boAt Rockerz 370 Bluetooth Headset  (Buoyant Black, On the Ear)',
        description:'If you are looking for a wallet-friendly wireless headset then this boAt headset is ideal for you. A complete charging session ensures that you receive a playback time of up to 8 hours. Moreover, it allows wired and wireless connectivity with AUX and Bluetooth. Furthermore, the earcups are adjustable, padded, and comfortable.',
        brand:'Boat',
        category:'Electronics',
        price:990,
        countInStock:5,
        rating:3.5,
        numReviews:15,
        image:'/images/headphone.jpg'
    },
    {
        _id:'4',
        name:'ZEBRONICS WARRIOR II 2.0 CHANNEL USB SPEAKER',
        description:'The Zeb-Warrior II USB-powered 2.0 speaker is here to ensure that your gaming experience is amplified, thanks to its aesthetic design and RGB LED lights. The speaker is ideal for your home PC or laptop, enabling you to game immersively and with ease. And, it is USB-powered along with a 3.5 mm AUX input so that you can charge and use the speaker without a hassle.',
        brand:'Zebronics',
        category:'Electronics',
        price:699,
        countInStock:4,
        rating:3.9,
        numReviews:2,
        image:'/images/speaker.jpg'
    },
]
// export default products;
module.exports=products
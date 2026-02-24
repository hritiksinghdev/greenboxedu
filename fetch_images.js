const https = require('https');
const fs = require('fs');

const images = [
    { url: 'https://images.unsplash.com/photo-1541339907198-e08756bf03cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', dest: 'public/images/hero1.jpg' },
    { url: 'https://images.unsplash.com/photo-1594900595304-712803b9f485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', dest: 'public/images/hero2.jpg' },
    { url: 'https://images.unsplash.com/photo-1544365558-35aa4afcf11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', dest: 'public/images/hero3.jpg' },
    { url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', dest: 'public/images/hero4.jpg' },
    { url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', dest: 'public/images/hero5.jpg' },
    { url: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80', dest: 'public/images/hero6.jpg' }
];

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return download(response.headers.location, dest).then(resolve).catch(reject);
            }

            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve());
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

Promise.all(images.map(img => download(img.url, img.dest)))
    .then(() => console.log('All images downloaded successfully'))
    .catch(err => console.error('Error downloading images:', err));

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/photos/1";

interface Photo {
    id: number;
    title: string;
    thumbnailUrl: string;
}

axios.get(url).then((response) => {
    // response is of type AxiosResponse<Photo>
    const photo = response.data as Photo;

    const id = photo.id;
    const title = photo.title;
    const thumbnailUrl = photo.thumbnailUrl;

    logPhoto(id, title, thumbnailUrl);
    
});

const logPhoto = (id: number, title: string, thumbnailUrl: string) => {
    console.log(
    `
    The ID: ${id}
    The title: ${title} 
    The thumbnail: ${thumbnailUrl}
    `);
};

const BASE_API='https://graph.instagram.com/me';
const ACCESS_TOKEN="IGQVJYNUZA1VlZALM1hVZA0pteEkzSllNVDV5V1NHX0FGTlVkT2lCMWRkdjBOWmIzUXJ4NlJlM1FqUnh0VEQtcmtvMnNUamN1ZAXZAyXzJ2UE16SFJyRUVGMUFOSm5iel94OG5ocFdBaU1jUnU2UzhYc2ZAYa3FkTFNlQ3FWZAC00";

const username=document.getElementById('username');
const posts=document.getElementById('posts');
const photos=document.getElementById('photos');

async function getUserInfo() {
	const response=await fetch(`${BASE_API}?fields=username,media_count&access_token=${ACCESS_TOKEN}`);
	const userInfo=await response.json();
	console.log(userInfo);
	username.innerHTML=userInfo.username;
	posts.innerHTML=userInfo.media_count;
	return userInfo;
}

getUserInfo();

async function getUserMediaInfo() {
	const response=await fetch(`${BASE_API}/media?fields=id,media_url&access_token=${ACCESS_TOKEN}`);
	const userMediaInfo=await response.json();
	console.log(userMediaInfo);
	return userMediaInfo;
}

getUserMediaInfo().then(media => {
	media.data.map((mediaInfo) => {
		const img=document.createElement('img');
		img.style.width='100px';
		img.src=mediaInfo.media_url;
		photos.appendChild(img);
	})
});










// https://api.instagram.com/oauth/authorize?client_id=240878464792752&redirect_uri=https://bryantjimenez.github.io/instagram-redesign-app-platzi/&scope=user_profile,user_media&response_type=code
// https://bryantjimenez.github.io/instagram-redesign-app-platzi/?code=AQCHF2Za9ndQmD2fb_4NAOLGkj7ZjjEzOVQGFBjBUtzatrTTwktemOjRaRFRoKnMIk9tUFqqhlhtlhViwwXSS3SNVbUtv9wMx6I8r1Oiw5tsprAJv2xtCG5GLShBrhGCL5TxbjBtblGHrwSNlbOfdM2-KPb7VLzxDoWi5chpklq2bSPLQ1P7tP55iRisNxVyiuZ0RfPRQey0pNo6_cN01bQeQDQ0VbuS8KiLKT0X_0EDYA

// {
//     "access_token": "IGQVJYNUZA1VlZALM1hVZA0pteEkzSllNVDV5V1NHX0FGTlVkT2lCMWRkdjBOWmIzUXJ4NlJlM1FqUnh0VEQtcmtvMnNUamN1ZAXZAyXzJ2UE16SFJyRUVGMUFOSm5iel94OG5ocFdBaU1jUnU2UzhYc2ZAYa3FkTFNlQ3FWZAC00",
//     "user_id": 17841400463222203
// }
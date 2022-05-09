import Post from './Post';

const posts = [{
    userImage: "assets/img/meowed.svg", user: "meowed", liked: "respondeai", likedImage: "assets/img/respondeai.svg", likedNumber: "101.523", image: "assets/img/gato-telefone.svg"
}, 
{userImage: "assets/img/barked.svg", user: "barked", liked: "adorable_animals", likedImage: "assets/img/adorable_animals.svg", likedNumber: "99.159", image: "assets/img/dog.svg"}]

export default function Posts() {
    return (
        <div class="posts">
            {posts.map((post) => <Post userImage={post.userImage} user ={post.user} liked={post.liked} likedImage={post.likedImage} likedNumber={post.likedNumber} image={post.image} />)}            
        </div>
    )
}
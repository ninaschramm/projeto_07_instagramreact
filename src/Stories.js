import Story from './Story'
const stories = [ "9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"]

export default function Stories() {
    return (
        <div class="stories">
            {stories.map((story) => <Story image={`assets/img/${story}.svg`} user={story} />)}
           
        
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>    
    )
}
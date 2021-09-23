import './ArticlesPage.css'


export default function ArticlesPage() {
    return (
        <div className='articles-container'>
            <div className='articles-title'>Learn More</div>
            <div id='rover' className='article-card'>
                <div className='article-title'>50 Foods Dogs Can't Eat</div>
                <div className='article-link'><a href="https://fluentwoof.com/foods-dogs-cant-eat">Click Here to Read the Article</a></div>
            </div>
            <div id='fluentwoof' className='article-card'>
                <div className='article-title'>Top 10 Best Foods For Dogs</div>
                <div className='article-link'><a href="https://www.rover.com/blog/can-my-dog-eat-that">Click Here to Read the Article</a></div>
            </div>

            
        </div>
    )
}
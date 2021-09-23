import './ArticlesPage.css'


export default function ArticlesPage() {
    return (
        <div className='articles-container'>
            <p><span className="articles-title">Articles</span> <span className='articles-description'>Our Source Selection Criteria</span>
            </p>
            <div id='rover' className='article-card'>
                <div className='article-title'>50 Foods Dogs Can't Eat</div>
                <div className='article-link'>Click Here to Read the Article</div>
            </div>
            <div id='fluentwoof' className='article-card'>
                <div className='article-title'>Top 10 Best Foods For Dogs</div>
                <div className='article-link'>Click Here to Read the Article</div>
            </div>
        </div>
    )
}